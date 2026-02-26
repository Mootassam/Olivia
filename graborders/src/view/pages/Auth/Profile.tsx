import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../styles/styles.css";
import authActions from "src/modules/auth/authActions";
import authSelectors from "src/modules/auth/authSelectors";
import actions from "src/modules/record/list/recordListActions";
import selectors from "src/modules/record/list/recordListSelectors";
import Message from "src/view/shared/message";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import ImagesFormItem from "src/shared/form/ImagesFormItems";
import Storage from "src/security/storage";
import SubHeader from "src/view/shared/Header/SubHeader";

const schema = yup.object().shape({
  avatars: yupFormSchemas.images(i18n("inputs.avatars"), {
    max: 1,
  }),
});

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const totalperday = useSelector(selectors.selectTotalPerday);
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const [recharge, setRecharge] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [showReputation, setShowReputation] = useState(false);
  const referenceCodeRef = useRef(null);

  useEffect(() => {
    const values = { status: "completed" };
    dispatch(actions.doCountDay());
    dispatch(actions.doFetch(values, values));
  }, [dispatch]);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

  const [initialValues] = useState(() => {
    const record = currentUser || {};
    return {
      avatars: record.avatars || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const goto = (param) => {
    history.push(param);
  };

  const copyToClipboardCoupon = () => {
    const referenceCode = referenceCodeRef.current.innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(referenceCode)
        .then(() => Message.success(i18n('pages.profile.copied')))
        .catch((error) => console.error("Error copying to clipboard:", error));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = referenceCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      Message.success(i18n('pages.profile.copied'));
    }
  };

  // Helper to mask phone number (if available)
  const getMaskedPhone = () => {
    const phone = currentUser?.phone || "567***229"; // fallback for demo
    if (phone && phone.length > 6) {
      return phone.slice(0, 3) + "***" + phone.slice(-3);
    }
    return phone;
  };

  // User's reputation score (default to 0)
  const userScore = currentUser?.score || 0;

  // Menu items based on the two images
  const menuItems = {
    main: [
      {
        icon: "/images/profile/cashin.png",
        name: "Cash In",
        action: () => setRecharge(true),
      },
      {
        icon: "/images/profile/cashout.png",
        name: "Cash out",
        action: () => goto("/withdraw"),
      },
      {
        icon: "/images/profile/bindaccount.png",
        name: "Bind account",
        action: () => goto("/bind-account"),
      },
      {
        icon: "/images/profile/details.png",
        name: "Details",
        action: () => goto("/details"),
      },
    ],
    other: [
      {
        icon: "fa-solid fa-globe",
        name: "Official website entrance",
        action: () => window.open("https://gotomarketers.com", "_blank"),
      },
      {
        icon: "fa-solid fa-star",
        name: "Reputation Rules",
        action: () => setShowReputation(true),
      },
      {
        icon: "fa-solid fa-calendar-alt",
        name: "Activities",
        action: () => goto("/activities"),
      },
      {
        icon: "fa-solid fa-crown",
        name: "VIP",
        action: () => goto("/vip"),
      },
      {
        icon: "fa-solid fa-headset",
        name: "Contact Us",
        action: () => goto("/support"),
      },
      {
        icon: "fa-solid fa-key",
        name: "Change login password",
        action: () => goto("/security"),
      },
      {
        icon: "fa-solid fa-lock",
        name: "Set withdrawal password",
        action: () => goto("/wallet"),
      },
      {
        icon: "fa-solid fa-language",
        name: "Language setting",
        action: () => goto("/languages"),
      },
      {
        icon: "fa-solid fa-question-circle",
        name: "Help Center",
        action: () => goto("/help"),
      },
      {
        icon: "fa-solid fa-info-circle",
        name: "About Us",
        action: () => goto("/company"),
      },
      {
        icon: "fa-solid fa-sign-out-alt",
        name: "Log Out",
        action: doSignout,
      },
    ],
  };

  return (
    <div className="profile-container">
      <SubHeader
        title={i18n('pages.profile.title')} path="/profile" />

      {/* User Info Section */}
      <div className="user-info-section">
        <div className="user-avatar">
          <FormProvider {...form}>
            <form>
              <ImagesFormItem
                name="avatars"
                storage={Storage.values.userAvatarsProfiles}
                max={1}
              />
            </form>
          </FormProvider>
        </div>
        <div className="user-details">
          <div className="user-phone">{currentUser?.email || "131784"}</div>
          <div className="user-uid">UID:{currentUser?.mnemberId || "131784"}</div>
          <div className="invitation-row">
            <span className="invitation-label">Invitation code:</span>
            <span ref={referenceCodeRef} className="invitation-code">
              { currentUser.refsystem ?  currentUser?.refcode || "64WS65" : "******" }
            </span>
            <i
              className="fa-regular fa-copy copy-icon"
              onClick={copyToClipboardCoupon}
            />
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="menu-sections">
        {/* Main Function - Horizontal Tiles */}
        <div className="menu-section">
          <div className="section-title">Main function</div>
          <div className="main-function-items">
            {menuItems.main.map((item, index) => (
              <div
                key={index}
                className="main-function-item"
                onClick={item.action}
              >
                <div className="main-icon-circle">
                  <img className={item.icon} src={item.icon} style={{ width: '100%' }} />
                </div>
                <span className="main-item-label">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Function - Vertical List */}
        <div className="menu-section">
          <div className="section-title">Other function</div>
          <div className="section-items">
            {menuItems.other.map((item, index) => (
              <div
                key={index}
                className="menu-item"
                onClick={item.action}
              >
                <div className="item-left">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
                <i className="fa fa-arrow-right item-arrow"></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recharge Modal */}
      {recharge && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">{i18n('pages.profile.rechargeModal.title')}</div>
              <i
                className="fa fa-close modal-close"
                onClick={() => setRecharge(false)}
              />
            </div>
            <p className="modal-text">
              {i18n('pages.profile.rechargeModal.text')}
            </p>
            <div
              className="modal-confirm"
              onClick={() => goto("/support")}
            >
              {i18n('pages.profile.confirm')}
            </div>
          </div>
        </div>
      )}

      {/* Deposit Modal */}
      {deposit && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">{i18n('pages.profile.withdrawModal.title')}</div>
              <i
                className="fa fa-close modal-close"
                onClick={() => setDeposit(false)}
              />
            </div>
            <p className="modal-text">
              {i18n('pages.profile.withdrawModal.text')}
            </p>
            <div
              className="modal-confirm"
              onClick={() => goto("/support")}
            >
              {i18n('pages.profile.confirm')}
            </div>
          </div>
        </div>
      )}

      {/* Reputation Modal */}
      {showReputation && (
        <div className="modal-overlay" onClick={() => setShowReputation(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Reputation Rules</div>
              <i
                className="fa fa-close modal-close"
                onClick={() => setShowReputation(false)}
              />
            </div>
            <div className="reputation-score">
              {userScore}
            </div>
            {/* Progress bar with markers */}
            <div className="progress-labels">
              <span>0</span>
              <span>80</span>
              <span>100</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${Math.min(userScore, 100)}%` }}
              />
            </div>
            <p className="reputation-description">
              Each account has a reputation system based on the member's performance.
              If you complete daily tasks and maintain a good reputation, your score
              will improve. But if you don't meet the deadlines, your score will go
              down. If your reputation drops below 80%, the system will block
              withdrawals. If you have any questions, please contact customer service.
            </p>
          </div>
        </div>
      )}

      {/* Styles - Black & White Only */}
      <style>{`
  .profile-container {
    background: #ffffff;
    min-height: 100vh;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  /* User Info Section with Background Image */
  .user-info-section {
    background-image: url(/images/profile/background.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    min-height: 204px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 16px;
    box-sizing: border-box;
  }

  .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #f0f0f0;
    border: 2px solid #000000;
    flex-shrink: 0;
  }

  .user-avatar .images-form-item {
    width: 100%;
    height: 100%;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  .user-details {
    flex: 1;
  }

  .user-phone {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #000000;
  }

  .user-uid {
    font-size: 14px;
    color: #000000;
    margin-bottom: 6px;
  }

  .invitation-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    width: fit-content;
  }

  .invitation-label {
    color: #000000;
  }

  .invitation-code {
    font-family: monospace;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #000000;
  }

  .copy-icon {
    cursor: pointer;
    color: #000000;
    font-size: 14px;
    transition: opacity 0.2s;
  }

  .copy-icon:hover {
    opacity: 0.8;
  }

  /* Menu Sections */
  .menu-sections {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 30px 16px 20px 16px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555555;
    padding: 0 0 12px 0;
    margin-bottom: 16px;
  }

  /* Main Function - Horizontal Tiles */
  .main-function-items {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
  }

  .main-function-item {
    flex: 1 1 0;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 8px 4px;
    border-radius: 12px;
    transition: background 0.2s;
  }

  .main-function-item:hover {
    background: #f0f0f0;
  }

  .main-icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .main-item-label {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: #000000;
  }

  /* Other Function - Vertical List */
  .section-items {
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    cursor: pointer;
    transition: background 0.2s;
    border-radius: 8px;
    color: #000000;
  }

  .menu-item:last-child {
    border-bottom: none;
  }

  .menu-item:hover {
    background: #f0f0f0;
  }

  .item-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .item-left i {
    width: 22px;
    color: #000000;
    font-size: 18px;
    text-align: center;
  }

  .item-left span {
    font-size: 15px;
    color: #000000;
  }

  .item-arrow {
    color: #888888;
    font-size: 14px;
  }

  /* Modal Styles (shared) */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: #ffffff;
    color: #000000;
    border-radius: 20px;
    width: 90%;
    max-width: 340px;
    padding: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border: 1px solid #cccccc;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .modal-title {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
  }

  .modal-close {
    cursor: pointer;
    font-size: 20px;
    color: #888888;
  }

  .modal-text {
    margin-bottom: 24px;
    line-height: 1.5;
    color: #555555;
  }

  .modal-confirm {
    background: #333333;
    color: white;
    text-align: center;
    padding: 14px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .modal-confirm:hover {
    background: #111111;
  }

  /* Reputation modal specific styles */
  .reputation-score {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 16px 0 8px;
    color: #000;
  }

  .progress-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #555;
    margin-bottom: 4px;
    padding: 0 4px;
  }

  .progress-bar-container {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    margin: 8px 0 16px;
    overflow: hidden;
    position: relative;
  }

  .progress-bar-fill {
    height: 100%;
    background: #29d;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  /* Optional marker at 80% */
  .progress-bar-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 80%;
    width: 2px;
    height: 100%;
    background: #000;
    opacity: 0.3;
  }

  .reputation-description {
    font-size: 12px;
    line-height: 1.6;
    color: #555;
    text-align: left;
    margin-top: 16px;
  }

  /* Responsive */
  @media (max-width: 400px) {
    .user-info-section {
      min-height: 180px;
      padding: 16px 12px;
    }
    .user-phone {
      font-size: 16px;
    }
    .invitation-row {
      font-size: 13px;
    }
    .menu-sections {
      padding: 30px 12px 16px 12px;
    }
    .main-icon-circle {
      width: 42px;
      height: 42px;
      font-size: 18px;
    }
    .main-item-label {
      font-size: 12px;
    }
    .menu-item {
      padding: 12px 0;
    }
    .item-left i {
      font-size: 16px;
      width: 20px;
    }
    .item-left span {
      font-size: 14px;
    }
  }
`}</style>
    </div>
  );
}

export default Profile;