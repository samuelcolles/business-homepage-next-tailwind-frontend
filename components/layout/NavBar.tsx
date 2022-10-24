import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface Props {
  businessName: string;
}

const NavBar: NextPage<Props> = ({ businessName }) => {
  return (
    <div className="bg-teal-800 flex justify-center">
      <div className="max-w-screen-xl bg-teal-700 w-full py-6 justify-between flex flex-row content-end">
        <h1 className="text-7xl font-bold">
          {businessName ? businessName : "Place Holder"}
        </h1>
        <div className="flex flex-row gap-3 items-end">
          <a href="#check-list-1">Home</a>
          <Link href="#check-list-1" >Home</Link>
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
