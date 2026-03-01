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
import { Link } from "react-router-dom";

// Custom Modal Component (in the same file)
const CustomModal = ({ visible, title, onClose, children }) => {
  if (!visible) return null;

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        .modal-container {
          background-color: white;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          animation: slideIn 0.3s ease;
        }

        .modal-header {
          padding: 15px 20px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-header h3 {
          margin: 0;
          color: #333;
          font-size: 1.2rem;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          transition: color 0.2s;
        }

        .modal-close:hover {
          color: #000;
        }

        .modal-body {
          padding: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{title}</h3>
            <button className="modal-close" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

// Update schema to include withdrawal method
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
  withdrawalMethod: yup.string().required(i18n("pages.withdraw.validation.selectMethod")),
});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();
  
  // State for modals
  const [showBankModal, setShowBankModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const refreshItems = useCallback(async () => {
    await dispatch(authActions.doRefreshCurrentUser());
  }, [dispatch]);

  // Check if bank details are complete
  const hasCompleteBankDetails = useCallback(() => {
    if (!currentUser) return false;
    return (
      currentUser.accountHolder &&
      currentUser.accountHolder.trim() !== "" &&
      currentUser.ibanNumber &&
      currentUser.ibanNumber.trim() !== "" &&
      currentUser.bankName &&
      currentUser.bankName.trim() !== "" &&
      currentUser.ifscCode &&
      currentUser.ifscCode.trim() !== ""
    );
  }, [currentUser]);

  // Check if crypto details are complete
  const hasCompleteCryptoDetails = useCallback(() => {
    if (!currentUser) return false;
    return (
      currentUser.trc20 &&
      currentUser.trc20.trim() !== "" &&
      currentUser.walletname &&
      currentUser.walletname.trim() !== "" &&
      currentUser.usernamewallet &&
      currentUser.usernamewallet.trim() !== "" &&
      currentUser.preferredcoin &&
      currentUser.preferredcoin.trim() !== ""
    );
  }, [currentUser]);

  // Get missing bank fields
  const getMissingBankFields = useCallback(() => {
    const missing = [];
    if (!currentUser?.accountHolder) missing.push(i18n("entities.transaction.fields.accountHolder"));
    if (!currentUser?.ibanNumber) missing.push(i18n("entities.transaction.fields.ibanNumber"));
    if (!currentUser?.bankName) missing.push(i18n("entities.transaction.fields.bankName"));
    if (!currentUser?.ifscCode) missing.push(i18n("entities.transaction.fields.ifscCode"));
    return missing;
  }, [currentUser]);

  // Get missing crypto fields
  const getMissingCryptoFields = useCallback(() => {
    const missing = [];
    if (!currentUser?.trc20) missing.push(i18n("user.fields.trc20"));
    if (!currentUser?.walletname) missing.push(i18n("pages.wallet.walletName"));
    if (!currentUser?.usernamewallet) missing.push(i18n("pages.wallet.username"));
    if (!currentUser?.preferredcoin) missing.push(i18n("pages.wallet.choosePreferredCoin"));
    return missing;
  }, [currentUser]);

  const onSubmit = async ({ amount, withdrawPassword, withdrawalMethod }) => {
    // Check if the selected method has complete details
    if (withdrawalMethod === "bank" && !hasCompleteBankDetails()) {
      setSelectedMethod("bank");
      setShowBankModal(true);
      return;
    }
    
    if (withdrawalMethod === "crypto" && !hasCompleteCryptoDetails()) {
      setSelectedMethod("crypto");
      setShowCryptoModal(true);
      return;
    }

    const values = {
      status: "pending",
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: "withdraw",
      amount: amount,
      vip: currentUser,
      withdrawPassword: withdrawPassword,
      withdrawalMethod: withdrawalMethod,
   
    };
    
    await dispatch(actions.doCreate(values));
    await refreshItems();
  };

  const [initialValues] = useState({
    amount: "",
    withdrawalMethod: "",
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  // Withdrawal method options
  const withdrawalMethodOptions = [
    { value: "crypto", label: "Cryptocurrency (TRC20/ERC20)" },
    { value: "bank", label: "Bank Transfer" },
  ];

  return (
    <div>
      {/* Bank Details Modal */}
      {showBankModal && (
        <CustomModal
          visible={showBankModal}
          title={i18n('pages.withdraw.bankModal.title')}
          onClose={() => setShowBankModal(false)}
        >
          <div style={{ textAlign: "center" }}>
            <i className="fa-solid fa-circle-exclamation" style={{ fontSize: "48px", color: "#ff9800", marginBottom: "15px" }}></i>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>{i18n('pages.withdraw.bankModal.required')}</h3>
            <p style={{ marginBottom: "20px", color: "#666" }}>
              {i18n('pages.withdraw.bankModal.description')}
            </p>
            <ul style={{ textAlign: "left", marginBottom: "20px", color: "#555", listStyle: "none", padding: 0 }}>
              {getMissingBankFields().map((field, index) => (
                <li key={index} style={{ marginBottom: "10px", padding: "8px", backgroundColor: "#f8f8f8", borderRadius: "4px" }}>
                  <i className="fa-solid fa-times" style={{ color: "red", marginRight: "8px" }}></i>
                  {field}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button
                onClick={() => setShowBankModal(false)}
                style={{
                  padding: "10px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#fff",
                  cursor: "pointer",
                  flex: 1
                }}
              >
                {i18n('common.cancel')}
              </button>
              <Link to="/bind-account" style={{ flex: 1 }}>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    background: "rgb(0, 157, 254)",
                    color: "#fff",
                    cursor: "pointer",
                    width: "100%"
                  }}
                >
                  {i18n('pages.withdraw.goToBindAccount')}
                </button>
              </Link>
            </div>
          </div>
        </CustomModal>
      )}

      {/* Crypto Details Modal */}
      {showCryptoModal && (
        <CustomModal
          visible={showCryptoModal}
          title={i18n('pages.withdraw.cryptoModal.title')}
          onClose={() => setShowCryptoModal(false)}
        >
          <div style={{ textAlign: "center" }}>
            <i className="fa-solid fa-circle-exclamation" style={{ fontSize: "48px", color: "#ff9800", marginBottom: "15px" }}></i>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>{i18n('pages.withdraw.cryptoModal.required')}</h3>
            <p style={{ marginBottom: "20px", color: "#666" }}>
              {i18n('pages.withdraw.cryptoModal.description')}
            </p>
            <ul style={{ textAlign: "left", marginBottom: "20px", color: "#555", listStyle: "none", padding: 0 }}>
              {getMissingCryptoFields().map((field, index) => (
                <li key={index} style={{ marginBottom: "10px", padding: "8px", backgroundColor: "#f8f8f8", borderRadius: "4px" }}>
                  <i className="fa-solid fa-times" style={{ color: "red", marginRight: "8px" }}></i>
                  {field}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button
                onClick={() => setShowCryptoModal(false)}
                style={{
                  padding: "10px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#fff",
                  cursor: "pointer",
                  flex: 1
                }}
              >
                {i18n('common.cancel')}
              </button>
              <Link to="/bind-account" style={{ flex: 1 }}>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    background: "rgb(0, 157, 254)",
                    color: "#fff",
                    cursor: "pointer",
                    width: "100%"
                  }}
                >
                  {i18n('pages.withdraw.goToBindAccount')}
                </button>
              </Link>
            </div>
          </div>
        </CustomModal>
      )}

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
          margin-bottom: 1rem;
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

        .input, .select-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          transition: all 0.2s;
        }

        .input:focus, .select-input:focus {
          border-color: rgb(0, 157, 254);
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 157, 254, 0.1);
        }

        .button {
          background-color: rgb(0, 157, 254) !important;
          color: #fff !important;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.2rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
          width: 100%;
          margin-top: 1rem;
          font-weight: 500;
        }

        .button:hover {
          background-color: #007acc !important;
        }

        .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .balance-info {
          display: block;
          margin-bottom: 1.5rem;
          font-size: 16px;
          color: #000;
          font-weight: 600;
          padding: 1rem;
          background-color: #f8f8f8;
          border-radius: 8px;
          border-left: 4px solid rgb(0, 157, 254);
        }

        .announcement-container {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 1.5rem 0;
          padding: 1rem;
          background-color: #f8f8f8;
          border-radius: 8px;
          border-left: 4px solid rgb(0, 157, 254);
        }

        .speaker {
          font-size: 1.2rem;
          color: rgb(0, 157, 254);
        }

        .announcement-text {
          font-size: 0.9rem;
          color: #333;
          line-height: 1.5;
        }

        .withdraw-password-section {
          margin-top: 1rem;
        }

        /* Method selection styles */
        .method-selection {
          display: flex;
          gap: 15px;
          margin: 10px 0 5px;
          flex-wrap: wrap;
        }

        .method-card {
          flex: 1;
          min-width: 140px;
          padding: 15px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #fff;
        }

        .method-card.selected {
          border-color: rgb(0, 157, 254);
          background-color: rgba(0, 157, 254, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 157, 254, 0.15);
        }

        .method-card:hover {
          border-color: rgb(0, 157, 254);
          transform: translateY(-2px);
        }

        .method-icon {
          font-size: 32px;
          color: rgb(0, 157, 254);
          margin-bottom: 10px;
        }

        .method-label {
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }

        .method-status {
          font-size: 12px;
          margin-top: 8px;
          padding: 4px 8px;
          border-radius: 20px;
          display: inline-block;
        }

        .status-complete {
          color: #4caf50;
          background-color: rgba(76, 175, 80, 0.1);
        }

        .status-incomplete {
          color: #ff9800;
          background-color: rgba(255, 152, 0, 0.1);
        }

        .preview-box {
          padding: 12px;
          background: linear-gradient(135deg, #f5f5f5 0%, #f0f0f0 100%);
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 13px;
          border: 1px solid #e0e0e0;
        }

        .error-message {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 4px;
        }

        .tip-box {
          margin-top: 20px;
          padding: 12px;
          background: #fff3cd;
          border: 1px solid #ffeeba;
          border-radius: 8px;
          font-size: 13px;
          color: #856404;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tip-box i {
          color: #ff9800;
        }

        .tip-box a {
          color: rgb(0, 157, 254);
          text-decoration: none;
          font-weight: 500;
        }

        .tip-box a:hover {
          text-decoration: underline;
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
              <i className="fa-solid fa-wallet" style={{ marginRight: '8px' }}></i>
              {i18n('pages.withdraw.availableBalance')} : €{currentUser?.balance?.toFixed(2) || 0} 
            </span>

            {/* Amount Field */}
            <div className="form-group">
              <div className="label__form">
                <span style={{ color: "red", marginRight: "4px" }}>*</span>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>{i18n('pages.withdraw.withdrawAmount')}</span>
              </div>
              <InputFormItem
                type="number"
                name="amount"
                placeholder={i18n('pages.withdraw.amountPlaceholder')}
                className="input"
              />
            </div>

            {/* Withdrawal Method Selection */}
            <div className="form-group">
              <div className="label__form">
                <span style={{ color: "red", marginRight: "4px" }}>*</span>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>{i18n('pages.withdraw.selectMethod')}</span>
              </div>
              
              <div className="method-selection">
                {/* Crypto Option */}
                <div 
                  className={`method-card ${form.watch('withdrawalMethod') === 'crypto' ? 'selected' : ''}`}
                  onClick={() => form.setValue('withdrawalMethod', 'crypto', { shouldValidate: true })}
                >
                  <i className="fa-brands fa-bitcoin method-icon"></i>
                  <div className="method-label">{i18n('pages.withdraw.methods.crypto')}</div>
                  <div className={`method-status ${hasCompleteCryptoDetails() ? 'status-complete' : 'status-incomplete'}`}>
                    {hasCompleteCryptoDetails() ? i18n('pages.withdraw.status.complete') : i18n('pages.withdraw.status.incomplete')}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '6px' }}>{i18n('pages.withdraw.methods.cryptoNetworks')}</div>
                </div>

                {/* Bank Option */}
                <div 
                  className={`method-card ${form.watch('withdrawalMethod') === 'bank' ? 'selected' : ''}`}
                  onClick={() => form.setValue('withdrawalMethod', 'bank', { shouldValidate: true })}
                >
                  <i className="fa-solid fa-building-columns method-icon"></i>
                  <div className="method-label">{i18n('pages.withdraw.methods.bank')}</div>
                  <div className={`method-status ${hasCompleteBankDetails() ? 'status-complete' : 'status-incomplete'}`}>
                    {hasCompleteBankDetails() ? i18n('pages.withdraw.status.complete') : i18n('pages.withdraw.status.incomplete')}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '6px' }}>{i18n('pages.withdraw.methods.bankNetworks')}</div>
                </div>
              </div>
              
              {/* Hidden input for form validation */}
              <input 
                type="hidden" 
                {...form.register('withdrawalMethod')} 
              />
              {form.formState.errors.withdrawalMethod && (
                <div className="error-message">
                  <i className="fa-solid fa-exclamation-circle" style={{ marginRight: '4px' }}></i>
                  {form.formState.errors.withdrawalMethod.message}
                </div>
              )}
            </div>

            {/* Display selected method details preview */}
            {form.watch('withdrawalMethod') === 'crypto' && hasCompleteCryptoDetails() && (
              <div className="preview-box">
                <i className="fa-brands fa-bitcoin" style={{ color: 'rgb(0, 157, 254)', marginRight: '8px' }}></i>
                <strong>{i18n('pages.withdraw.withdrawingTo')}</strong><br/>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  {currentUser?.preferredcoin?.toUpperCase()}: {currentUser?.trc20?.substring(0, 12)}...
                </span>
              </div>
            )}

            {form.watch('withdrawalMethod') === 'bank' && hasCompleteBankDetails() && (
              <div className="preview-box">
                <i className="fa-solid fa-building-columns" style={{ color: 'rgb(0, 157, 254)', marginRight: '8px' }}></i>
                <strong>{i18n('pages.withdraw.withdrawingTo')}</strong><br/>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  {currentUser?.bankName} - {currentUser?.accountHolder}
                </span>
              </div>
            )}

            {/* Withdraw Password Field */}
            <div className="form-group withdraw-password-section">
              <div className="label__form">
                <span style={{ color: "red", marginRight: "4px" }}>*</span>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>{i18n('pages.withdraw.withdrawPassword')}</span>
              </div>
              <InputFormItem
                type="password"
                name="withdrawPassword"
                placeholder={i18n('pages.withdraw.withdrawPasswordPlaceholder')}
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
            >
              <i className="fa-solid fa-check" style={{ marginRight: '8px' }}></i>
              {i18n('pages.withdraw.confirm')}
            </button>

            {/* Help text for incomplete profiles */}
            {(!hasCompleteBankDetails() || !hasCompleteCryptoDetails()) && (
              <div className="tip-box">
                <i className="fa-solid fa-info-circle fa-lg"></i>
                <span>
                  {i18n('pages.withdraw.completeDetailsIn')}{' '}
                  <Link to="/bind-account" style={{ marginLeft: '4px', marginRight: '4px' }}>
                    {i18n('pages.bindAccount.title')}
                  </Link> 
                  {i18n('pages.withdraw.enableAllOptions')}
                </span>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Withdraw;
