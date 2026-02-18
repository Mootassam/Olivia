import React, { useEffect } from "react";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/category/list/categoryListActions";
import selector from "src/modules/category/list/categoryListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import SubHeader from "src/view/shared/Header/SubHeader";
import { i18n } from "../../../i18n";
import { Link } from 'react-router-dom'

function Online() {
  const dispatch = useDispatch();

  const record = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line
  }, [dispatch]);

  const handleLiveChatClick = () => {
    // navigate("/LiveChat");
  }; 

  return (
    <div className="customer-service-container">
      <SubHeader title={i18n('pages.online.title')} path="/" />

      <div className="service-description-card">
        <div className="description-content">
          <i className="fa-solid fa-comments description-icon"></i>
          <p className="description-text">
            {i18n('pages.online.description')}
          </p>
        </div>
      </div>

      <div className="support-agents-list">
        {loading && <LoadingModal />}
        {!loading && record && record.map((item, index) => (
          <div className="support-agent-card" key={index}>
            <div className="agent-header">
              <h3 className="agent-title">{item?.name}</h3>
              <div className={`platform-badge ${item.type}`}>
                {item.type === "whatsApp" ? (
                  <i className="fa-brands fa-whatsapp"></i>
                ) : (
                  <i className="fa-brands fa-telegram"></i>
                )}
              </div>
            </div>

            <div className="agent-profile">
              <img
                src={item?.photo[0]?.downloadUrl}
                alt={`${item?.name}`}
                className="agent-photo"
              />
              <div className="status-indicator"></div>
            </div>

            <div className="agent-actions">
              {item.type === "whatsApp" ? (
                <a
                  href={`https://wa.me/${item.number}`}
                  className="contact-button whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp button-icon"></i>
                  <span>{i18n('pages.online.contactWhatsApp')}</span>
                  <i className="fa-solid fa-external-link action-arrow"></i>
                </a>
              ) : (
                <a
                  href={`https://t.me/${item.number}`}
                  className="contact-button telegram-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-telegram button-icon"></i>
                  <span>{i18n('pages.online.contactTelegram')}</span>
                  <i className="fa-solid fa-external-link action-arrow"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* Black/white theme for Online page */
        .customer-service-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 0.75rem 1.5rem 0.75rem;
          background-color: #ffffff;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #000000;
        }

        /* Description card */
        .service-description-card {
          background-color: #f5f5f5;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 1rem;
          margin: 1rem 0;
        }

        .description-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .description-icon {
          font-size: 1.75rem;
          color: #333333;
        }

        .description-text {
          font-size: 12px;
          color: #333333;
          line-height: 1.5;
          margin: 0;
        }

        /* Agents list - now row with wrapping */
        .support-agents-list {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .support-agent-card {
          flex: 0 1 280px; /* cards will be ~280px wide, wrap as needed */
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 16px;
          padding: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: box-shadow 0.2s;
        }

        .support-agent-card:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .agent-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .agent-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #000000;
          margin: 0;
        }

        .platform-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #f0f0f0;
          color: #333333;
          font-size: 1.1rem;
        }

        /* Platform colors for badges */
        .platform-badge.whatsApp {
          background-color: #25D366;
          color: white;
        }
        .platform-badge.telegram {
          background-color: #0088cc;
          color: white;
        }

        .agent-profile {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 0 auto 0.75rem;
        }

        .agent-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .status-indicator {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #4caf50;
          border: 2px solid #ffffff;
        }

        .agent-actions {
          margin-top: 0.75rem;
        }

        .contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: none;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.2s, transform 0.1s;
          color: #ffffff;
        }

        .contact-button.whatsapp-button {
          background-color: #25D366;
        }
        .contact-button.whatsapp-button:hover {
          background-color: #20b859;
        }

        .contact-button.telegram-button {
          background-color: #0088cc;
        }
        .contact-button.telegram-button:hover {
          background-color: #0077b3;
        }

        .button-icon {
          font-size: 14px;
        }

        .action-arrow {
          font-size: 10px;
          opacity: 0.8;
          margin-left: auto;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .support-agent-card {
            flex: 0 1 100%;
          }
          .agent-profile {
            width: 80px;
            height: 80px;
          }
          .contact-button {
            font-size: 12px;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Online;