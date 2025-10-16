import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from './Card';


const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} aria-label="Previous" className="carousel-arrow left">
    <ChevronLeft size={20} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} aria-label="Next" className="carousel-arrow right">
    <ChevronRight size={20} />
  </button>
);

const BRSBCarousel = ({ attributes, isPremium = false, isEditor = true, activeSlideProps }) => {
  const { sliderItems = [], responsive = {}, sliderSettings = {}, theme = "default" } = attributes || {};



  const isPremiumTheme = theme !== "default"
  const isShowPremiumOverlay = !isPremium && isPremiumTheme && !isEditor
  return (
    <div className={`brsb-carousel-container ${isShowPremiumOverlay ? 'hasPremiumPadding' : ''}`}>
      <h2 className="carousel-title">Our Expertise</h2>

      {
        isShowPremiumOverlay && <div className="brsb-premium-overlay">
          <div className="brsb-premium-overlay-content">
            <p>This theme is available in the Pro version.</p>
            <a href="/wp-admin/tools.php?page=demo_page#/pricing" className="brsb-upgrade-btn">Upgrade to Pro</a>
          </div>
        </div>
      }

      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={sliderSettings?.infinite}
          autoPlay={sliderSettings?.autoPlay}
          autoPlaySpeed={sliderSettings?.autoPlaySpeed}
          keyBoardControl={sliderSettings?.keyBoardControl}
          showDots={sliderSettings?.showDots}
          arrows={sliderSettings?.showArrows}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          containerClass="carousel-container"
          itemClass="carousel-item"
          dotListClass="custom-dot-list"
        >
          {sliderItems?.map((item, index) => (
            <Card key={index} item={item} theme={theme} activeSlideProps={activeSlideProps} idx={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BRSBCarousel;
