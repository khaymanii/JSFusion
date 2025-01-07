"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

interface slideData {
  id: number;
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

export default function Hero() {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slideData: slideData[] = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$50",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Style",
      mainTitle: "MODERN TREND",
      price: "$20",
    },
    {
      id: 3,
      img: "/banner-3.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$10",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
