

import { useHistory } from 'react-router-dom';

function SubHeader(props) {
  const history = useHistory();




  const goBack = () => {
    history.goBack();
  };


  return (
    <div className="subheader-container">
      <div className="subheader-content">
        <div className="back-button" onClick={goBack}>
          <i className="fa-solid fa-arrow-left back-icon"></i>
        </div>
        <div className="subheader-title">{props?.title}</div>

      </div>

      <style>{`
        .subheader-container {
          background: #fff;
          padding: 10px;
          position: sticky;
          top: 0;
          z-index: 100;
          width:100%;
        }

        .subheader-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          margin: 0 auto;
        }

        .back-button {
         
       color :#000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .back-icon {
          color: #000;
          font-size: 16px;
        }


        .subheader-title {
          color: #000 !important;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          text-align: center;
          flex: 1;
        }

        .notification-container {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-icons {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(30, 41, 59, 0.8);

          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }


        /* Responsive Design */
        @media (max-width: 400px) {
          .subheader-container {
            padding:10px;
          }
          
          .subheader-content {
            padding: 0;
          }
          
          .back-button {
            width: 36px;
            height: 36px;
          }
          
          .subheader-title {
            font-size: 16px;
          }
        
      `}</style>
    </div>
  );
}

export default SubHeader;