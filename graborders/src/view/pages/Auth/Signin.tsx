import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFormItem from "src/shared/form/InputFormItem";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("user.fields.rememberMe")),
});

function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };

  const handleLanguageToggle = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="auth__page">
      {/* Language switcher */}
      <div className="language-switcher">
        <button onClick={handleLanguageToggle} className="lang-btn" aria-label="Switch language">
          🌐
        </button>
      </div>

      <div className="auth__card">
        <div className="auth__header">
          <div className="auth__icon">🏨</div>
          <h1 className="auth__title">{i18n('pages.auth.signin.welcomeBack')}</h1>
          <p className="auth__description">{i18n('pages.auth.signin.signinToAccount')}</p>
        </div>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="auth__form">
              <div className="form__group">
                <InputFormItem
                  type="text"
                  name="email"
                  placeholder={i18n("user.fields.username")}
                  className="auth__input"
                  externalErrorMessage={externalErrorMessage}
                />
              </div>

              <div className="form__group">
                <InputFormItem
                  type="password"   // changed from "text" to "password"
                  name="password"
                  placeholder={i18n("user.fields.password")}
                  className="auth__input"
                />
              </div>

              {/* Remember me & forgot password row */}
              <div className="form__row-actions">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    {...form.register("rememberMe")}
                    defaultChecked={initialValues.rememberMe}
                  />
                  <span>{i18n("user.fields.rememberMe")}</span>
                </label>
                <Link to="/auth/forgot-password" className="forgot-link">
                  {i18n("pages.auth.signin.forgotPassword")}
                </Link>
              </div>
            </div>

            <div className="auth__bottom">
              <button className="auth__button" disabled={loading} type="submit">
                <ButtonIcon loading={loading} />
                <span>{i18n('pages.auth.signin.signinButton')}</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              <div className="signup-text">
                <span>{i18n('pages.auth.signin.noAccount')}</span>
                <Link to="/auth/signup" className="signup-link">
                  {i18n('pages.auth.signin.signupHere')}
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
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
          background-color: #EDF1F7;
        }

        .auth__page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #EDF1F7;
          padding: 0 8px;
          position: relative;
        }

        .language-switcher {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }

        .lang-btn {
          background: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .lang-btn:hover {
          transform: scale(1.05);
        }

        .auth__card {
          width: 100%;
          max-width: 400px;
          background: white;
          border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.03);
          padding: 32px 24px 36px;
        }

        .auth__header {
          text-align: center;
          margin-bottom: 32px;
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

        .auth__input {
          width: 100%;
          padding: 10px 16px;
          border: 1px solid #E9EDF3;
          border-radius: 22px;
          font-size: 15px;
          background: #F2F5FA;
          transition: border 0.15s, box-shadow 0.15s;
        }

        .auth__input:focus {
          outline: none;
          border-color: rgb(68, 136, 247);
          box-shadow: 0 0 0 3px rgba(68, 136, 247, 0.08);
        }

        .auth__input::placeholder {
          color: #9AA6B5;
          font-weight: 350;
        }

        .form__row-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0 20px;
          font-size: 14px;
        }

        .checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2C3A4B;
          cursor: pointer;
        }

        .checkbox input[type="checkbox"] {
          accent-color: rgb(68, 136, 247);
          width: 16px;
          height: 16px;
        }

        .forgot-link {
          color: rgb(68, 136, 247);
          text-decoration: none;
          font-weight: 500;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .auth__bottom {
          text-align: center;
        }

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

        .signup-text {
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

        /* override any potential extra styles */
        .auth__input {
          background-color: #F2F5FA !important;
        }
      `}</style>
    </div>
  );
}

export default Signin;