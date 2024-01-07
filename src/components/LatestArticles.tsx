"use client";

import { useCallback, useRef } from "react";
import { TopDestinationTexts } from "../utils/staticData";
import Slider from "react-slick";
import Card from "../components/assets/Card";
import LatestOne from "../../public/images/latestImageOne.png";
import LatestTwo from "../../public/images/latestImageOne.png";
import LatestThree from "../../public/images/latestImageOne.png";
import LatestFour from "../../public/images/latestImageOne.png";
import LatestFive from "../../public/images/latestImageOne.png";
import LatestSix from "../../public/images/latestImageOne.png";
import { Button } from "../components/assets/Button";
import { LuPlane } from "react-icons/lu";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const LatestArticles = () => {
  const sliderRef = useRef<Slider | null>();

  // Function for next button
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  // function for previous button
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const renderCities = useCallback((element: number): string | undefined => {
    switch (element) {
      case 0:
        return LatestOne.src as string;
      case 1:
        return LatestTwo.src as string;
      case 2:
        return LatestThree.src as string;
      case 3:
        return LatestFour.src as string;
      case 4:
        return LatestFive.src as string;
      case 5:
        return LatestSix.src as string;
      default:
        return "";
    }
  }, []);

  return (
    <>
      <div className="max-width w-full h-auto flex flex-col items-center justify-center relative lg:px24 md:px20 px6 my-20">
        <p className="font-semibold text-base text-color3/80 tracking-widest">
          {TopDestinationTexts.firstText}
        </p>
        <h2 className="md:text-4xl text-2xl font-medium capitalize text-color3">
          {TopDestinationTexts.secondText}
        </h2>

        {/* Controllers  */}
        <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
          <Button
            onClick={previous}
            className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
            type="button"
          >
            <BsCaretLeftFill size={18} color="currentColor" weight="fill" />
          </Button>
          <Button
            onClick={next}
            className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
            type="button"
          >
            <BsCaretRightFill size={18} color="currentColor" weight="fill" />
          </Button>
        </div>

        {/* Slides  */}
        <div className="w-full h-auto mt-4 ">
          <Slider
            ref={(slider: Slider) => (sliderRef.current = slider)}
            {...settings}
            className="w[800px] "
          >
            {TopDestinationTexts.cards.map((card, index) => (
              <div key={index} className="md:px-6 px-3 ">
                <Card
                  cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group  "
                  imageAlt={card.country}
                  imageSrc={renderCities(index)}
                  imageWrapperClass="w-full w-[250px] h-[250px] overflow-hidden"
                  cover="group-hover:scale-125 transition duration-500 ease"
                  textWrapperClass="flex flex-col gap-4 w-full w[300px] px-5 py-5  "
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-base font-medium text-color3">
                      {card.country}
                    </h4>
                    <span className=" text-color3 font-light text-sm">
                      {card.price}
                    </span>
                  </div>
                  <div className="w-full flex gap-4 items-center text-color3">
                    <LuPlane size={20} color="currentColor" weight="fill" />
                    <p className=" text-color3 font-light text-base">
                      {card.duration}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
