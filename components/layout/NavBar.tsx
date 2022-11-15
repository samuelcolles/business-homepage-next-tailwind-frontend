import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion"

interface Props {
	businessName: string;
	navLinks: any[];
}

const NavBar: NextPage<Props> = ({ businessName, navLinks }) => {
	return (
		<div className="bg-primary-800 text-white flex justify-center w-full z-50">
			<div className="max-w-screen-xl w-full py-6 px-4 xl:px-0 justify-between flex md:flex-row flex-col content-end">
				<motion.h1 className="font-parisienne md:text-7xl text-5xl font-bold text-center">
					{businessName ? businessName : "Place Holder"}
				</motion.h1>
				<div className="flex flex-row gap-3 items-end text-lg font-semibold justify-center">
					{
						navLinks && navLinks.length != 0 ? navLinks.map((link, index) =>
							<motion.div
								key={"link" + index}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
							>
								<Link href={link.url} >{link.label}</Link>
							</motion.div>
						) : <></>
					}


				</div>
			</div>
		</div>
	);
};

export default NavBar;
