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
          margin-bottom: 16px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.12), 0 4px 8px -4px rgba(0, 0, 0, 0.06);
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
          width: 16px;  /* Increased from 14px to match wallet-icon size */
          height: 16px; /* Increased from 14px to match wallet-icon size */
        }
        .wallet-icon {
          width: 16px;
          height: 16px;
        }
        .label {
          font-size: 15px;
          font-weight: 500;
          color: #1a1e24;
          font-family: Georgia, "Times New Roman", Times, serif;
          letter-spacing: -0.01em;
        }
        .badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 12px;
          margin-left: 8px;
          letter-spacing: 0.3px;
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
        .subtitle {
          font-size: 16px;
          font-weight: 700;
          color: #1a1e24;
          margin: 32px 0 20px 0;
          letter-spacing: -0.02em;
        }
        .remove__blue {
          text-decoration: none;
          display: block;
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
              <span className="label">BANK</span>
            </div>

            {/* Removed the center-section with dash-symbol to match USDT card style */}
            
            <button className="arrow-button" aria-label="Next">
              <span className="arrow-icon">›</span>
            </button>
          </div>
        </Link>

        <h2 className="subtitle">Cryptocurrency Network</h2>
        
        <Link to="/wallet" className="remove__blue">
          <div className="card">
            <div className="left-section">
              <div className="icon-circle">
                <svg className="wallet-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9V7H20V5C20 3.9 19.1 3 18 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V17H20V19H4V5H18V7H16V9H22Z" fill="white"/>
                  <rect x="15" y="13" width="7" height="4" rx="1" fill="white"/>
                  <circle cx="18.5" cy="15" r="1" fill="#1e1e1e"/>
                </svg>
              </div>
              <span className="label">USDT (TRC20/ERC20)</span>
              <span className="badge">Popular</span>
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