import { useEffect, useState, useCallback, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Vipactions from "src/modules/vip/list/vipListActions";
import selector from "src/modules/vip/list/vipListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import authSelectors from "src/modules/auth/authSelectors";
import { i18n } from "../../../i18n";

const VipContainer = styled.div`
  top: 0;
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  min-height: 100vh;
  padding-bottom: 40px;
`;

interface VipItem {
  id: string;
  title: string;
  Entrylimit: string;
  levellimit: string;
  dailyorder: string;
  comisionrate: string;
  commissionmergedata?: string;
  tasksperday?: string;
  photo?: Array<{ downloadUrl: string }>;
  description?: string;
  benefits?: string[];
  price?: string;
  setperday: string;
}

function VipPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const vipRecords = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const [selectedVip, setSelectedVip] = useState<VipItem | null>(null);
  const [showCurrentVipModal, setShowCurrentVipModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(Vipactions.doFetch());
  }, [dispatch]);

  const filteredVipRecords = (vipRecords || []).filter(
    (vip: VipItem) =>
      (vip.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vip.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = useCallback(
    (vip: VipItem) => {
      if (currentUser?.vip?.id === vip.id) {
        setSelectedVip(vip);
        setShowCurrentVipModal(true);
      } else {
        setSelectedVip(vip);
        setShowSupportModal(true);
      }
    },
    [currentUser]
  );

  const handleCloseModals = useCallback(() => {
    setShowCurrentVipModal(false);
    setShowSupportModal(false);
    setSelectedVip(null);
  }, []);

  const handleContactSupport = useCallback(() => {
    history.push("/support");
  }, [history]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const VipLevelCard = memo(({ vip }: { vip: VipItem }) => {
    const isCurrent = currentUser?.vip?.id === vip.id;
    const tasksPerDay = vip.tasksperday || vip.dailyorder || "0";

    return (
      <div
        className={`vip-level-card ${isCurrent ? "vip-level-active" : ""}`}
        onClick={() => handleCardClick(vip)}
      >
        <div className="vip-level-badge">
          {isCurrent ? (
            <div className="current-level-indicator">
              <i className="fa-solid fa-crown"></i>
              {i18n("pages.vip.currentLevel") || "Current Level"}
            </div>
          ) : (
            <div className="other-level-indicator">
              <i className="fa-solid fa-arrow-up"></i>
              {i18n("pages.vip.upgrade") || "Upgrade"}
            </div>
          )}
        </div>

        <div className="vip-level-content">
          <div className="vip-level-image">
            <img
              src={vip?.photo?.[0]?.downloadUrl || "/default-image.png"}
              alt={vip?.title || "VIP"}
              className="level-image"
              loading="lazy"
            />
          </div>

          <div className="vip-level-info">
            <h4 className="level-title">{vip?.title || "VIP Level"}</h4>

            {vip.description && (
              <p className="level-description">{vip.description}</p>
            )}

            <div className="level-features">
              <div className="feature-item">
                <i className="fa-solid fa-percentage feature-icon"></i>
                <span>{vip.comisionrate || "0"}% Commission</span>
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-box feature-icon"></i>
                <span>Daily task per set: {tasksPerDay}</span>
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-calendar-alt feature-icon"></i>
                <span>Point Period: 365 days</span>
              </div>
            </div>

            {vip.price && (
              <div className="level-price">
                <i className="fa-solid fa-tag"></i>
                {vip.price}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  VipLevelCard.displayName = "VipLevelCard";

  return (
    <VipContainer>
      <div className="vip-page-container">
        {/* Header with gold gradient */}
        <div className="vip-header">
          <Link to="/" className="back-button">
            <i className="fa-solid fa-arrow-left"></i>
            {i18n("pages.vip.backToHome") || "Back to Home"}
          </Link>

          <div className="vip-header-content">
            <h1 className="vip-title">
              <i className="fa-solid fa-crown" style={{ marginRight: "10px", color: "#FFD700" }}></i>
              {i18n("pages.vip.title") || "VIP Membership"}
            </h1>
            <p className="vip-subtitle">
              {i18n("pages.vip.subtitle") || "Choose your level"}
            </p>

            {currentUser?.vip && (
              <div className="current-vip-status">
                <div className="status-badge">
                  <i className="fa-solid fa-crown" style={{ color: "#FFD700" }}></i>
                  {i18n("pages.vip.currentlyOn") || "Currently on"}:{" "}
                  <span className="current-level-name">{currentUser.vip.title}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <i className="fa-solid fa-search search-icon"></i>
            <input
              type="text"
              placeholder={
                i18n("pages.vip.searchPlaceholder") || "Search VIP levels..."
              }
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* VIP Levels Grid */}
        <div className="vip-content">
          {loading && <LoadingModal />}

          {!loading && filteredVipRecords.length === 0 && (
            <div className="no-results">
              <i className="fa-solid fa-crown" style={{ color: "#FFD700" }}></i>
              <h3>{i18n("pages.vip.noResults") || "No results found"}</h3>
              <p>
                {i18n("pages.vip.noResultsDesc") ||
                  "Try a different search term"}
              </p>
            </div>
          )}

          {!loading && filteredVipRecords.length > 0 && (
            <div className="vip-levels-grid">
              {filteredVipRecords.map((vip: VipItem, index: number) => (
                <VipLevelCard key={vip.id || index} vip={vip} />
              ))}
            </div>
          )}
        </div>

        {/* Modal for Current VIP */}
        {showCurrentVipModal && selectedVip && (
          <div className="modal-overlay" onClick={handleCloseModals}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header-section">
                <h3 className="modal-title">{selectedVip.title}</h3>
                <button className="modal-close" onClick={handleCloseModals}>
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
              <div className="modal-body-section">
                <div className="modal-icon">
                  <i
                    className="fa-solid fa-crown"
                    style={{ color: "#FFD700", fontSize: "48px" }}
                  ></i>
                </div>
                <p className="modal-message">
                  You are already a member of this VIP level.
                </p>
              </div>
              <div className="modal-actions">
                <button className="confirm-btn" onClick={handleCloseModals}>
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Contact Support */}
        {showSupportModal && selectedVip && (
          <div className="modal-overlay" onClick={handleCloseModals}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header-section">
                <h3 className="modal-title">{selectedVip.title}</h3>
                <button className="modal-close" onClick={handleCloseModals}>
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
              <div className="modal-body-section">
                <div className="modal-icon">
                  <i
                    className="fa-solid fa-headset"
                    style={{ color: "#FFD700", fontSize: "48px" }}
                  ></i>
                </div>
                <p className="modal-message">
                  Please contact customer support to upgrade your VIP.
                </p>
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={handleCloseModals}>
                  Cancel
                </button>
                <button className="confirm-btn" onClick={handleContactSupport}>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== LUXURY VIP THEME STYLES ===== */}
        <style>{`
          .vip-page-container {
            max-width: 430px;
            margin: 0 auto;
            padding: 16px 16px 30px;
            font-family: 'Playfair Display', 'Times New Roman', serif;
          }

          /* Header with gold accents */
          .vip-header {
            margin-bottom: 20px;
          }

          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #b8860b;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;
            transition: color 0.2s;
          }

          .back-button:hover {
            color: #daa520;
          }

          .vip-header-content {
            text-align: center;
          }

          .vip-title {
            font-size: 2.4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #b8860b 0%, #daa520 50%, #ffd700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 8px;
            letter-spacing: 1px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .vip-subtitle {
            font-size: 1rem;
            color: #8b7355;
            margin: 0 0 16px;
            font-style: italic;
          }

          .current-vip-status {
            display: inline-flex;
            background: linear-gradient(145deg, #fff9e6, #fff2d7);
            border-radius: 50px;
            padding: 6px 18px;
            box-shadow: 0 4px 15px rgba(184, 134, 11, 0.15);
            border: 1px solid rgba(218, 165, 32, 0.3);
          }

          .status-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #8b691b;
            font-weight: 600;
            font-size: 14px;
          }

          .current-level-name {
            color: #b8860b;
            font-weight: 700;
          }

          /* Search */
          .search-section {
            margin-bottom: 24px;
          }

          .search-container {
            position: relative;
            max-width: 360px;
            margin: 0 auto;
          }

          .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #b8860b;
            font-size: 16px;
          }

          .search-input {
            width: 100%;
            padding: 14px 20px 14px 48px;
            border: none;
            border-radius: 50px;
            background: #fffcf5;
            font-size: 15px;
            color: #4a3c28;
            border: 1px solid rgba(218, 165, 32, 0.2);
            box-shadow: 0 4px 12px rgba(184, 134, 11, 0.05);
            font-family: inherit;
          }

          .search-input:focus {
            outline: none;
            border-color: #daa520;
            box-shadow: 0 4px 15px rgba(218, 165, 32, 0.15);
          }

          .clear-search {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #b8860b;
            cursor: pointer;
            font-size: 16px;
            padding: 4px;
          }

          /* VIP Levels Grid */
          .vip-levels-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
          }

          /* VIP Card – luxurious */
          .vip-level-card {
            background: #ffffff;
            border-radius: 28px;
            padding: 20px;
            background: linear-gradient(145deg, #ffffff, #fef9ef);
            box-shadow: 0 20px 30px -10px rgba(184, 134, 11, 0.15);
            border: 1px solid rgba(218, 165, 32, 0.2);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .vip-level-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 30px 40px -12px rgba(184, 134, 11, 0.25);
          }

          .vip-level-active {
            border: 2px solid #daa520;
            background: linear-gradient(145deg, #fffcf0, #fff7e6);
          }

          .vip-level-badge {
            margin-bottom: 15px;
          }

          .current-level-indicator,
          .other-level-indicator {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 40px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .current-level-indicator {
            background: linear-gradient(135deg, #b8860b, #daa520);
            color: white;
            box-shadow: 0 4px 10px rgba(184, 134, 11, 0.3);
          }

          .other-level-indicator {
            background: #f3e9d2;
            color: #b8860b;
            border: 1px solid rgba(218, 165, 32, 0.3);
          }

          .vip-level-content {
            display: flex;
            gap: 16px;
          }

          .vip-level-image {
            flex-shrink: 0;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            background: #fff2d7;
            border: 2px solid #daa520;
            box-shadow: 0 4px 10px rgba(184, 134, 11, 0.2);
          }

          .level-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .vip-level-info {
            flex: 1;
          }

          .level-title {
            font-size: 18px;
            font-weight: 700;
            color: #4a3c28;
            margin: 0 0 6px;
            font-family: 'Playfair Display', serif;
          }

          .level-description {
            font-size: 12px;
            color: #8b7355;
            margin: 0 0 10px;
            line-height: 1.5;
            font-style: italic;
          }

          .level-features {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #4a3c28;
          }

          .feature-icon {
            width: 20px;
            color: #daa520;
            font-size: 14px;
          }

          .level-price {
            margin-top: 12px;
            font-size: 16px;
            font-weight: 700;
            color: #b8860b;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          /* No results */
          .no-results {
            text-align: center;
            padding: 60px 20px;
            color: #8b7355;
          }

          .no-results i {
            font-size: 60px;
            color: #daa520;
            margin-bottom: 16px;
          }

          .no-results h3 {
            font-size: 22px;
            font-weight: 600;
            color: #4a3c28;
            margin: 0 0 8px;
          }

          /* Modal styles – gold theme */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1100;
            padding: 16px;
          }

          .modal-content {
            background: #fffcf5;
            max-width: 380px;
            width: 100%;
            border-radius: 36px;
            box-shadow: 0 40px 60px -20px rgba(184, 134, 11, 0.4);
            border: 1px solid #daa520;
            overflow: hidden;
          }

          .modal-header-section {
            padding: 22px 24px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(218, 165, 32, 0.2);
          }

          .modal-title {
            font-size: 22px;
            font-weight: 700;
            color: #4a3c28;
            margin: 0;
            font-family: 'Playfair Display', serif;
          }

          .modal-close {
            background: #f3e9d2;
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #b8860b;
            cursor: pointer;
            transition: background 0.2s;
          }

          .modal-close:hover {
            background: #e6d5b8;
          }

          .modal-body-section {
            padding: 16px 24px 24px;
            text-align: center;
          }

          .modal-icon {
            margin: 0 0 16px;
          }

          .modal-message {
            font-size: 17px;
            color: #4a3c28;
            margin: 0 0 8px;
            line-height: 1.6;
          }

          .modal-actions {
            display: flex;
            gap: 12px;
            padding: 16px 24px 24px;
            border-top: 1px solid rgba(218, 165, 32, 0.2);
          }

          .cancel-btn,
          .confirm-btn {
            flex: 1;
            border: none;
            border-radius: 40px;
            padding: 14px 0;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .cancel-btn {
            background: #f3e9d2;
            color: #b8860b;
          }

          .cancel-btn:hover {
            background: #e6d5b8;
          }

          .confirm-btn {
            background: linear-gradient(135deg, #b8860b, #daa520);
            color: white;
            box-shadow: 0 8px 20px -6px #b8860b;
          }

          .confirm-btn:hover {
            background: linear-gradient(135deg, #9e7009, #c6941e);
            transform: scale(1.02);
          }

          /* Responsive */
          @media (max-width: 640px) {
            .vip-levels-grid {
              grid-template-columns: 1fr;
            }

            .vip-title {
              font-size: 1.8rem;
            }

            .modal-actions {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </VipContainer>
  );
}

export default VipPage;