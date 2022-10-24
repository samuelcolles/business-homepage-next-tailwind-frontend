import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {
  shares: any[];
  copyRight: string;
}

const Footer: NextPage<Props> = ({ shares, copyRight }) => {
  return (
    <div className="px-4 xl:px-0 bg-teal-800 text-white flex justify-center mt-auto">
      <div className="max-w-screen-xl w-full sm:px-0 px-4 py-6 justify-between flex flex-row content-end">
        {copyRight ? <h1 className="text-lg">{copyRight}</h1> : <></>}

        <div className="gap-3 flex flex-row">
          {shares ?
            shares.map(item =>
              <motion.a
                href={item.url}
                key={item.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.a>
            ) : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
