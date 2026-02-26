import React from 'react'
import SubHeader from 'src/view/shared/Header/SubHeader'
import { Link } from 'react-router-dom'
function BindAccount() {
  return (
    <>
      <SubHeader title="Bind Account" path="/profile" />
      
      <style>{`
        .container {
          min-height: 100vh;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        .title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1e24;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .card {
          background-color: #e8ecf2;
          border-radius: 10px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.08), 0 4px 8px -4px rgba(0, 0, 0, 0.02);
          max-width: 600px;
          width: 100%;
        }
        .left-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-circle {
          background-color: #1e1e1e;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bank-icon {
          width: 14px;
          height: 14px;
        }
        .bank-label {
          font-size: 15px;
          font-weight: 500;
          color: #1a1e24;
          font-family: Georgia, "Times New Roman", Times, serif;
          letter-spacing: -0.01em;
        }
        .center-section {
          margin-left: auto;
          margin-right: 12px;
        }
        .dash-symbol {
          font-size: 28px;
          font-weight: 400;
          color: #2c3e50;
          letter-spacing: 3px;
          opacity: 0.7;
        }
        .arrow-button {
          background-color: #d9e0e8;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: background-color 0.2s ease;
        }
        .arrow-button:hover {
          background-color: #cbd3dd;
        }
        .arrow-icon {
          font-size: 19px;
          line-height: 1;
          color: #2c3e50;
          display: block;
          margin-top: -3px;
        }
      `}</style>

      <div className="container">
        <h1 className="title">Currently tied bank card</h1>
        <Link to="/bank_details" className="remove__blue">
        <div className="card">
          <div className="left-section">
            <div className="icon-circle">
              <svg className="bank-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" />
                <line x1="2" y1="8" x2="22" y2="8" stroke="white" strokeWidth="1.5" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="16" r="1" fill="white" />
                <circle cx="16" cy="16" r="1" fill="white" />
              </svg>
            </div>
            <span className="bank-label">BANK</span>
          </div>

          <div className="center-section">
            <span className="dash-symbol">——</span>
          </div>

          <button className="arrow-button" aria-label="Next">
            <span className="arrow-icon">›</span>
          </button>
        </div>
        </Link>
      </div>
    </>
  )
}

export default BindAccount