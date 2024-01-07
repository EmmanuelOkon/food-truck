"use client";

import { Picture } from "../components/assets/Image";

import { HeroTexts } from "../utils/staticData";
import { Button } from "../components/assets/Button";

import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-width lg:h[100vh] md:h[550px] relative flex h-[830px] w-full justify-end overflow-x-hidden">
      <div className="absolute left-0 top-0 grid h-auto w-full bg-[#FFF1DA] px-5 pt-24 md:grid-cols-2 md:px-8 md:pt-32 lg:h-full lg:px-24 lg:pt-0 ">
        <div className="md:order1 order- flex max-w-lg flex-col justify-center gap-3 md:gap-6">
          <h1 className=" z[100] text-[50px] font-extrabold leading-none text-blue-950 sm:text-[64px] 2xl:text-[72px]">
            {HeroTexts.header}
          </h1>
          <p className="my-6 max-w-md text-[14px] text-[#5E6282] lg:tracking-wider">
            {HeroTexts.description}
          </p>
          <div className="flex w-full items-center justify-between gap-0 md:justify-start md:gap-6 lg:gap-12">
            <Button
              type="button"
              className="bg-color2 rounded-lg border-none px-5 py-3 font-extralight text-white outline-none hover:bg-orange-600 lg:px-7"
            >
              {HeroTexts.button}
            </Button>
          </div>
        </div>
        <div className="w1/2 justifycenter flex flex-col items-center justify-end">
          <div className="flex w-full items-start justify-end xl:flex-[1.5] ">
            <Picture
              image="/images/heroMockup.png"
              alt="heroMockup"
              className="py10 w-full  "
            />
            <Picture
              image="/images/heroImage.png"
              alt="heroImage"
              className="py10 w-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
