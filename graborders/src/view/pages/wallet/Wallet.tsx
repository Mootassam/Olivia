import React, { useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import InputFormItem from "src/shared/form/InputFormItem";
import selector from "src/modules/auth/authSelectors";
import SelectFormItem from "src/shared/form/SelectFormItem";
import userEnumerators from "src/modules/user/userEnumerators";

const schema = yup.object().shape({
  preferredcoin: yupFormSchemas.enumerator(i18n("user.fields.status"), {
    options: userEnumerators.wallet,
    required: true,
  }),
  trc20: yupFormSchemas.string(i18n("user.fields.walletAddress"), {
    required: true,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("user.fields.withdrawPassword"),
    {
      required: true,
    }
  ),
});

function Wallet() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selector.selectCurrentUser);

  const [initialValues] = useState(() => {
    return {
      trc20: currentUser.trc20,
      walletname: currentUser.walletname,
      usernamewallet: currentUser.usernamewallet,
      balance: currentUser?.balance,
      preferredcoin: currentUser?.preferredcoin
    };
  });
  
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  
  const onSubmit = ({
    preferredcoin,
    withdrawPassword,
    trc20,
    walletname,
    usernamewallet,
  }) => {
    const values = {
      trc20: trc20,
      walletname: walletname,
      usernamewallet: usernamewallet,
      balance: currentUser?.balance,
      withdrawPassword: withdrawPassword,
      preferredcoin: preferredcoin
    };
    dispatch(actions.doUpdateProfileWallet(values));
  };
  
  return (
    <div>
      {/* Black/white theme styles for Wallet page */}
      <style>{`
        /* Container */
        .app__wallet .wallet__ {
          max-width: 500px;
          margin: 0 auto;
          padding: 1rem;
          background-color: #ffffff;
          color: #000000;
          font-family: sans-serif;
        }

        /* Section heading */
        .app__wallet .wallet__ .hall {
          margin: 0 0 1rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #000;
        }

        /* Form group */
        .app__wallet .wallet__ .form__group {
          margin-bottom: 0.4rem;
          display: flex;
          flex-direction: column;
        }

        /* Label area */
        .app__wallet .wallet__ .label__form {
          display: flex;
          align-items: center;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
          color: #333;
        }

        /* Input wrapper */
        .app__wallet .wallet__ .input__div {
          width: 100%;
        }

        /* Text inputs */
        .app__wallet .wallet__ .input__withdraw,
        .app__wallet .wallet__ input[type="text"],
        .app__wallet .wallet__ input[type="password"],
        .app__wallet .wallet__ select {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .app__wallet .wallet__ input:focus,
        .app__wallet .wallet__ select:focus {
          border-color: rgb(0, 157, 254);
          outline: none;
        }

        /* Select specific styling */
        .app__wallet .wallet__ select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 0.7rem center;
          background-size: 1rem;
          padding-right: 2.5rem;
        }

        /* Submit button */
        .app__wallet .wallet__ .confirm {
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

        .app__wallet .wallet__ .confirm:hover {
          background-color: #007acc !important;
        }

        .app__wallet .wallet__ .confirm:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Note text */
        .app__wallet .wallet__ span[style*="fontSize: 13"] {
          display: block;
          margin-top: 1rem;
          font-size: 0.85rem !important;
          color: #555;
        }

        /* Remove extra spacing from parent containers if any */
        .app__wallet,
        .wallet__ {
          padding: 0;
          margin: 0;
        }
      `}</style>

      <SubHeader title={i18n('pages.wallet.title')} path="/profile" />
      <div className="app__wallet">
        <div className="wallet__">
          <h3 className="hall">{i18n('pages.wallet.withdrawalMethod')}</h3>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="wallet__form">
                <div className="form__">
                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>{i18n('pages.wallet.requiredField')}</span>
                      <span style={{ fontSize: "13px" }}>{i18n('pages.wallet.username')}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="usernamewallet"
                        placeholder={i18n("user.fields.username")}
                        className="input__withdraw"
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>{i18n('pages.wallet.requiredField')}</span>
                      <span style={{ fontSize: "13px" }}>{i18n('pages.wallet.walletName')}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="walletname"
                        placeholder={i18n("user.fields.walletName")}
                        className="input__withdraw"
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>{i18n('pages.wallet.requiredField')}</span>
                      <span style={{ fontSize: "13px" }}>
                        {i18n('pages.wallet.choosePreferredCoin')}:
                      </span>
                    </div>
                    <div className="input__div">
                      <SelectFormItem
                        name="preferredcoin"
                        options={userEnumerators.wallet.map((value) => ({
                          value,
                          label: i18n(`user.enumerators.status.${value}`),
                        }))}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>{i18n('pages.wallet.requiredField')}</span>
                      <span style={{ fontSize: "13px" }}>{i18n('pages.wallet.walletAddress')}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="trc20"
                        placeholder={i18n("user.fields.walletAddress")}
                        className="input__withdraw"
                      />
                    </div>
                  </div>
                  
                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>{i18n('pages.wallet.requiredField')}</span>
                      <span style={{ fontSize: "13px" }}>
                        {i18n('pages.wallet.withdrawPassword')}
                      </span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="password"
                        name="withdrawPassword"
                        placeholder={i18n("user.fields.withdrawPassword")}
                        className="input__withdraw"
                      />
                    </div>
                  </div>
                </div>

                <button className="confirm" type="submit">
                  {i18n('pages.wallet.submit')}
                </button>
                <span style={{ fontSize: 13 }}>
                  <b>Note:</b> &nbsp; {i18n('pages.wallet.note')}
                </span>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Wallet;