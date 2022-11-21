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
	return <div className="bg-primary-800 text-white flex justify-center w-full z-50 divider-common">
		<div className="max-w-screen-common w-full py-6 px-4 xl:px-0 justify-start flex md:flex-row flex-col content-end">
			<div className="flex flex-row mb-[-.75rem] justify-center">

				{logo && logo.data ?
					<div
						className='bg-secondary-700 xl:h-[4.5rem] xl:w-[4.5rem] lg:h-14 lg:w-14 md:h-11 md:w-11 sm:w-9 sm:h-9 w-7 h-7 mr-2 flex-shrink-0'
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
				<motion.h1 className="font-parisienne xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl break-keep font-bold text-center ">
					{businessName ? businessName : "Place Holder"}
				</motion.h1>
			</div>
			<div className="mt-4 flex flex-row gap-3 items-end text-lg font-semibold justify-center md:ml-auto ml-0">
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
