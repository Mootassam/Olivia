import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import authSelectors from "src/modules/auth/authSelectors";
import actions from "src/modules/product/list/productListActions";
import selector from "src/modules/product/list/productListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import Dates from "src/view/shared/utils/Dates";
import recordActions from "src/modules/record/form/recordFormActions";
import recordListAction from "src/modules/record/list/recordListActions";
import recordSelector from "src/modules/record/list/recordListSelectors";
import GrapModal from "./GrapModal";
import productListActions from "src/modules/product/list/productListActions";
import PrizeModal from "./PrizeModal";
import { i18n } from "../../../i18n";
import Message from "src/view/shared/message";
import authActions from "src/modules/auth/authActions";

const Grappage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const items = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);
  const Modal = useSelector(selector.showModal);
  const [number] = useState(Dates.Number());
  const totalperday = useSelector(recordSelector.selectTotalPerday);

  useEffect(() => {
    dispatch(recordListAction.doCount());
    dispatch(recordListAction.doCountDay());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.balance <= 0) {
      Message.error(i18n('pages.grab.errors.insufficientBalance'));
    }
    if (currentUser.tasksDone >= currentUser.vip.dailyorder) {
      Message.success(i18n('pages.grab.messages.completedTasks'));
    }
  }, [currentUser.balance, currentUser.tasksDone, currentUser.vip.dailyorder]);

  const rollAll = async () => {
    if (currentUser.balance <= 0) {
      Message.error(i18n('pages.grab.errors.insufficientBalance'));
      return;
    }
    if (currentUser.tasksDone >= currentUser.vip.dailyorder) {
      Message.success(i18n('pages.grab.messages.completedTasks'));
      return;
    }
    await dispatch(actions.doFetch());
  };

  const hideModal = () => {
    dispatch(productListActions.doCloseModal());
    dispatch(authActions.doRefreshCurrentUser());
  };

  const submit = async () => {
    const total = (parseFloat(items?.commission) / 100) * parseFloat(items?.amount);
    const values = {
      number: number,
      product: items?.id,
      price: items.amount,
      commission: items?.commission,
      status: items?.type === "combo" ? "pending" : "completed",
      user: currentUser.id,
    };
    await dispatch(recordActions.doCreate(values));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    rollAll();
  };

  const handleOrder = () => {
    history.push("/order");
  };

  const goToRecords = () => {
    history.push("/order");
  };

  return (
    <div className="dashboard">
      <div className="phone-frame">
        {/* Hero image */}
        <div className="hero"></div>

        {/* Content panel */}
        <div className="content-panel">
          <div className="app-title">{i18n('pages.grab.title')}</div>

          <div className="description-text">
            <i className="fas fa-quote-left" style={{ color: '#0A84FF', opacity: 0.6, fontSize: 10, marginRight: 4 }}></i>
            {i18n('pages.grab.description')}
          </div>

          {/* Rating row */}
          <div className="rating-row">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="rating-value">4.8</span>
            <span className="review-count">(4,981)</span>
            <span className="see-all-review" onClick={goToRecords}>
              {i18n('pages.grab.seeAllReviews')}
            </span>
          </div>

          {/* Search Now button */}
          <div className="search-btn" onClick={handleSearch}>
            {loading ? <i className="fas fa-spinner fa-spin"></i> : <> <i className="fas fa-search"></i> {i18n('pages.grab.searchNow')} </>}
          </div>

          {/* Stats grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <i className="fas fa-wallet stat-icon"></i>
                <span className="stat-label">{i18n('pages.grab.stats.myAssets')}</span>
              </div>
              <div className="stat-value">€{currentUser.balance?.toFixed(2) || "0.00"}</div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <i className="fas fa-chart-line stat-icon"></i>
                <span className="stat-label">{i18n('pages.grab.stats.earnings')}</span>
              </div>
              <div className="stat-value">€{totalperday || "0"}</div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <i className="fas fa-check-circle stat-icon"></i>
                <span className="stat-label">{i18n('pages.grab.stats.tasksDone')}</span>
              </div>
              <div className="stat-value tasks">
                {currentUser.tasksDone || 0} / {currentUser.vip?.dailyorder || 0}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <i className="fas fa-pause-circle stat-icon"></i>
                <span className="stat-label">{i18n('pages.grab.stats.onHold')}</span>
              </div>
              <div className="stat-value">
                €{currentUser.freezeblance?.toFixed(2) || "0.00"}
              </div>
            </div>
          </div>
        </div>

        {/* Home bar */}
      </div>

      {/* Modals */}
      {loading && <LoadingModal />}
      {items && items?.type === "prizes" && Modal && !loading && (
        <PrizeModal items={items} number={number} hideModal={hideModal} submit={submit} />
      )}
      {Modal && !loading && (
        <GrapModal items={items} number={number} hideModal={hideModal} submit={submit} />
      )}

      <style>{`
    
        .dashboard {
       margin-bottom:62px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .phone-frame {
          width: 100%;
          background-color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .hero {
          position: relative;
          height: 260px;
          background-image: url('https://cdn.mos.cms.futurecdn.net/f6zU4PHzEL7kRQbP3kXyp4.gif');
          background-size: cover;
          background-position: center 20%;
          background-color: #2b4f5c;
        }

        .content-panel {
          background: #ffffff;
          padding: 24px 18px 28px 18px;
          margin-top: -8px;
          position: relative;
          box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.02);
        }

        .app-title {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.1;
          color: #000;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          background: linear-gradient(145deg, #1c1c1e 0%, #2c3e50 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description-text {
          font-size: 12px;
          line-height: 1.5;
          color: #3a3a3c;
          margin: 12px 0 16px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .rating-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px 10px;
          padding: 8px 0 8px 0;
        }

        .stars {
          display: flex;
          gap: 3px;
          color: #ffb340;
          font-size: 1rem;
        }

        .rating-value {
          color: #0A84FF;
          font-weight: 600;
          font-size: 1rem;
        }

        .review-count {
          color: #8e8e93;
          font-weight: 400;
          font-size: 0.9rem;
        }

        .see-all-review {
          color: #0A84FF;
          font-weight: 500;
          margin-left: auto;
          font-size: 0.9rem;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .search-btn {
          background: #0A84FF;
          border: none;
          border-radius: 18px;
          padding: 12px 16px;
          width: 100%;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin: 16px 0 22px 0;
          box-shadow: 0 8px 16px -6px rgba(10, 132, 255, 0.3);
          text-align: center;
          cursor: pointer;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 8px;
        }

        .stat-card {
          background: linear-gradient(145deg, #f9fafc, #f0f3f7);
          border-radius: 22px;
          padding: 16px 12px;
          box-shadow: 0 10px 18px -8px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0,0,0,0.02);
          border: 1px solid rgba(255, 255, 255, 0.7);
          display: flex;
          flex-direction: column;
        }

        .stat-card:nth-child(1) .stat-icon { color: #0A84FF; }
        .stat-card:nth-child(2) .stat-icon { color: #34C759; }
        .stat-card:nth-child(3) .stat-icon { color: #FF9F0A; }
        .stat-card:nth-child(4) .stat-icon { color: #FF3B30; }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .stat-icon {
          font-size: 1.5rem;
          width: 30px;
          text-align: center;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          color: #5e5e60;
        }

        .stat-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1c1c1e;
          line-height: 1.1;
          margin-left: 40px;
          margin-top: 2px;
        }

        .stat-value.tasks {
          font-size: 1.2rem;
        }

      
      `}</style>
    </div>
  );
};

export default Grappage;
