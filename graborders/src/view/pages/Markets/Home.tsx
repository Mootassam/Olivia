import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <style>{`
        .app-home {
          width: 100%;
          background-color: #ffffff;
          border-radius: 0;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        /* --- cover (hero) with image & overlay, NO border radius, TALLER & SHARP --- */
        .hero {
          position: relative;
          height: 300px;                /* increased for more presence */
          background-image: url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop');  /* high-res */
          background-size: cover;
          background-position: center 25%;
          border-radius: 0;
          isolation: isolate;
        }

        /* soft gradient overlay */
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 85%);
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          z-index: 2;
          color: white;
          text-shadow: 0 3px 8px rgba(0,0,0,0.5);
        }

        .hero-content h3 {
          font-size: 22px;              /* slightly bigger but still moderate */
          font-weight: 600;
          letter-spacing: 0.2px;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .hero-content p {
          font-size: 15px;
          font-weight: 300;
          opacity: 0.95;
        }

        /* --- floating search card (white, overlapping) --- */
        .search-card {
          background-color: #ffffff;
          margin: -28px 16px 20px 16px;   /* more overlap, more dramatic */
          padding: 18px 16px 20px 16px;    /* slightly more breathing */
          border-radius: 28px;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(255,255,255,0.8);
          backdrop-filter: blur(2px);
        }

        .form-row {
          margin-bottom: 14px;            /* slightly more gap */
        }

        .form-row.double {
          display: flex;
          gap: 10px;
        }

        .input-group {
          display: flex;
          align-items: center;
          background-color: #F2F5FA;
          border-radius: 22px;            /* rounder */
          padding: 8px 16px;
          border: 1px solid #E9EDF3;
          transition: border 0.15s ease;
        }

        .input-group:focus-within {
          border-color: rgb(68, 136, 247);
          box-shadow: 0 0 0 3px rgba(68, 136, 247, 0.1);
        }

        .input-group i {
          color: #7C8797;
          font-size: 16px;
          width: 24px;
          text-align: center;
          margin-right: 4px;
        }

        .input-group input {
          border: none;
          background: transparent;
          padding: 8px 0;
          font-size: 15px;                /* slightly larger for readability */
          font-weight: 450;
          width: 100%;
          outline: none;
          color: #1A2639;
        }

        .input-group input::placeholder {
          color: #9AA6B5;
          font-weight: 350;
          font-size: 14px;
        }

        .search-btn {
          display: block;
          width: 100%;
          background-color: rgb(68, 136, 247) !important;
          border: none;
          border-radius: 28px;
          padding: 14px 20px;              /* a bit taller for better touch */
          margin-top: 22px;
          color: white;
          font-size: 17px;
          font-weight: 560;
          letter-spacing: 0.3px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(68, 136, 247, 0.3);
          transition: transform 0.12s, box-shadow 0.2s;
          line-height: 1.2;
          border: 1px solid rgba(255,255,255,0.2);
        }

        button.search-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 14px 28px rgba(68, 136, 247, 0.35);
        }

        button.search-btn:active {
          transform: scale(0.98);
          box-shadow: 0 6px 14px rgba(68, 136, 247, 0.4);
        }

        .helper-note {
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
          font-size: 12px;
          color: #8D9AAB;
          padding: 0 6px;
        }

        .helper-note i {
          font-size: 12px;
          margin-right: 4px;
        }

        /* --- sections common --- */
        .section {
          padding: 0 16px 28px 16px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 14px;
        }

        .section-header h4 {
          font-size: 18px;
          font-weight: 620;
          color: #1F2A3E;
          letter-spacing: -0.2px;
        }

        .section-header a {
          font-size: 14px;
          color: rgb(68, 136, 247);
          font-weight: 520;
          text-decoration: none;
        }

        /* --- PHOTO GALLERY (larger images) - HIDDEN SCROLLBAR --- */
        .photo-scroll {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scrollbar-width: none;  /* Firefox - hide scrollbar */
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
        }

        /* Chrome, Safari, Edge - hide scrollbar */
        .photo-scroll::-webkit-scrollbar {
          display: none;
        }

        .photo-item {
          flex: 0 0 auto;
          width: 180px;                /* larger horizontal cards */
          border-radius: 24px;
          overflow: hidden;
          background-color: #F8FAFE;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
          border: 1px solid #F0F4FA;
        }

        .photo-img {
          height: 180px;                /* square but feels substantial */
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .photo-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          color: white;
          padding: 30px 12px 12px 12px;
          font-size: 16px;
          font-weight: 600;
          text-shadow: 0 2px 5px black;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .photo-label span {
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
          padding: 4px 12px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 500;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }

        /* --- RECOMMENDED STAYS (larger images) --- */
        .card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .rec-card {
          background: white;
          border-radius: 22px;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.02);
          border: 1px solid #F0F4FA;
          overflow: hidden;
          transition: transform 0.1s ease;
        }

        .rec-card:active {
          transform: scale(0.98);
        }

        .card-img {
          height: 180px;                /* taller images */
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .card-img .price-tag {
          position: absolute;
          bottom: 8px;
          right: 10px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(2px);
          padding: 5px 12px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          color: #1F2A3E;
          box-shadow: 0 3px 8px rgba(0,0,0,0.05);
        }

        .card-info {
          padding: 12px 10px 14px 10px;
        }

        .card-info h5 {
          font-size: 15px;
          font-weight: 620;
          margin-bottom: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-info .location {
          font-size: 12px;
          color: #6A7A8E;
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .card-info .location i {
          font-size: 10px;
          color: #9aa6b5;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 12px;
          font-weight: 520;
        }

        .rating i {
          color: #FFB347;
          font-size: 11px;
        }

        .rating span {
          color: #2C3A4B;
          margin-left: 3px;
        }

        /* --- WHY BOOK WITH US (icon row) --- */
        .features {
          display: flex;
          justify-content: space-between;
          background: #F8FAFE;
          border-radius: 40px;
          padding: 16px 20px;
          margin: 8px 0 16px 0;
        }

        .feature-item {
          text-align: center;
          font-size: 13px;
          font-weight: 530;
          color: #2C3A4B;
        }

        .feature-item i {
          font-size: 22px;
          color: rgb(68, 136, 247);
          display: block;
          margin-bottom: 5px;
        }

        /* footer */
        .attribution {
          font-size: 11px;
          color: #B2C0D0;
          text-align: center;
          padding: 18px 0 12px 0;
          border-top: 1px solid #EEF2F8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        .remove__blue {
          text-decoration: none;
        }
      `}</style>

      <div className="app-home">
        {/* tall hero with crisp, large image */}
        <div className="hero">
          <div className="hero-content">
            <h3>🌙 find your calm</h3>
            <p>luxury hotels · private retreats</p>
          </div>
        </div>

        {/* search card (floating, refined) */}
        <div className="search-card">
          <div className="form-row">
            <div className="input-group">
              <i className="fas fa-map-pin" />
              <input type="text" placeholder="Destination, city, hotel" />
            </div>
          </div>
          <div className="form-row double">
            <div className="input-group">
              <i className="fas fa-calendar-alt" />
              <input type="text" placeholder="Check-in" />
            </div>
            <div className="input-group">
              <i className="fas fa-calendar-check" />
              <input type="text" placeholder="Check-out" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <i className="fas fa-user-group" />
              <input type="text" placeholder="2 adults · 0 children" />
            </div>
          </div>
          <Link className="search-btn remove__blue" to="/grap">
            <span>Go to search</span>
            <i
              className="fas fa-arrow-right"
              style={{ fontSize: 15, marginLeft: 6 }}
            />
          </Link>
          <div className="helper-note">
            <i className="far fa-clock" /> <span>flexible dates? · best price</span>
          </div>
        </div>

        {/* DREAM ESCAPES - Hidden scrollbar with unique images */}
        <div className="section">
          <div className="section-header">
            <h4>📸 dream escapes</h4>
            <a href="#">explore all</a>
          </div>
          <div className="photo-scroll">
            <div className="photo-item">
              <div
                className="photo-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=600&auto=format&fit=crop")'
                }}
              >
                <div className="photo-label">
                  maldives <span>$199</span>
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div
                className="photo-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&auto=format&fit=crop")'
                }}
              >
                <div className="photo-label">
                  swiss alps <span>$289</span>
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div
                className="photo-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=600&auto=format&fit=crop")'
                }}
              >
                <div className="photo-label">
                  bali <span>$149</span>
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div
                className="photo-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=600&auto=format&fit=crop")'
                }}
              >
                <div className="photo-label">
                  tokyo <span>$230</span>
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div
                className="photo-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=600&auto=format&fit=crop")'
                }}
              >
                <div className="photo-label">
                  Miami <span>$175</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOP PICKS FOR YOU - All unique images, none repeated from dream escapes */}
        <div className="section">
          <div className="section-header">
            <h4>✨ top picks for you</h4>
            <a href="#">view all</a>
          </div>
          <div className="card-grid">
            {/* card 1 - New unique image */}
            <div className="rec-card">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=500&auto=format&fit=crop")'
                }}
              >
                <span className="price-tag">$129</span>
              </div>
              <div className="card-info">
                <h5>The Oasis</h5>
                <div className="location">
                  <i className="fas fa-map-marker-alt" /> Miami Beach
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span>4.7</span>
                </div>
              </div>
            </div>
            {/* card 2 - New unique image */}
            <div className="rec-card">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=500&auto=format&fit=crop")'
                }}
              >
                <span className="price-tag">$87</span>
              </div>
              <div className="card-info">
                <h5>Alpine Chalet</h5>
                <div className="location">
                  <i className="fas fa-map-marker-alt" /> Zermatt
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
            {/* card 3 - New unique image */}
            <div className="rec-card">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=500&auto=format&fit=crop")'
                }}
              >
                <span className="price-tag">$210</span>
              </div>
              <div className="card-info">
                <h5>Grand Horizon</h5>
                <div className="location">
                  <i className="fas fa-map-marker-alt" /> Singapore
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
            {/* card 4 - New unique image */}
            <div className="rec-card">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=500&auto=format&fit=crop")'
                }}
              >
                <span className="price-tag">$154</span>
              </div>
              <div className="card-info">
                <h5>Sailor's Inn</h5>
                <div className="location">
                  <i className="fas fa-map-marker-alt" /> Cape Town
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span>4.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* why book with us (icon row) */}
        <div className="section">
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-wifi" /> Free WiFi
            </div>
            <div className="feature-item">
              <i className="fas fa-headset" /> 24/7 support
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt" /> Secure
            </div>
            <div className="feature-item">
              <i className="fas fa-tag" /> Best rate
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="attribution">
          ✦ book now, relax later · no hidden fees ✦
        </div>
      </div>
    </>
  )
}

export default Home