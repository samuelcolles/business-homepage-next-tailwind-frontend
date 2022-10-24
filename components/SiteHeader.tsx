import React from 'react'
import { NextPage } from "next";
import { motion, Variants } from "framer-motion";

interface Props {
	siteHeader: any;
}

const animation: Variants = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut",
			staggerChildren: 0.3,
			delayChildren: 0.3,
		}

	}

}


const SiteHeader: NextPage<Props> = ({ siteHeader }) => {
	return (
		<motion.div
			variants={animation}
			initial="hidden"
			animate="show"
			className='flex flex-col justify-center text-center h-[800px] bg-cover bg-center bg-blend-darken min-h-screen bg-opacity-60 bg-black'
			style={{ backgroundImage: `url(${process.env.STRAPI_BACKEND_URL + siteHeader.image.data.attributes.url})` }}
		>

			<motion.h1
				className='text-8xl font-bold text-white drop-shadow-lg'
				variants={animation}
			>
				{siteHeader.heading}
			</motion.h1>
			<motion.h2
				className='text-xl font-semibold text-gray-200 drop-shadow-lg'
				variants={animation}
			>
				{siteHeader.subheading}
			</motion.h2>

		</motion.div>
	)
}

export default SiteHeader