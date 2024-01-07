"use client";

import { Picture } from "../components/assets/Image";

import { Text } from "../components/assets/Text";
import { FooterTexts } from "../utils/staticData";
import Link from "next/link";

import { ImFacebook } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  props = {
    ...props,
  };

  const linkCategories = [
    {
      title: FooterTexts.quickLinks.caption,
      links: FooterTexts.quickLinks.links,
    },
    { title: FooterTexts.more.caption, links: FooterTexts.more.links },
  ];

  const socialMediaIcons = [
    {
      icon: <ImFacebook size={15} color="currentColor" weight="fill" />,
      link: "/",
    },
    {
      icon: <RiInstagramFill size={15} color="currentColor" weight="fill" />,
      link: "/",
    },
    {
      icon: <BsTwitter size={15} color="currentColor" weight="fill" />,
      link: "/",
    },
  ];

  return (
    <footer className="flex w-full flex-col bg-white">
      <div className="max-width grid h-auto w-full gap-7 py-16 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-0">
        <div className="flex flex-col items-start gap-4">
          <Picture
            className="w-28"
            image="/images/logo.png"
            alt="Logo"
            as="a"
            href="/"
          />
          <Text className="text-color4 text-sm" as="p">
            {FooterTexts.underLogoText}
          </Text>
        </div>

        {/* Dynamic Link Categories */}
        {linkCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 md:mt-8 md:items-center"
          >
            <Text as="h2" className="text-color3 text-xl font-semibold  ">
              {category.title}
            </Text>
            <ul
              className={`flex flex-col ${index === 1 ? "md:ml-12" : ""} gap-2`}
            >
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-sm">
                  <Link
                    href={link.url}
                    className="text-color4 transition-all duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex w-full flex-col gap-4 md:mt-8 lg:items-center">
          <ul className="flex w-full items-center gap-4 lg:justify-center">
            {socialMediaIcons.map((socialMedia, index) => (
              <li key={index}>
                <Link
                  href={socialMedia.link}
                  className="text-color3 border-color3/50 from-color1 to-color2 flex rounded-full border-[1px] p-2.5 transition-all duration-300 ease-in hover:bg-gradient-to-tr hover:text-white"
                >
                  {socialMedia.icon}
                </Link>
              </li>
            ))}
          </ul>

          <Text as="p" className="text-color4 text-base font-light">
            Discover Our App
          </Text>
          <Picture
            image="/appdownload.png"
            className="w-28"
            alt="playStore"
            as="a"
            href="/"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
