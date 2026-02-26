import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import InputFormItem from "src/shared/form/InputFormItem";
import ButtonIcon from "src/shared/ButtonIcon";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
    required: true,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n("user.fields.newPasswordConfirmation"), {
      required: true,
    })
    .oneOf([yup.ref("password")], i18n("auth.passwordChange.mustMatch")),
  phoneNumber: yupFormSchemas.string(i18n("user.fields.phoneNumber"), {
    required: true,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("user.fields.withdrawPassword"),
    { required: true }
  ),
  invitationcode: yupFormSchemas.string(i18n("user.fields.invitationcode"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("user.fields.rememberMe")),
});

function Signup() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const [initialValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    withdrawPassword: "",
    invitationcode: "",
    rememberMe: true,
  });

  // Fetch countries + IP country detection
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2"
        );

        const countriesData = response.data
          .filter((c) => c.idd?.root)
          .map((country) => {
            let dialCode = country.idd.root;
            const rootOnlyCountries = ['US', 'CA', 'RU', 'KZ', 'AU'];
            if (rootOnlyCountries.includes(country.cca2)) {
              dialCode = country.idd.root;
            } else if (country.idd.suffixes && country.idd.suffixes.length > 0) {
              dialCode = country.idd.root + (country.idd.suffixes[0] || "");
            }
            return {
              value: dialCode,
              label: country.name.common,
              code: country.cca2,
              flag: country.flags.svg,
            };
          })
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(countriesData);

        try {
          const ipResponse = await axios.get("https://ip2c.org/s");
          const countryCode = ipResponse.data.split(";")[1];
          const defaultCountry = countriesData.find(
            (c) => c.code === countryCode
          );
          setSelectedCountry(defaultCountry || countriesData[0]);
        } catch {
          setSelectedCountry(countriesData[0]);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.value.includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const onSubmit = ({
    email,
    password,
    phoneNumber,
    withdrawPassword,
    invitationcode,
  }) => {
    const fullPhoneNumber = `${selectedCountry?.value || "+1"}${phoneNumber}`;
    dispatch(
      actions.doRegisterEmailAndPassword(
        email,
        password,
        fullPhoneNumber,
        withdrawPassword,
        invitationcode
      )
    );
  };

  return (
    <div className="auth__page">
      {/* White card wrapper */}
      <div className="auth__card">
        <div className="auth__header">
          <div className="auth__icon">🏨</div>
          <h1 className="auth__title">{i18n('pages.auth.signup.createAccount')}</h1>
          <p className="auth__description">
            {i18n('auth.signup.signupForAccount')}
          </p>
        </div>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="auth__form">
              {/* Email */}
              <div className="form__group">
                <InputFormItem
                  type="text"
                  name="email"
                  placeholder={i18n("user.fields.username")}
                  className="auth__input"
                  externalErrorMessage={externalErrorMessage}
                />
              </div>

              {/* Phone Number with Country Selector */}
              <div className="form__group phone-input-wrapper">
                <div
                  className={`phone-input-container ${dropdownOpen ? 'dropdown-open' : ''}`}
                  ref={dropdownRef}
                >
                  <div className="phone-input-inner">
                    {/* Country Selector */}
                    <div
                      className="country-selector"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {selectedCountry && (
                        <div className="country-selected">
                          <img
                            src={selectedCountry.flag}
                            alt={selectedCountry.label}
                            className="country-flag"
                          />
                          <span className="country-code">{selectedCountry.value}</span>
                          <span className="dropdown-arrow">▾</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="phone-number-input">
                      <InputFormItem
                        type="tel"
                        name="phoneNumber"
                        placeholder={i18n('pages.auth.signup.phonePlaceholder')}
                        className="auth__input phone-input"
                      />
                    </div>
                  </div>

                  {/* Country Dropdown */}
                  {dropdownOpen && (
                    <div className="country-dropdown">
                      <div className="dropdown-search">
                        <input
                          type="text"
                          placeholder={i18n('pages.auth.signup.searchCountries')}
                          className="search-input"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="dropdown-list">
                        {filteredCountries.map((country) => (
                          <div
                            key={country.code}
                            className={`country-option ${selectedCountry?.code === country.code ? "selected" : ""}`}
                            onClick={() => {
                              setSelectedCountry(country);
                              setDropdownOpen(false);
                              setSearchTerm("");
                            }}
                          >
                            <img
                              src={country.flag}
                              alt={country.label}
                              className="country-flag"
                            />
                            <span className="country-name">{country.label}</span>
                            <span className="country-dial-code">{country.value}</span>
                          </div>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="no-results">
                            {i18n('pages.auth.signup.noCountriesFound')}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Withdraw Password */}
              <div className="form__group">
                <InputFormItem
                  type="password"
                  name="withdrawPassword"
                  placeholder={i18n("user.fields.withdrawPassword")}
                  className="auth__input"
                />
              </div>

              {/* Password */}
              <div className="form__group">
                <InputFormItem
                  type="password"
                  name="password"
                  placeholder={i18n("user.fields.password")}
                  className="auth__input"
                />
              </div>

              {/* Confirm Password */}
              <div className="form__group">
                <InputFormItem
                  type="password"
                  name="newPasswordConfirmation"
                  autoComplete="new-password"
                  placeholder={i18n("user.fields.confirmPassword")}
                  className="auth__input"
                />
              </div>

              {/* Invitation Code */}
              <div className="form__group">
                <InputFormItem
                  type="text"
                  name="invitationcode"
                  placeholder={i18n("user.fields.invitationcode")}
                  className="auth__input"
                />
              </div>
            </div>

            <div className="auth__bottom">
              <button className="auth__button" disabled={loading} type="submit">
                <ButtonIcon loading={loading} />
                <span>{i18n('pages.auth.signup.signupButton')}</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              <div className="signup-text">
                <span>{i18n('pages.auth.signup.alreadyHaveAccount')}</span>
                <Link to="/auth/signin" className="signup-link">
                  {i18n('auth.signin')}
                </Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #EDF1F7;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        .auth__page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .auth__card {
          width: 100%;
          max-width: 400px;
          background: white;
          border-radius: 32px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.02);
          padding: 32px 24px 36px;
        }

        .auth__header {
          text-align: center;
          margin-bottom: 28px;
        }

        .auth__icon {
          font-size: 42px;
          background: #F0F6FF;
          width: 74px;
          height: 74px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 8px 16px rgba(68, 136, 247, 0.12);
          color: rgb(68, 136, 247);
        }

        .auth__title {
          font-size: 24px;
          font-weight: 600;
          color: #1F2A3E;
          margin-bottom: 4px;
        }

        .auth__description {
          font-size: 14px;
          color: #6A7A8E;
        }

        .auth__form {
          margin-bottom: 20px;
        }

        .form__group {
          margin-bottom: 16px;
        }

        /* Input styling (reused for all text inputs) */
        .auth__input {
          width: 100%;
          padding: 10px 16px;
          border: 1px solid #E9EDF3;
          border-radius: 22px;
          font-size: 15px;
          background: #F2F5FA;
          transition: border 0.15s, box-shadow 0.15s;
          outline: none;
        }

        .auth__input:focus {
          border-color: rgb(68, 136, 247);
          box-shadow: 0 0 0 3px rgba(68, 136, 247, 0.08);
        }

        .auth__input::placeholder {
          color: #9AA6B5;
          font-weight: 350;
        }

        /* Phone input container */
        .phone-input-container {
          position: relative;
          width: 100%;
        }

        .phone-input-inner {
          display: flex;
          align-items: center;
          background: #F2F5FA;
          border: 1px solid #E9EDF3;
          border-radius: 22px;
          transition: border 0.15s, box-shadow 0.15s;
        }

        .phone-input-container:focus-within .phone-input-inner {
          border-color: rgb(68, 136, 247);
          box-shadow: 0 0 0 3px rgba(68, 136, 247, 0.08);
        }

        .country-selector {
          cursor: pointer;
          padding: 0 8px 0 12px;
          border-right: 1px solid #DCE3EC;
          display: flex;
          align-items: center;
          height: 44px;
        }

        .country-selected {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: #2C3A4B;
        }

        .country-flag {
          width: 22px;
          height: 16px;
          object-fit: cover;
          border-radius: 2px;
        }

        .country-code {
          font-weight: 500;
        }

        .dropdown-arrow {
          font-size: 16px;
          color: #7C8797;
          margin-left: 2px;
        }

        .phone-number-input {
          flex: 1;
        }

        .phone-number-input .auth__input {
          border: none;
          background: transparent;
          padding: 10px 12px 10px 8px;
          border-radius: 0 22px 22px 0;
        }

        .phone-number-input .auth__input:focus {
          box-shadow: none;
          border-color: transparent;
        }

        /* Country dropdown */
        .country-dropdown {
          position: absolute;
          top: 54px;
          left: 0;
          right: 0;
          background: white;
          border-radius: 20px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
          z-index: 10;
          max-height: 300px;
          display: flex;
          flex-direction: column;
          border: 1px solid #EDF2F7;
        }

        .dropdown-search {
          padding: 12px;
          border-bottom: 1px solid #EDF2F7;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #E9EDF3;
          border-radius: 30px;
          font-size: 14px;
          background: #F8FAFE;
          outline: none;
        }

        .search-input:focus {
          border-color: rgb(68, 136, 247);
        }

        .dropdown-list {
          overflow-y: auto;
          max-height: 240px;
          padding: 8px 0;
        }

        .country-option {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          cursor: pointer;
          transition: background 0.1s;
          gap: 10px;
        }

        .country-option:hover {
          background: #F2F5FA;
        }

        .country-option.selected {
          background: #E9F0FF;
        }

        .country-option .country-flag {
          width: 24px;
          height: 18px;
        }

        .country-option .country-name {
          flex: 1;
          font-size: 14px;
          color: #1F2A3E;
        }

        .country-option .country-dial-code {
          font-size: 13px;
          color: #6A7A8E;
        }

        .no-results {
          padding: 16px;
          text-align: center;
          color: #9AA6B5;
          font-size: 14px;
        }

        /* Button */
        .auth__button {
          width: 100%;
          background-color: rgb(68, 136, 247) !important;
          border: none;
          border-radius: 34px;
          padding: 14px 18px;
          color: white;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.4px;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(68, 136, 247, 0.3);
          transition: transform 0.12s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .auth__button:hover {
          transform: scale(1.02);
          box-shadow: 0 14px 28px rgba(68, 136, 247, 0.35);
        }

        .auth__button:active {
          transform: scale(0.98);
          box-shadow: 0 6px 14px rgba(68, 136, 247, 0.4);
        }

        .auth__button i {
          font-size: 15px;
        }

        /* Signup link */
        .signup-text {
          text-align: center;
          font-size: 15px;
          color: #4D5F72;
        }

        .signup-link {
          color: rgb(68, 136, 247);
          font-weight: 600;
          text-decoration: none;
          margin-left: 4px;
        }

        .signup-link:hover {
          text-decoration: underline;
        }

        /* Remove any extra underline from links */
        .remove__ligne {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Signup;