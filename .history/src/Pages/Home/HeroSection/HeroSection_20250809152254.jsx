  <div className="sliderContainer">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slideItem ${
                index === currentSlide ? "slideActive" : ""
              }`}
            >
              <img src={slide.image} alt={slide.alt} className="slideImage" />
              <div className="slideOverlay">
                <div className="HeroSectioncontentWrapper">
                  <div className="slideContent">
                    <h1 className="slideTitle">{slide.title}</h1>
                    <h2 className="slideSubtitle">{slide.subtitle}</h2>
                    <p className="slideDescription">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>