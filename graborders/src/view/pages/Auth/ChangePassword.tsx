import React, { useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import actions from 'src/modules/auth/authActions';
import InputFormItem from "src/shared/form/InputFormItem";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";

const schema = yup.object().shape({
  oldPassword: yupFormSchemas.string(i18n("user.fields.oldPassword"), {
    required: true,
  }),
  newPassword: yupFormSchemas.string(i18n("user.fields.newPassword"), {
    required: true,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n("user.fields.newPasswordConfirmation"), {
      required: true,
    })
    .oneOf(
      [yup.ref("newPassword"), null],
      i18n("auth.passwordChange.mustMatch")
    ),
});

function ChangePassword() {
  const dispatch = useDispatch();
  const [initialValues] = useState(() => ({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const saveLoading = useSelector(selectors.selectLoadingPasswordChange);

  const onSubmit = (values) => {
    dispatch(actions.doChangePassword(values.oldPassword, values.newPassword));
  };

  return (
    <div>
      {/* Inline styles for black/white theme */}
      <style>{`
        /* Black and white theme for ChangePassword page */
        .app__wallet .wallet__ .form-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 1rem;
          background-color: #ffffff;
          color: #000000;
          font-family: sans-serif;
        }

        .app__wallet .wallet__ .form-group {
          margin-bottom: 0.4rem; /* updated from 1rem to 0.4rem */
          display: flex;
          flex-direction: column;
        }

        .app__wallet .wallet__ .label__form {
          display: flex;
          align-items: center;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
          color: #333;
        }

        .app__wallet .wallet__ .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          transition: border-color 0.2s;
        }

        .app__wallet .wallet__ .input:focus {
          border-color: rgb(0, 157, 254);
          outline: none;
        }

        .app__wallet .wallet__ .button {
          background-color: rgb(0, 157, 254) !important;
          color: #fff !important;
          border: none;
          border-radius: 4px;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
          width: 100%;          /* full width */
          margin-top: 0.5rem;
        }

        .app__wallet .wallet__ .button:hover {
          background-color: #007acc !important;
        }

        .app__wallet .wallet__ .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .app__wallet .wallet__ .note-text {
          display: block;
          margin-top: 1rem;
          font-size: 0.85rem;
          color: #555;
        }

        /* Remove extra spacing from parent containers */
        .app__wallet,
        .wallet__ {
          padding: 0;
          margin: 0;
        }

        /* Optional icon spacing */
        .app__wallet .wallet__ .button i,
        .app__wallet .wallet__ .button svg {
          margin-right: 0.5rem;
        }

        /* Slightly narrower on larger screens */
        @media (min-width: 768px) {
          .app__wallet .wallet__ .form-container {
            max-width: 450px;
          }
        }
      `}</style>

      <SubHeader title={i18n('pages.changePassword.title')} path="/profile" />
      <div className="app__wallet">
        <div className="wallet__">
          <FormProvider {...form}>
            <div className="form-container">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Old Password */}
                <div className="form-group">
                  <div className="label__form">
                    <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                    <span style={{ fontSize: "13px" }}>{i18n('pages.changePassword.oldPassword')}</span>
                  </div>
                  <InputFormItem
                    type="password"
                    name="oldPassword"
                    autoComplete="old-password"
                    className="input"
                  />
                </div>

                {/* New Password */}
                <div className="form-group">
                  <div className="label__form">
                    <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                    <span style={{ fontSize: "13px" }}>{i18n('pages.changePassword.newPassword')}</span>
                  </div>
                  <InputFormItem
                    type="password"
                    name="newPassword"
                    autoComplete="new-password"
                    className="input"
                  />
                </div>

                {/* Confirm New Password */}
                <div className="form-group">
                  <div className="label__form">
                    <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                    <span style={{ fontSize: "13px" }}>{i18n('pages.changePassword.confirmPassword')}</span>
                  </div>
                  <InputFormItem
                    type="password"
                    name="newPasswordConfirmation"
                    autoComplete="new-password"
                    className="input"
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="button"
                  disabled={saveLoading}
                  type="submit"
                >
                  <ButtonIcon
                    loading={saveLoading}
                    iconClass="far fa-save"
                  />
                  {i18n('pages.changePassword.submit')}
                </button>

                {/* Note */}
                <span className="note-text">
                  <b>Note:</b> {i18n('pages.changePassword.note')}
                </span>
              </form>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;