import React from "react";
import { NextPage } from "next";
import EmployeeCard from "./EmployeeCard";

interface Props {
  employees: {
    id: number;
    attributes: {
      name: string;
      title: string;
      photo: any;
      links: any[];
    };
  }[];
}

const EmployeeHighlight: NextPage<Props> = ({ employees }) => {
  return (
    <div className="sm:p-0 p-3">
      <h2 className="text-teal-800 text-6xl text-center font-bold my-24">
        Who We Are
      </h2>
      <div className="flex flex-row w-full justify-center gap-8 my-24">
        {employees.map(item => (
          <EmployeeCard
            key="item.id"
            name={item.attributes.name}
            title={item.attributes.title}
            photo={item.attributes.photo}
            links={item.attributes.links}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeHighlight;
