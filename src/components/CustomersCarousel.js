import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { CAROUSEL_ITEMS as items } from "../data/data";
import "./CustomersCarousel.css";

const CustomersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="text-center my-5"
      >
        <div className="carousel-image-cropper my-5">
          <img
            src={item.src}
            alt="Customer image"
            className="carousel-profile-pic"
          />
        </div>

        <div>
          <blockquote className="blockquote text-white">
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              earum fuga natus veritatis minima voluptatibus? Quae consequuntur
              beatae repudiandae aut!
            </p>
          </blockquote>
          <h5 className="text-light text-uppercase font-weight-bold mb-3">
            Monica
          </h5>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CustomersCarousel;
