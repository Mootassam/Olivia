import React, { useState } from 'react';
import Dates from 'src/view/shared/utils/Dates';
import { i18n } from '../../../i18n';

// ----------------------------------------------------------------------
// RateModal Component (inner)
// ----------------------------------------------------------------------
interface RateModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

function RateModal({ onClose, onSubmit }: RateModalProps) {
  // List of review options (same as in the HTML)
  const options = [
    'The rooms were clean, very comfortable, and the staff was amazing',
    'It was great. Service top notch as always',
    'The staff at this property are all great! They all go above and beyond to make your stay comfortable',
    'I had a wonderful experience here',
    'Food was great with many choices to choose from',
    'Excellent hotel with excellent location located at the city center',
    'Very central with comfort rooms with amazing aircon. Breakfast was delicious and the staff extremely helpful and friendly',
  ];

  // State to track which checkboxes are selected (first one selected by default)
  const [selected, setSelected] = useState<boolean[]>(() =>
    options.map((_, index) => index === 0) // only first option checked initially
  );

  const toggleCheckbox = (index: number) => {
    setSelected((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleSubmit = () => {
    onSubmit(); // call the original submit from GrapModal
    onClose();  // close the modal
  };

  return (
    <div className="rate-modal-overlay" onClick={onClose}>
      <div className="rate-modal" onClick={(e) => e.stopPropagation()}>
        {/* header */}
        <div className="rate-modal-header">
          <h2>Rate</h2>
          <div className="rate-close-icon" onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        {/* preview text (static) */}
        <div className="rate-selected-preview">
          “The rooms were clean, very comfortable, and the staff was amazing”
        </div>

        {/* scrollable options list */}
        <div className="rate-options-list">
          {options.map((text, idx) => (
            <div
              key={idx}
              className="rate-option-row"
              onClick={() => toggleCheckbox(idx)}
            >
              <span className="rate-option-text">{text}</span>
              <span
                className={`rate-option-checkbox ${
                  selected[idx] ? 'checked' : ''
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* submit button */}
        <div className="rate-submit-btn" onClick={handleSubmit}>
          To be submitted
        </div>

        {/* rating footer (static) */}
        <div className="rate-rating-footer">
          <div className="rate-stars-container">
            <i className="fas fa-star rate-star-filled"></i>
            <i className="fas fa-star rate-star-filled"></i>
            <i className="fas fa-star rate-star-filled"></i>
            <i className="fas fa-star rate-star-filled"></i>
            <i className="fas fa-star rate-star-empty"></i>
            <span className="rate-rating-number">4/5</span>
          </div>
        </div>
      </div>

      <style>{`
        .rate-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 1100; /* above the first modal */
        }

        .rate-modal {
          background: #ffffff;
          width: 100%;
          max-width: 380px;
          border-radius: 32px;
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.3), 0 10px 30px -10px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 85vh;
        }

        .rate-modal-header {
          padding: 20px 22px 6px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rate-modal-header h2 {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #1c1c1e;
          margin: 0;
        }

        .rate-close-icon {
          font-size: 1.4rem;
          color: #8e8e93;
          cursor: pointer;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f0f0;
          border-radius: 50%;
        }

        .rate-selected-preview {
          padding: 0 22px 12px 22px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #f7931e;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .rate-options-list {
          padding: 0 22px;
          overflow-y: auto;
          flex: 1 1 auto;
          max-height: 320px;
        }

        .rate-option-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
        }

        .rate-option-text {
          font-size: 0.85rem;
          line-height: 1.4;
          color: #1c1c1e;
          flex: 1;
          padding-right: 16px;
          font-weight: 450;
        }

        .rate-option-checkbox {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #c6c6c8;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.1s;
        }

        .rate-option-checkbox.checked {
          background: #f7931e;
          border-color: #f7931e;
        }

        .rate-option-checkbox.checked::after {
          content: "\\f00c";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          color: white;
          font-size: 12px;
        }

        .rate-submit-btn {
          background: #f7931e;
          border: none;
          border-radius: 30px;
          padding: 14px 20px;
          margin: 16px 22px 16px 22px;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: 0.2px;
          box-shadow: 0 12px 24px -10px rgba(247, 147, 30, 0.4);
          cursor: pointer;
        }

        .rate-rating-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 22px 18px 22px;
          border-top: 1px solid #f0f0f0;
          background: #fafafc;
        }

        .rate-stars-container {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .rate-star-filled {
          color: #f7931e;
          font-size: 1.4rem;
        }

        .rate-star-empty {
          color: #d5d5d7;
          font-size: 1.4rem;
        }

        .rate-rating-number {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1c1c1e;
          margin-left: 10px;
        }

        .rate-options-list::-webkit-scrollbar {
          width: 4px;
        }
        .rate-options-list::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

// ----------------------------------------------------------------------
// Original GrapModal (modified)
// ----------------------------------------------------------------------
function GrapModal(props) {
  const { items, number, hideModal, submit } = props;
  const [showRateModal, setShowRateModal] = useState(false);

  const calculateProfit = (price, commission) => {
    const p = parseFloat(price) || 0;
    const c = parseFloat(commission) || 0;
    return ((p * c) / 100).toFixed(3);
  };

  const handleOrderSubmission = () => {
    // Instead of calling submit directly, open the rate modal
    setShowRateModal(true);
  };

  const handleRateSubmit = () => {
    // This will be called when user clicks "To be submitted" in RateModal
    submit(); // original submit action
  };

  return (
    <div className="modal-overlay" onClick={hideModal}>
      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="modal-close" onClick={hideModal}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-contents">
          {/* Hero image with vertical title */}
          <div className="modal-hero">
            <img
              src={
                items?.image ||
                items?.photo?.[0]?.downloadUrl ||
                'https://via.placeholder.com/600x400'
              }
              alt={items?.title}
              className="hero-image"
            />
          </div>

          {/* Product title and rating line */}
          <div className="product-title-main">
            {items?.title || 'Product name'}
          </div>
          <div className="review-subtitle">
            <i className="fas fa-star" style={{ color: '#ffb340' }}></i> 4.8 · 111,737 positive reviews
          </div>

          {/* Amenities row (static for now; can be dynamic) */}
          <div className="amenities-row">
            <div className="amenity-circle"><i className="fas fa-wifi"></i></div>
            <div className="amenity-circle"><i className="fas fa-wine-glass-alt"></i></div>
            <div className="amenity-circle"><i className="fas fa-parking"></i></div>
            <div className="amenity-circle"><i className="fas fa-dumbbell"></i></div>
            <div className="amenity-circle"><i className="fas fa-utensils"></i></div>
            <div className="amenity-circle"><i className="fas fa-swimmer"></i></div>
          </div>

          {/* Order details card */}
          <div className="order-card">
            <div className="order-row">
              <span className="order-label">Order number</span>
              <span className="order-value">N{number}</span>
            </div>
            <div className="order-row">
              <span className="order-label">Total amount</span>
              <span className="order-value">€ {items?.amount || '0.00'}</span>
            </div>
            <div className="order-row">
              <span className="order-label">Predetermined time</span>
              <span className="order-value">{Dates.current()}</span>
            </div>
          </div>

          {/* Commission box (estimated return) */}
          <div className="commission-box">
            <span className="currency-symbol">€</span>
            <span className="commission-value">
              {calculateProfit(
                items?.price ?? items?.amount,
                items?.commission
              )}
            </span>
          </div>

          {/* Submission row: x1 Commission + Order submission button */}
          <div className="submission-row">
            <div className="left-commission">
              <span className="x1-large">x1</span>
              <span className="commission-label-small">Commission</span>
            </div>
            <button className="right-button" onClick={handleOrderSubmission}>
              <i className="fas fa-check-circle"></i> Order submission
            </button>
          </div>
        </div>
      </div>

      {/* Render the RateModal when needed */}
      {showRateModal && (
        <RateModal
          onClose={() => setShowRateModal(false)}
          onSubmit={handleRateSubmit}
        />
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .product-modal {
          max-width: 430px;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
          position: relative;
          max-height: 100vh;
          overflow-y: auto;
          padding: 0 0 20px 0;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #1c1c1e;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: white;
        }

        .modal-contents {
          padding: 0 20px;
        }

        /* Hero image */
        .modal-hero {
          position: relative;
          width: calc(100% + 40px);
          margin-left: -20px;
          margin-top: 0;
          height: 220px;
          overflow: hidden;
       
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-title-main {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 1.1;
          color: #000;
          margin: 16px 0 4px 0;
          letter-spacing: -0.5px;
        }

        .review-subtitle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          color: #5e5e60;
          margin-bottom: 22px;
        }

        /* Amenities */
        .amenities-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 28px;
          padding: 0 4px;
        }

        .amenity-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f2f5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A84FF;
          font-size: 1.3rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.02);
        }

        /* Order card */
        .order-card {
          background: #f8fafd;
          border-radius: 26px;
          padding: 18px 20px;
          margin-bottom: 24px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.02);
          border: 0.5px solid rgba(0,0,0,0.02);
        }

        .order-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }

        .order-row:not(:last-child) {
          border-bottom: 1px solid #e9ecf0;
        }

        .order-label {
          font-size: 14px;
          color: #5e5e60;
          font-weight: 450;
        }

        .order-value {
          font-size: 14px;
          font-weight: 600;
          color: #1c1c1e;
          letter-spacing: 0.2px;
        }

        /* Commission box */
        .commission-box {
          background: #f2f5fa;
          border-radius: 24px;
          padding: 10px 22px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 1.3rem;
          font-weight: 600;
          color: #1c1c1e;
          border: 0.5px solid rgba(0,0,0,0.02);
          box-shadow: inset 0 2px 5px rgba(0,0,0,0.02);
        }

        .currency-symbol {
          font-size: 1.2rem;
          font-weight: 500;
          color: #6c6c70;
          margin-right: 6px;
          order: -1;
        }

        /* Submission row */
        .submission-row {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 10px;
        }

        .left-commission {
          flex: 1;
          background: #f2f5fa;
          border-radius: 26px;
          padding: 14px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.02);
          border: 0.5px solid rgba(0,0,0,0.02);
        }

        .x1-large {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1;
          color: #0A84FF;
          margin-bottom: 2px;
        }

        .commission-label-small {
          font-size: 0.8rem;
          font-weight: 500;
          color: #5e5e60;
          text-transform: uppercase;
          letter-spacing: 0.2px;
        }

        .right-button {
          flex: 2;
          background: #0A84FF;
          border-radius: 26px;
          padding: 18px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          box-shadow: 0 10px 22px -8px rgba(10,132,255,0.3);
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .right-button:hover {
          background: #0077e6;
        }

        .right-button i {
          margin-right: 8px;
          font-size: 1.1rem;
        }

        /* Small screens */
        @media (max-width: 400px) {
          .amenity-circle {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
          .product-title-main {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default GrapModal;