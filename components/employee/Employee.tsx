import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { animation } from "./EmployeeSection";

interface Props {
  name: string;
  title: string;
  photo: any;
  links: any[];
  phoneNumber: string;
  email: string;
}

const Employee: NextPage<Props> = ({ name, title, photo, links, phoneNumber, email }) => {
  return (
    <motion.div
      className="flex flex-col text-center w-full "
      variants={animation}
    >

      {/* <img
          src={process.env.STRAPI_BACKEND_URL + photo.data.attributes.url}
          className="block w-full h-auto"
        /> */}
      <div
        className='h-96 max-w-[22rem] w-full bg-cover bg-center self-center '
        style={{ backgroundImage: `url(${process.env.STRAPI_BACKEND_URL + photo.data.attributes.url})` }}
      >

      </div>

      <h2 className="text-5xl text-teal-800 font-bold mt-8">{name}</h2>
      {email ? <h3 className="text-xl font-semibold">{email}</h3> : <></>}
      {phoneNumber ? <h3 className="text-xl font-semibold">{phoneNumber}</h3> : <></>}
      {title ? <h3 className="text-2xl font-semibold mt-2">{title}</h3> : <></>}
    </motion.div>
  );
};

export default Employee;
