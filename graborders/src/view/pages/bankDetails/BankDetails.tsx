
import React, { useCallback, useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import InputFormItem from "src/shared/form/InputFormItem";
import actions from "src/modules/user/form/userFormActions";
import authActions from "src/modules/auth/authActions";

const schema = yup.object().shape({

  accountHolder: yupFormSchemas.string(i18n("entities.transaction.fields.accountHolder"), {
    required: true,
  }),
  ibanNumber: yupFormSchemas.string(i18n("entities.transaction.fields.ibanNumber"), {
    required: true,
  }),
  bankName: yupFormSchemas.string(i18n("entities.transaction.fields.bankName"), {
    required: true,
  }),
  ifscCode: yupFormSchemas.string(i18n("entities.transaction.fields.ifscCode"), {
    required: true,
  })
});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  const refreshItems = useCallback(async () => {
    await dispatch(authActions.doRefreshCurrentUser());
  }, [dispatch]);

  const onSubmit = async ({ accountHolder, ibanNumber, bankName, ifscCode }) => {
    const values = {
      accountHolder: accountHolder,
      ibanNumber: ibanNumber,
      bankName: bankName,
      ifscCode: ifscCode,

    };
    await dispatch(actions.doUpdateBank(values));
    await refreshItems();
  };

  const [initialValues] = useState({
    accountHolder: currentUser?.accountHolder || "",
    ibanNumber: currentUser?.ibanNumber || "",
    bankName: currentUser?.bankName || "",
    ifscCode: currentUser?.ifscCode || "",
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  return (
    <div>
      {/* Inline styles (same as ChangePassword page) */}
      <style>{`
        /* Black and white theme for Withdraw page */
        .withdraw-page-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 1rem;
          background-color: #ffffff;
          color: #000000;
          font-family: sans-serif;
        }

        .form-group {
          margin-bottom: 0.4rem;
          display: flex;
          flex-direction: column;
        }

        .label__form {
          display: flex;
          align-items: center;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
          color: #333;
        }

        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          transition: border-color 0.2s;
        }

        .input:focus {
          border-color: rgb(0, 157, 254);
          outline: none;
        }

        .button {
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
          width: 100%;
          margin-top: 0.5rem;
        }

        .button:hover {
          background-color: #007acc !important;
        }

        .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .note-text {
          display: block;
          margin-top: 1rem;
          font-size: 0.85rem;
          color: #555;
        }

        /* Additional styles for withdraw page */
        .balance-info {
          display: block;
          margin-bottom: 1rem;
          font-size: 14px;
          color: #000;
          font-weight: 500;
        }

        .announcement-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 1rem 0;
          padding: 0.5rem;
          background-color: #f8f8f8;
          border-radius: 4px;
          border-left: 3px solid rgb(0, 157, 254);
        }

        .speaker {
          font-size: 1.2rem;
          color: rgb(0, 157, 254);
        }

        .announcement-text {
          font-size: 0.85rem;
          color: #333;
          line-height: 1.4;
        }

        /* Optional: style for the withdraw password section */
        .withdraw-password-section {
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          .withdraw-page-container {
            max-width: 450px;
          }
        }
      `}</style>

      <SubHeader title={i18n('pages.bankDetails.title')} path="/profile" />
      <div className="withdraw-page-container">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Available Balance */}
         

            {/* Amount Field */}
            <div className="form-group">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('entities.transaction.fields.accountHolder')}</span>
              </div>
              <InputFormItem
                type="text"
                name="accountHolder"
                placeholder={i18n("entities.transaction.fields.accountHolder")}
                className="input"
              />
            </div>

            {/* Withdraw Password Field */}
            <div className="form-group withdraw-password-section">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('entities.transaction.fields.ibanNumber')}</span>
              </div>
              <InputFormItem
                type="text"  // changed from text to password for security
                name="ibanNumber"
                placeholder={i18n("entities.transaction.fields.ibanNumber")}
                className="input"
              />
            </div>

            <div className="form-group withdraw-password-section">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('entities.transaction.fields.bankName')}</span>
              </div>
              <InputFormItem
                type="text"  // changed from text to password for security
                name="bankName"
                placeholder={i18n("entities.transaction.fields.bankName")}
                className="input"
              />
            </div>

            <div className="form-group withdraw-password-section">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('entities.transaction.fields.ifscCode')}</span>
              </div>
              <InputFormItem
                type="text"  // changed from text to password for security
                name="ifscCode"
                placeholder={i18n("entities.transaction.fields.ifscCode")}
                className="input"
              />
            </div>




            {/* Submit Button */}
            <button
              className="button"
              type="submit"
               // assuming withdraw flag enables the button
            >
              {i18n('pages.withdraw.confirm')}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Withdraw;
