import React from "react";
import { NextPage } from "next";

interface Props {
  shares: any[];
  copyRight: string;
}

const Footer: NextPage<Props> = ({ shares, copyRight }) => {
  return (
    <div className="bg-teal-800 flex justify-center mt-auto">
      <div className="max-w-screen-xl bg-teal-400 w-full p-6 justify-between flex flex-row content-end">
        {copyRight ? <h1 className="text-lg">{copyRight}</h1> : <></>}

        <div className="gap-3 flex flex-row">
          {shares ? (
            shares.map(item => <p key={item.id}>{item.label}</p>)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
