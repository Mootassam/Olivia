import React from "react";

function InvitePage() {
  const members = [
    { id: '138060', recharge: '0', withdraw: '0' },
    { id: '138480', recharge: '0', withdraw: '0' },
    { id: '138851', recharge: '0', withdraw: '0' },
    { id: '138852', recharge: '0', withdraw: '0' },
    { id: '138853', recharge: '0', withdraw: '0' },
    { id: '138854', recharge: '0', withdraw: '0' },
  ];

  return (
    <div className="invite-page">
      {/* Abstract decorative circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>

      <div className="content">
        {/* Section 1: Team amount (on gradient) */}
        <div className="team-section">
          <h2 className="team-title">Team amount</h2>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Daily invitations</div>
            </div>
            <div className="stat-item with-divider">
              <div className="stat-number">4</div>
              <div className="stat-label">Monthly invitations</div>
            </div>
            <div className="stat-item with-divider">
              <div className="stat-number">€0</div>
              <div className="stat-label">Monthly income</div>
            </div>
          </div>

          <button className="rules-button">Invite friends activity rules</button>
        </div>

        {/* Section 2: New agent in (light card) */}
        <div className="table-card">
          <h3 className="table-title">New agent in</h3>

          <div className="table">
            <div className="table-header">
              <div className="table-cell">Member ID</div>
              <div className="table-cell">Recharge</div>
              <div className="table-cell">Withdraw</div>
            </div>

            {members.map((member) => (
              <div className="table-row" key={member.id}>
                <div className="table-cell">{member.id}</div>
                <div className="table-cell">€{member.recharge}</div>
                <div className="table-cell">€{member.withdraw}</div>
              </div>
            ))}
          </div>

          <div className="no-more-data">No more data</div>
        </div>
      </div>

      <style>{`
      
        .invite-page {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(145deg, #2b1a5c 0%, #1d3b6f 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          overflow: hidden;
        }

        /* Abstract circles */
        .circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          background: #ff6ac1;
          top: -100px;
          left: -100px;
        }

        .circle-2 {
          width: 400px;
          height: 400px;
          background: #7a4ef0;
          bottom: -150px;
          right: -150px;
        }

        .circle-3 {
          width: 350px;
          height: 350px;
          background: #3d9eff;
          top: 30%;
          left: 20%;
        }

        .content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 400px;
        }

        /* Team section */
        .team-section {
          color: white;
          margin-bottom: 32px;
        }

        .team-title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 28px;
          text-align: center;
          letter-spacing: -0.3px;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 36px;
        }

        .stat-item {
          flex: 1;
          text-align: center;
          position: relative;
        }

        .stat-item.with-divider::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        .stat-number {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 400;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .rules-button {
          display: block;
          width: 100%;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          border-radius: 60px;
          padding: 14px 16px;
          font-size: 15px;
          font-weight: 500;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
          text-align: center;
        }

        .rules-button:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        /* Table card */
        .table-card {
          background: #f4f7fc;  /* light grayish */
          border-radius: 32px;
          padding: 24px 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .table-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a2639;
          margin-bottom: 16px;
          padding-left: 4px;
        }

        .table {
          width: 100%;
        }

        .table-header {
          display: flex;
          padding: 12px 0 8px 0;
          border-bottom: 1px solid #dce3ec;
          font-size: 13px;
          font-weight: 600;
          color: #4a5c72;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .table-row {
          display: flex;
          padding: 12px 0;
          border-bottom: 1px solid #e6ecf5;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          flex: 1;
          font-size: 14px;
          color: #1e2f41;
          position: relative;
        }

        .table-cell:not(:first-child) {
          text-align: center;
        }

        /* subtle vertical dividers inside table */
        .table-cell:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: #dce3ec;
        }

        .no-more-data {
          text-align: center;
          font-size: 13px;
          color: #a0b2c4;
          margin-top: 24px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

export default InvitePage;