import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { animation } from "./EmployeeSection";

interface Props {
  name: string;
  title: string;
  photo: any;
  links: any[];
}

const Employee: NextPage<Props> = ({ name, title, photo, links }) => {
  return (
    <motion.div
      className="text-center"
      variants={animation}
    >
      <div className="w-xl w-full">
        <img
          src={process.env.STRAPI_BACKEND_URL + photo.data.attributes.url}
          className="block w-full h-auto"
        />
      </div>
      <h2 className="text-5xl text-teal-800 font-bold mt-10">{name}</h2>
      {title ? <h3 className="text-2xl font-semibold mt-6">{title}</h3> : <></>}
    </motion.div>
  );
};

export default Employee;
