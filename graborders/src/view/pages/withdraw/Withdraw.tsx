
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
import actions from "src/modules/transaction/form/transactionFormActions";
import authActions from "src/modules/auth/authActions";

const schema = yup.object().shape({
  amount: yupFormSchemas.integer(i18n("entities.transaction.fields.amount"), {
    required: true,
    min: 50,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("user.fields.withdrawPassword"),
    {
      required: true,
    }
  ),
});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  const refreshItems = useCallback(async () => {
    await dispatch(authActions.doRefreshCurrentUser());
  }, [dispatch]);

  const onSubmit = async ({ amount, withdrawPassword }) => {
    const values = {
      status: "pending",
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: "withdraw",
      amount: amount,
      vip: currentUser,
      withdrawPassword: withdrawPassword,
    };
    await dispatch(actions.doCreate(values));
    await refreshItems();
  };

  const [initialValues] = useState({
    amount: "",
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

      <SubHeader title={i18n('pages.withdraw.title')} path="/profile" />
      <div className="withdraw-page-container">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Available Balance */}
            <span className="balance-info">
              {i18n('pages.withdraw.availableBalance')} : €{currentUser?.balance?.toFixed(2) || 0} 
            </span>

            {/* Amount Field */}
            <div className="form-group">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('pages.withdraw.withdrawAmount')}</span>
              </div>
              <InputFormItem
                type="text"
                name="amount"
                placeholder={i18n("entities.transaction.fields.amount")}
                className="input"
              />
            </div>

            {/* Withdraw Password Field */}
            <div className="form-group withdraw-password-section">
              <div className="label__form">
                <span style={{ color: "red" }}>{i18n('pages.changePassword.requiredField')}</span>
                <span style={{ fontSize: "13px" }}>{i18n('pages.withdraw.withdrawPassword')}</span>
              </div>
              <InputFormItem
                type="password"  // changed from text to password for security
                name="withdrawPassword"
                placeholder={i18n("user.fields.withdrawPassword")}
                className="input"
              />
            </div>

            {/* Announcement */}
            <div className="announcement-container">
              <i className="fa-solid fa-volume-high speaker" aria-hidden="true"></i>
              <div className="announcement-text">
                {i18n('pages.withdraw.announcement')}
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="button"
              type="submit"
              disabled={!currentUser?.withdraw} // assuming withdraw flag enables the button
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