import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Props {
	shares: {
		share: any[];
		header: string;
	}
}
const animation: Variants = {
	offScreen: { y: 100, opacity: 0 },
	onScreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut"
		}
	}
}

const SharesSection: NextPage<Props> = ({ shares }) => {
	console.log(shares);
	return <motion.div
		className='py-common bg-stripes-white bg-stripes bg-quaternary-300/20'
		transition={{ staggerChildren: 0.1 }}
		initial="offScreen"
		whileInView="onScreen"
		viewport={{ once: true, amount: 0.3 }}
	>
		{shares.header && shares.header.length > 0 ?
			<motion.h1
				className='text-center heading font-satisfy mb-common text-quaternary-800'
				variants={animation}
			>
				{shares.header}</motion.h1>
			: <></>}
		<div className='flex flex-row gap-4 sm:gap-8 justify-center '>
			{shares.share.map(item =>
				<motion.a
					href={item.url}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					key={"share" + item.id}
					className="flex flex-col justify-center items-center text-center"
					variants={animation}
				>
					<div
						// src={process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url}
						className={`h-16 w-16 bg-quaternary-800`}
						style={{
							mask: `url(${process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url})`,
							maskRepeat: 'no-repeat'
						}}
					/>

					<h4 className='font-bold text-lg text-quaternary-900'>
						{item.label}
					</h4>
				</motion.a>
			)}
		</div>
	</motion.div>
}

export default SharesSection