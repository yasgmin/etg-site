import React from "react";
import { CarouselItem } from "./CarouselItem.1";

const Carousel = () => {
  const items = [
    {
      description: "blah blah",
      icon: require("../../images/feedback1.png"),
    },
    {
      description: "blah blah",
      icon: require("../../images/feedback2.png"),
    },
    {
      description: "blah blah",
      icon: require("../../images/feedback3.png"),
    },
    {
      description: "blah blah",
      icon: require("../../images/feedback4.png"),
    },
    {
      description: "blah blah",
      icon: require("../../images/feedback5.png"),
    },
  ];
  return (
    <div className="carousel">
      <div className="inner">
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
