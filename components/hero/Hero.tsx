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
  index: number;
}

const Hero: NextPage<Props> = ({
  heading,
  subHeading,
  text,
  button,
  photo,
  variant,
  index,
}) => {
  const isOdd = variant === Variant.primary || variant === Variant.tertiary
  return (
    <motion.div
      className={`flex gap-8 justify-start  bg-stripes-white ${isOdd
        ? "bg-primary-300/20 bg-stripes md:flex-row flex-col"
        : "bg-secondary-300/20 bg-stripes-reverse md:flex-row-reverse flex-col"
        }`}
      id={`hero-${index + 1}`}
      initial={isOdd ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ease: "easeOut" }}
    >
      {photo && photo.data ?
        <div className="md:w-5/12 w-full ">
          <img
            src={process.env.STRAPI_BACKEND_URL + photo.data.attributes.url}
            // className="sm:max-w-1/2 max-w-full w-full h-auto"
            width={"100%"}
            height={"auto"}
          />
        </div> : <></>
      }
      <div className="my-common flex flex-col md:w-5/12 w-full justify-center md:px-0 px-3">
        <h2
          className={`font-satisfy sub-heading mb-3 text-center md:text-left animated-text ${isOdd ? 'text-primary-800' : 'text-secondary-800'}`}
        >
          {heading}
        </h2>
        <h3 className="text-3xl mb-4  text-center md:text-left">{subHeading}</h3>
        <p className="text-lg text-tertiary-900">{text}</p>
        {button ?
          <motion.a
            href={button.url}
            className={`${isOdd ? "btn-primary" : "btn-secondary"} self-center mt-8`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {button.label}
          </motion.a> : <></>
        }
      </div>
    </motion.div>
  );
};

export default Hero;
