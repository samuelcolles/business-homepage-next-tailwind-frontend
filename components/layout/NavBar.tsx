import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion"

interface Props {
	businessName: string;
	navLinks: any[];
	logo: any;
};

const NavBar: NextPage<Props> = ({ businessName, navLinks, logo }) => {
	return <div className="bg-primary-800 text-white flex justify-center w-full z-50">
		<div className="max-w-screen-common w-full py-6 px-4 xl:px-0 justify-start flex md:flex-row flex-col content-end">
			<div className="flex flex-row mb-[-.75rem] justify-center">

				{logo && logo.data ?
					<div
						className='bg-secondary-700 md:h-14 md:w-14 w-9 h-9 mr-2 flex-shrink-0'
						style={{
							mask: `url(${process.env.STRAPI_BACKEND_URL + logo.data.attributes.url})`,
							WebkitMask: `url(${process.env.STRAPI_BACKEND_URL + logo.data.attributes.url})`,
							WebkitMaskRepeat: 'no-repeat',
							maskRepeat: 'no-repeat'
						}}
					/>
					: <></>
				}
				{

				}
				<motion.h1 className="font-parisienne md:text-7xl text-5xl font-bold text-center ">
					{businessName ? businessName : "Place Holder"}
				</motion.h1>
			</div>
			<div className="flex flex-row gap-3 items-end text-lg font-semibold justify-center md:ml-auto ml-0">
				{
					navLinks && navLinks.length != 0 ? navLinks.map((link, index) =>
						<motion.div
							key={"link" + index}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<Link href={link.url} >{link.label}</Link>
						</motion.div>
					)
						: <></>
				}
			</div>
		</div>
	</div>
};

export default NavBar;
