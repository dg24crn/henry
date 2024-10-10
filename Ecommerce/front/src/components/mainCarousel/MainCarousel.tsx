/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { Carousel } from "flowbite-react";

const MainCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-black">
      <Carousel>
        <img
          src="../assets/img/banners/SmartphonesBanner.png"
          alt="..."
        />
        <img
          src="../assets/img/banners/TabletsBanner.png"
          alt="..."
        />
        <img
          src="../assets/img/banners/SmartWatchesBanner.png"
          alt="..."
        />
        <img
          src="../assets/img/banners/LaptopsBanner.png"
          alt="..."
        />
        <img
          src="../assets/img/banners/HeadphonesBanner.png"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
