import React from "react";
import { NextPage } from "next";
import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
  heading: string;
  icon: any;
  list: any[];
}

const CheckList: NextPage<Props> = ({ heading, icon, list }) => {
  return (
    <div className="flex flex-col justify-center p-3">
      {heading ? (
        <h1 className="text-center heading mb-16">
          {heading}
        </h1>
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="max-w-screen-xl grid md:grid-cols-3 grid-cols-1 w-full text-teal-800 gap-5">
          {list.map(item => (
            <div className="flex flex-row mb-2" key={item.id}>
              <AiFillCheckCircle className="mr-3 flex-shrink-0" size={42} />
              <div>
                {item.subheading ? (
                  <div className="font-bold text-3xl">{item.subheading}</div>
                ) : (
                  <></>
                )}
                {item.text ? (
                  <div className="text-2xl text-black">{item.text}</div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckList;
