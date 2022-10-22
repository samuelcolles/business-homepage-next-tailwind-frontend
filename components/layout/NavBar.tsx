import React from "react";
import { NextPage } from "next";

interface Props {
  businessName: string;
}

const NavBar: NextPage<Props> = ({ businessName }) => {
  return (
    <div className="bg-teal-800 flex justify-center">
      <div className="max-w-screen-xl bg-teal-400 w-full p-6 justify-between flex flex-row content-end">
        <h1 className="text-3xl">
          {businessName ? businessName : "Place Holder"}
        </h1>
        <div className="flex flex-row gap-3 content-end justify-end">
          <p>Home</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
