import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import action from 'src/modules/transaction/list/transactionListActions';
import selector from 'src/modules/transaction/list/transactionListSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Dates from "src/view/shared/utils/Dates";
import LoadingModal from "src/shared/LoadingModal";
import Nodata from "src/view/shared/Nodata";
import { i18n } from "../../../i18n";

function Transaction() {
  const [active, setActive] = useState("withdraw");
  const dispatch = useDispatch();
  const loading = useSelector(selector.selectLoading);
  const selectHasRows = useSelector(selector.selectHasRows);

  const fetchAll = () => {
    const values = {
      type: active
    };
    dispatch(action.doFetchByUser(values, values));
  };

  useEffect(() => {
    fetchAll();
  }, [dispatch, active]);

  const record = useSelector(selector.selectRows);

  const deposit = () => {
    setActive("deposit");
    const values = {
      type: 'deposit'
    };
    dispatch(action.doFetchByUser(values));
  };

  const withdraw = () => {
    setActive("withdraw");
    const values = {
      type: 'withdraw'
    };
    dispatch(action.doFetchByUser(values, values));
  };

  const allTransactions = () => {
    setActive("");
    const values = {
      type: ''
    };
    dispatch(action.doFetchByUser(values, values));
  };

  const getTransactionIcon = (type, status) => {
    if (type === 'deposit') {
      return status === 'success'
        ? "fa-solid fa-circle-arrow-down text-success"
        : status === 'pending'
          ? "fa-solid fa-clock text-warning"
          : "fa-solid fa-circle-xmark text-danger";
    } else {
      return status === 'success'
        ? "fa-solid fa-circle-arrow-up text-success"
        : status === 'pending'
          ? "fa-solid fa-clock text-warning"
          : "fa-solid fa-circle-xmark text-danger";
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      success: {
        class: 'status-completed',
        text: i18n('pages.transaction.status.completed')
      },
      pending: {
        class: 'status-pending',
        text: i18n('pages.transaction.status.processing')
      },
      canceled: {
        class: 'status-canceled',
        text: i18n('pages.transaction.status.canceled')
      },
    };

    const config = statusConfig[status] || statusConfig.pending;
    return (
      <div className={`status-badge ${config.class}`}>
        {config.text}
      </div>
    );
  };

  const getAmountDisplay = (item) => {
    const sign = item.type === 'deposit' ? '+' : '-';
    const amountClass = item.status === 'canceled' || item.status === 'failed'
      ? 'amount-canceled'
      : item.status === 'pending'
        ? 'amount-pending'
        : item.type === 'deposit'
          ? 'amount-deposit'
          : 'amount-withdraw';

    const amountText = item.status === 'canceled' || item.status === 'failed'
      ? i18n('pages.transaction.amount.canceled', item?.amount)
      : item.type === 'deposit'
        ? i18n('pages.transaction.amount.deposit', item?.amount)
        : i18n('pages.transaction.amount.withdraw', item?.amount);

    return (
      <div className={`transaction-amount ${amountClass}`}>
        {amountText}
      </div>
    );
  };

  const getTransactionTypeText = (type) => {
    return type === 'deposit'
      ? i18n('pages.transaction.types.deposit')
      : i18n('pages.transaction.types.withdrawal');
  };

  const all = (item) => {
    return (
      <div className="transaction-item">
        <div className="transaction-icon">
          <i className={getTransactionIcon(item.type, item.status)}></i>
        </div>

        <div className="transaction-content">
          <div className="transaction-header">
            <div className="transaction-type">
              {getTransactionTypeText(item.type)}
            </div>
            {getStatusBadge(item.status)}
          </div>

          <div className="transaction-details">
            <div className="transaction-date">
              <i className="fa-regular fa-clock"></i> &nbsp;
              {Dates.Date(item?.createdAt)}
            </div>
          </div>
        </div>

        <div className="transaction-amount-section">
          {getAmountDisplay(item)}
        </div>
      </div>
    );
  };

  return (
    <div className="transaction-page-container">
      <SubHeader title={i18n('pages.transaction.title')} path="/profile" />

      {/* Filter Tabs */}
      <div className="transaction-filter-section">
        <div className="filter-tabs">
          <div
            className={`filter-tab ${active === "" ? 'filter-tab-active' : ''}`}
            onClick={allTransactions}
          >
            <i className="fa-solid fa-list"></i>
            <span>{i18n('pages.transaction.filters.all')}</span>
          </div>
          <div
            onClick={withdraw}
            className={`filter-tab ${active === "withdraw" ? 'filter-tab-active' : ''}`}
          >
            <i className="fa-solid fa-arrow-up"></i>
            <span>{i18n('pages.transaction.filters.withdraw')}</span>
          </div>
          <div
            onClick={deposit}
            className={`filter-tab ${active === "deposit" ? 'filter-tab-active' : ''}`}
          >
            <i className="fa-solid fa-arrow-down"></i>
            <span>{i18n('pages.transaction.filters.deposit')}</span>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="transaction-list-container">
        {loading && <LoadingModal />}

        {!loading && record && record.length > 0 && (
          <div className="transaction-list-header">
            <h3 className="recent">{i18n('pages.transaction.recentTransactions')}</h3>
            <div className="transaction-count">
              {i18n('pages.transaction.transactionCount', record.length)}
            </div>
          </div>
        )}

        {!loading && record && record.map((item, index) => (
          <div key={index}>
            {all(item)}
          </div>
        ))}

        {!loading && !selectHasRows && <Nodata />}
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

        .transaction-page-container {
          background-color: #EDF1F7;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 8px 20px;
        }

        /* SubHeader already exists, we can let it be – but ensure it fits */
        /* If SubHeader needs adjustment, add styles here */

        /* Filter tabs – compact, no large text */
        .transaction-filter-section {
          width: 100%;
          margin-top: 16px;
          margin-bottom: 8px;
        }

        .filter-tabs {
          display: flex;
          gap: 8px;
          background: white;
          padding: 8px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .filter-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 4px;
          border-radius: 30px;
          background: #F2F5FA;
          color: #4A5C6F;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .filter-tab i {
          font-size: 14px;
          color: #6F7E91;
        }

        .filter-tab-active {
          background: rgb(68, 136, 247);
          color: white;
        }

        .filter-tab-active i {
          color: white;
        }

        /* Transaction list container */
        .transaction-list-container {
          width: 100%;
          background: white;
          border-radius: 28px;
          padding: 20px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.02), 0 2px 8px rgba(0,0,0,0.02);
        }

        .transaction-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding: 0 4px;
        }

        .recent {
          font-size: 16px;
          font-weight: 600;
          color: #1F2A3E;
        }

        .transaction-count {
          font-size: 13px;
          color: #6F7E91;
          background: #F2F5FA;
          padding: 4px 10px;
          border-radius: 30px;
        }

        /* Transaction item */
        .transaction-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #F0F4FA;
        }

        .transaction-item:last-child {
          border-bottom: none;
        }

        .transaction-icon {
          width: 44px;
          height: 44px;
          background: #F2F5FA;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #4A5C6F;
        }

        .transaction-content {
          flex: 1;
        }

        .transaction-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .transaction-type {
          font-size: 15px;
          font-weight: 500;
          color: #1F2A3E;
        }

        .status-badge {
          font-size: 11px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 30px;
          background: #F2F5FA;
          color: #4A5C6F;
        }

        .status-completed {
          background: #E6F7E6;
          color: #2E7D32;
        }

        .status-pending {
          background: #FFF4E5;
          color: #B76E00;
        }

        .status-canceled {
          background: #FFEBEE;
          color: #C62828;
        }

        .transaction-details {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #6F7E91;
        }

        .transaction-details i {
          font-size: 12px;
        }

        .transaction-amount-section {
          text-align: right;
        }

        .transaction-amount {
          font-size: 15px;
          font-weight: 600;
          white-space: nowrap;
        }

        .amount-deposit {
          color: #2E7D32;
        }

        .amount-withdraw {
          color: #C62828;
        }

        .amount-pending {
          color: #B76E00;
        }

        .amount-canceled {
          color: #9AA6B5;
          text-decoration: line-through;
        }

        /* No data state */
        .nodata-container {
          padding: 30px 0;
          text-align: center;
          color: #9AA6B5;
          font-size: 14px;
        }

        /* Loading modal should be minimal */
        .loading-modal {
          display: flex;
          justify-content: center;
          padding: 30px;
        }

        /* Icons color helpers (if not defined elsewhere) */
        .text-success { color: #2E7D32; }
        .text-warning { color: #B76E00; }
        .text-danger { color: #C62828; }
      `}</style>
    </div>
  );
}

export default Transaction;