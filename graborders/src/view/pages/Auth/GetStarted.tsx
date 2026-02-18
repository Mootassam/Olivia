import React, { useState, useEffect, useRef, useCallback } from 'react';
import {Link} from 'react-router-dom'
const slidesData = [
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&auto=format&fit=crop',
    title: 'elegant rooms',
    description: 'comfort · style · skyline',
  },
  {
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop',
    title: 'grand lobbies',
    description: 'sophisticated · welcoming',
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop',
    title: 'serene pools',
    description: 'relax · unwind · luxury',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&fit=crop',
    title: 'fine dining',
    description: 'gourmet experiences',
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&auto=format&fit=crop',
    title: 'wellness retreat',
    description: 'spa · rejuvenate',
  },
];

const GetStarted: React.FC = () => {
  // Duplicate first and last slides for infinite loop
  const extendedSlides = [
    slidesData[slidesData.length - 1], // last slide at beginning
    ...slidesData,
    slidesData[0], // first slide at end
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Helper to get original slide index (0‑based) from extended index
  const getOriginalIndex = (extendedIndex: number): number => {
    if (extendedIndex === 0) return slidesData.length - 1; // last slide
    if (extendedIndex === extendedSlides.length - 1) return 0; // first slide
    return extendedIndex - 1; // real slides
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
    },
    [isTransitioning]
  );

  // Handle transition end – perform instant jumps at clone boundaries
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);

    // If we are at the cloned first slide (last element), jump to real first slide
    if (currentIndex === extendedSlides.length - 1) {
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        setCurrentIndex(1); // real first slide
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = '';
          }
        }, 50);
      }
    }

    // If we are at the cloned last slide (first element), jump to real last slide
    if (currentIndex === 0) {
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        setCurrentIndex(extendedSlides.length - 2); // real last slide
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = '';
          }
        }, 50);
      }
    }
  }, [currentIndex, extendedSlides.length]);

  // Auto‑play: advance to next slide every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Pause on hover
  const pauseAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  // Update transform when currentIndex changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  // Dot click handler
  const handleDotClick = (dotIndex: number) => {
    const targetIndex = dotIndex + 1; // real slides start at index 1
    goToSlide(targetIndex);
  };

  const activeDotIndex = getOriginalIndex(currentIndex);

  return (
    <>
      <style>{`
        .app-getstarted {
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .slider-container {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .carousel {
          display: flex;
          height: 100%;
          width: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          flex: 0 0 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .slide::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 90%);
          pointer-events: none;
        }

        .slide-content {
          position: absolute;
          bottom: 90px;
          left: 24px;
          right: 24px;
          color: white;
          text-shadow: 0 4px 12px rgba(0,0,0,0.4);
          z-index: 2;
        }

        .slide-content h2 {
          font-size: 26px;
          font-weight: 650;
          margin-bottom: 4px;
          letter-spacing: -0.2px;
        }

        .slide-content p {
          font-size: 15px;
          font-weight: 300;
          opacity: 0.95;
          max-width: 80%;
        }

        .dots {
          position: absolute;
          bottom: 65px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          z-index: 5;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          cursor: pointer;
        }

        .dot.active {
          width: 26px;
          background-color: white;
        }

        .get-started-btn {
          position: absolute;
          bottom: 18px;
          left: 16px;
          right: 16px;
          background-color: rgb(68, 136, 247) !important;
          border: none;
          border-radius: 40px;
          padding: 12px 16px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 12px 26px rgba(68, 136, 247, 0.4), 0 4px 12px rgba(0,0,0,0.15);
          transition: transform 0.15s, box-shadow 0.2s;
          line-height: 1.2;
          border: 1px solid rgba(255,255,255,0.3);
          z-index: 10;
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .get-started-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 18px 34px rgba(68, 136, 247, 0.5);
        }

        .get-started-btn:active {
          transform: scale(0.98);
          box-shadow: 0 6px 16px rgba(68, 136, 247, 0.5);
        }

        .get-started-btn i {
          font-size: 15px;
        }
      `}</style>

      <div className="app-getstarted">
        <div
          className="slider-container"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div
            className="carousel"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, idx) => (
              <div
                key={idx}
                className="slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {slidesData.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${activeDotIndex === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>

          <Link
            className="get-started-btn remove__blue"
            to="/auth/signin"
      
      
          >
            Get started <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStarted;