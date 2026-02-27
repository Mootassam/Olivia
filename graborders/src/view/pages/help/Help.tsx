import React, { useState } from 'react';
import SubHeader from 'src/view/shared/Header/SubHeader';
import { i18n, i18nHtml } from '../../../i18n';

function HelpCenter() {
  // State to track open sections (all closed initially)
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Accordion sections sourced from i18n
  const sections = [
    {
      title: i18n('pages.help.accordion.specialOrders.title'),
      content: i18nHtml('pages.help.accordion.specialOrders.content'),
    },
    {
      title: i18n('pages.help.accordion.platformRegulations.title'),
      content: i18nHtml('pages.help.accordion.platformRegulations.content'),
    },
    {
      title: i18n('pages.help.accordion.deposits.title'),
      content: i18nHtml('pages.help.accordion.deposits.content'),
    },
    {
      title: i18n('pages.help.accordion.withdrawals.title'),
      content: i18nHtml('pages.help.accordion.withdrawals.content'),
    },
    {
      title: i18n('pages.help.accordion.luxuryOrders.title'),
      content: i18nHtml('pages.help.accordion.luxuryOrders.content'),
    },
  ];

  return (
    <div className="help-center">
      <SubHeader title={i18n('pages.help.title')} path="/profile" />

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
          {i18n('pages.help.footer')}
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
