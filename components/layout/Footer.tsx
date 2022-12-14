import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {
	navLinks: any[];
	copyRight: string;
}

const Footer: NextPage<Props> = ({ copyRight, navLinks }) => {
	return <div className="bg-primary-800 text-white flex justify-center mt-auto">
		<div className="mx-4 max-w-screen-common w-full py-6 justify-between flex sm:flex-row flex-col-reverse content-end">
			{copyRight ? <h1 className="text-lg text-center sm:mt-0 mt-4">{copyRight}</h1> : <></>}
			<div className="gap-3 flex flex-row justify-center">
				{navLinks ?
					navLinks.map(item =>
						<motion.a
							href={item.url}
							key={"navLinks" + item.id}
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
};

export default Footer;