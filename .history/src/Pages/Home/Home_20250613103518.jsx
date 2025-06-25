// Hero Section
.heroSection {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #253f57 0%, #52585a 100%);

  @media (max-width: 768px) {
    min-height: 500px;
    height: 70vh;
  }

  @media (max-width: 480px) {
    min-height: 450px;
  }
}

.heroSlider {
  position: relative;
  width: 100%;
  height: 100%;
}

.heroSlide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  background: linear-gradient(135deg, #253f57 0%, #52585a 100%);

  &.active {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
}

.heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(37, 63, 87, 0.8) 0%, rgba(82, 88, 90, 0.6) 100%);
  z-index: 1;
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
}

.heroText {
  max-width: 700px;
  color: white;
  animation: slideInUp 1s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
}

.heroTitle {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
}

.heroSubtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 25px 0;
  color: #e0e0e0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
}

.heroDescription {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 35px 0;
  color: #f0f0f0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
}

.heroButtons {
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
}

.ctaButton {
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-width: 160px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 25px;
    font-size: 0.95rem;
  }

  &.primary {
    background-color: white;
    color: #253f57;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #f0f0f0;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }

  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: white;
      color: #253f57;
      transform: translateY(-2px);
    }
  }
}

// Slider Controls
.sliderControls {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 3;

  @media (max-width: 768px) {
    bottom: 20px;
    gap: 15px;
  }
}

.sliderButton {
  width: 45px;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: white;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

.sliderDots {
  display: flex;
  gap: 10px;
  align-items: center;
}

.sliderDot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background-color: white;
    border-color: white;
    transform: scale(1.2);
  }

  &:hover {
    border-color: white;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
}

// Animations
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Background Animation
.heroSlide {
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: float 20s infinite linear;
    opacity: 0.5;
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(-50px, -50px) rotate(360deg);
  }
}

// Responsive Design Enhancements
@media (max-width: 320px) {
  .heroTitle {
    font-size: 1.8rem;
  }

  .heroSubtitle {
    font-size: 1rem;
  }

  .heroDescription {
    font-size: 0.9rem;
  }

  .ctaButton {
    padding: 10px 20px;
    font-size: 0.9rem;
    min-width: 140px;
  }
}