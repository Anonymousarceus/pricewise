"use client"
// Ensure to import the required modules
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const heroImages = [
  { imgUrl: 'assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: 'assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: 'assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: 'assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: 'assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        dynamicHeight={false} 
        width={400} 
        
      >
        {heroImages.map((image) => (
          <div key={image.alt}>
            <img
              src={image.imgUrl}
              alt={image.alt}
              className='object-contain'
            />
          </div>
        ))}
      </Carousel>
      <img
      src="assets/icons/hand-drawn-arrow.svg"
      alt="arrow"
      width={170}
      height={170}
      className="max-xl:hidden absolute -left1-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
