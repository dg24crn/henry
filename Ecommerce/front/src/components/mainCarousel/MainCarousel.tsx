/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const MainCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://img.freepik.com/premium-photo/wide-abstract-banner-with-long-random-blue-color-colored-scales-bricks-3d-illustration_105589-1825.jpg"
          alt="Texto alternativo"
          className="w-full h-full object-cover"
        />
        <img
          src="https://img.freepik.com/premium-photo/wide-banner-with-many-random-square-hexagons-charcoal-dark-black-color_105589-1820.jpg"
          alt="Texto alternativo"
          className="w-full h-full object-cover"
        />

        <img
          src="https://previews.123rf.com/images/dutourdumonde/dutourdumonde2004/dutourdumonde200400019/145006097-grayscale-random-polygon-pattern-black-and-white-banner-background.jpg"
          alt="Texto alternativo"
          className="w-full h-full object-cover"
        />

        <img
          src="https://preview.redd.it/vcuwjyre3nr61.png?width=640&crop=smart&auto=webp&s=4afc1e8554549e2ec8b7abd3bfbf03401a03480e"
          alt="Texto alternativo"
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
