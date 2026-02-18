import React, { useState } from 'react';
import SubHeader from 'src/view/shared/Header/SubHeader';
import { i18n } from '../../../i18n'; // optional, if you want to translate titles later

function HelpCenter() {
  // State to track open sections (all closed initially)
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Accordion data: title and content (as JSX for formatting)
  const sections = [
    {
      title: 'Regarding Special Orders',
      content: (
        <>
          <p><strong>What is a "Special Hotel Order"?</strong></p>
          <p>Special Hotel Orders are exclusive benefits offered by X Business in collaboration with selected luxury hotels. These orders are rare and are available only to high-level VIP members.</p>
          <p>VIP members may receive Mystery Box rewards, which can include cash prizes and Special Hotel Orders, offering commissions ranging from 30 to 50 times the standard rate.</p>
        </>
      ),
    },
    {
      title: 'Platform Regulations',
      content: (
        <>
          <p>To place hotel orders, go to the relevant page and click on "Search". Wait for a suitable order to appear, then proceed to complete the hotel order. Completing and withdrawing a hotel order typically takes around <strong>30 minutes</strong>.</p>
          <p>All hotel orders are randomly assigned by the platform's matching engine and <strong>cannot be modified, cancelled, or skipped</strong>.</p>
          <p>For hotel orders from different merchants, if more than <strong>15 minutes</strong> have passed without completing the deposit, you must contact customer support and confirm the deposit account details with the merchant.</p>
          <p>The platform operates daily from <strong>9:00 AM to 9:00 PM</strong>, and members may submit hotel orders during these hours.</p>
          <p>If your account is misused or accessed by someone else, please contact customer support immediately. The platform will take appropriate emergency action and may pursue legal proceedings.</p>
          <p>If you place an order for hotel advertising, once the order is received, contact online customer support to verify the deposit status. Then, click the <strong>"Submit"</strong> button on the order page to complete the <strong>Premium Hotel Order</strong>.</p>
          <p>If you withdraw more than UAE 40,000, an <strong>audit fee</strong> will be required for initial verification and security purposes. This fee may be withdrawn <strong>one hour after the verification is completed</strong>.</p>
          <p><strong>Note:</strong> For further information, please contact the platform's online customer support.</p>
        </>
      ),
    },
    {
      title: 'About Deposits',
      content: (
        <>
          <p>Members can make deposits via their personal account page. Click on "Deposit", then select the designated customer service representative to proceed. Use the deposit account details provided by customer service to complete the transfer. Once the transfer is successful, please send a screenshot of the transaction as confirmation.</p>
          <p>If you experience any issues during the deposit process that cannot be resolved, please contact the appropriate online customer service representative.</p>
          <p>Due to the high volume of messages, it is essential to verify the platform's deposit account before making any payment. Please note that the platform updates its deposit account details daily.</p>
          <p><strong>Note:</strong> Members should only make a deposit if their account balance is lower than the current price of the hotel order.</p>
          <p>For any enquiries, please contact the platform's online customer service.</p>
        </>
      ),
    },
    {
      title: 'About Withdrawals',
      content: (
        <>
          <p>After completing your daily tasks, you may submit a withdrawal request (minimum withdrawal amount UAE 40). Before doing so, please ensure your withdrawal information is linked on the platform.</p>
          <p>Click the "Withdraw" button, enter the amount you wish to withdraw, and input your withdrawal password. Withdrawals are typically processed and credited within 30 minutes; however, the exact time may vary depending on your bank or payment provider.</p>
          <p><strong>Please note:</strong> Withdrawal processing hours are from <strong>9:00 AM to 9:00 PM</strong> daily.</p>
        </>
      ),
    },
    {
      title: 'Regarding Luxury Orders',
      content: (
        <>
          <p><strong>What is a "Luxury Hotel Order"?</strong></p>
          <p>These orders serve as a form of advertising, designed to generate profit through promotional campaigns on hotel booking platforms. Luxury Hotel Orders assist merchants in gaining brand support with the aim of attracting a larger customer base.</p>
          <p>Luxury Hotel Orders provide a benefit to all members, enabling them to earn additional commission. The objective for both suppliers and distributors is to allow members and agents to earn commissions ranging from 10 to 30 times the original amount.</p>
          <p>Agents typically receive between 0 (minimum) and 2 (maximum) Luxury Hotel Orders per day, though this may vary.</p>
          <p><strong>Note:</strong> If you are assigned a Luxury Hotel Order, all members are required to complete the task. The final status of the order will be reflected as a credit adjustment to the user's account. Any negative balance displayed represents the amount that must be deposited.</p>
        </>
      ),
    },
  ];

  return (
    <div className="help-center">
      <SubHeader title="Help Center" path="/profile" />

      <div className="help-center__container">

        <div className="accordion">
          {sections.map((section, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${openSections[index] ? 'open' : ''}`}
                onClick={() => toggleSection(index)}
              >
                <span className="accordion-title">{section.title}</span>
                <i className={`fas fa-chevron-${openSections[index] ? 'up' : 'down'} accordion-icon`}></i>
              </div>
              {openSections[index] && (
                <div className="accordion-content">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="help-center__footer">
          For further assistance, please contact our online customer support.
        </p>
      </div>

      {/* Inline styles for black/white theme */}
      <style>{`
        .help-center {
          background-color: #ffffff;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .help-center__container {
          max-width: 700px;
          margin: 0 auto;
          padding: 1.5rem 1rem;
        }

        .help-center__title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #000000;
          margin: 0 0 1.5rem 0;
          text-align: center;
        }

        .accordion {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
        }

        .accordion-item {
          border-bottom: 1px solid #e0e0e0;
        }
        .accordion-item:last-child {
          border-bottom: none;
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background-color: #f9f9f9;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .accordion-header:hover {
          background-color: #f0f0f0;
        }
        .accordion-header.open {
          background-color: #ffffff;
          border-bottom: 1px solid #e0e0e0;
        }

        .accordion-title {
          font-size: 13px;
          font-weight: 500;
          color: #111111;
        }

        .accordion-icon {
          color: rgb(0, 157, 254);
          font-size: 0.9rem;
          width: 20px;
          text-align: center;
        }

        .accordion-content {
          padding: 1.25rem;
          background-color: #ffffff;
          color: #333333;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .accordion-content p {
          margin: 0 0 1rem 0;
        }
        .accordion-content p:last-child {
          margin-bottom: 0;
        }
        .accordion-content strong {
          color: #000000;
          font-weight: 600;
        }

        .help-center__footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: #666666;
        }

        @media (max-width: 480px) {
          .help-center__container {
            padding: 1rem;
          }
          .help-center__title {
            font-size: 1.5rem;
          }
          .accordion-header {
            padding: 0.85rem 1rem;
          }
          .accordion-title {
            font-size: 1rem;
          }
          .accordion-content {
            padding: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default HelpCenter;