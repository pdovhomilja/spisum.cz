import Carousel from "@/components/Carousel";
import React from "react";

type Props = {};

const CarouselPage = (props: Props) => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <div className="flex justify-center h-full w-full border">
      <Carousel autoSlide={false}>
        {slides.map((slide, index) => (
          <img src={slide} key={index} alt={"demo"} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
