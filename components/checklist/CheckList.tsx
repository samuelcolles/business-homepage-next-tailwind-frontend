import React, { useEffect } from "react";
import { NextPage } from "next";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, Variants } from "framer-motion";

interface Props {
  heading: string;
  icon: any;
  list: any[];
  id: string;
}

const animation: Variants = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut"
    }
  }
}


const CheckList: NextPage<Props> = ({ heading, icon, list, id }) => {
  return (
    <motion.div
      id={id}
      className="flex flex-col justify-center p-4"
      transition={{ staggerChildren: 0.2 }}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      {heading ?
        <motion.h1
          className="text-center heading mb-16"
          variants={animation}
        >
          {heading}
        </motion.h1>
        : <></>}

      <div className="flex justify-center">
        <div className="max-w-screen-xl grid md:grid-cols-3 grid-cols-1 w-full text-teal-800 gap-5">
          {list.map((item) =>
            <motion.div
              className="flex flex-row mb-2"
              key={item.id}
              variants={animation}
            >
              {icon.data ? <img src={process.env.STRAPI_BACKEND_URL + icon.data.attributes.url} height={42} width={42}></img> :
                <AiFillCheckCircle className="mr-3 flex-shrink-0" size={42} />
              }
              <div>
                {item.subheading ?
                  <div className="font-bold text-3xl">{item.subheading}</div>
                  : <></>
                }
                {item.text ?
                  <div className="text-2xl text-black">{item.text}</div>
                  : <></>
                }
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CheckList;
