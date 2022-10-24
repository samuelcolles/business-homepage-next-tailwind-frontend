import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";


export enum Variant {
  primary = 0,
  secondary,
  tertiary,
}
interface Props {
  heading: string;
  subHeading: string;
  text: string;
  button: {
    label: string;
    url: string;
  };
  photo: any;
  variant: Variant;
}

const Hero: NextPage<Props> = ({
  heading,
  subHeading,
  text,
  button,
  photo,
  variant,
}) => {

  const isOdd = variant === Variant.primary || variant === Variant.tertiary
  return (
    <motion.div
      className={`flex gap-8 justify-start  ${isOdd
        ? "md:flex-row flex-col"
        : "md:flex-row-reverse flex-col"
        }`}

      initial={isOdd ? { x: "100%", opacity: 0 } : { x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
    >
      {photo ? (
        <div className="md:max-w-1/2 max-w-full">
          <img
            src={process.env.STRAPI_BACKEND_URL + photo.data.attributes.url}
            className="block w-full h-auto"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col md:w-1/2 w-full justify-center md:p-0 p-3">
        <h2 className="sub-heading mb-3 text-center md:text-left">{heading}</h2>
        <h3 className="text-3xl mb-4  text-center md:text-left">{subHeading}</h3>
        <p className="text-lg">{text}</p>
        {button ? (
          <a
            href={button.url}
            className="btn self-center my-8"
          >
            {button.label}
          </a>
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
