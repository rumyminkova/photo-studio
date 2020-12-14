import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
        <img
          src={item.src}
          alt="Customer"
          className="img-fluid rounded-circle m-5"
          width="150"
        />
        <blockquote className="blockquote text-muted">
          <p className="mb-3">{item.text}</p>
        </blockquote>

        <Rating
          initialRating={item.rating}
          readonly
          emptySymbol={<AiOutlineStar size="2.5rem" className="rating-color" />}
          fullSymbol={<AiFillStar size="2.5rem" className="rating-color" />}
        />
        <h5 className="text-muted text-uppercase font-weight-bold mb-5 mt-3">
          {item.name}
        </h5>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        controls={false}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default CustomersCarousel;
