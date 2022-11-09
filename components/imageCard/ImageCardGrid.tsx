import React from 'react'
import type { NextPage } from 'next'
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
	heading: string;
	subheading: string;
	cards: any[];
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

const ImageCardGrid: NextPage<Props> = ({
	heading,
	subheading,
	cards
}) => {
	return <motion.div
		className='text-center mb-common'
		transition={{ staggerChildren: 0.1 }}
		initial="offScreen"
		whileInView="onScreen"
		viewport={{ once: true, amount: 0.3 }}
	>
		<motion.h2
			className='heading'
			variants={animation}
		>
			{heading}
		</motion.h2>
		<motion.h3
			className='text-3xl font-semibold'
			variants={animation}
		>
			{subheading}
		</motion.h3>
		<div className='flex justify-center text-left'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-screen-xl w-full mt-common'>
				{cards ? cards.map(item =>
					<motion.div
						className='w-full bg-teal-800 p-2 rounded-md'
						key={"image-card" + heading + item.id}

						variants={animation}

					>
						< div
							className='flex bg-cover bg-center w-full aspect-square rounded-md'
							style={{ backgroundImage: `url(${process.env.STRAPI_BACKEND_URL + item.image.data.attributes.url})` }}
						/>
						<div className='flex flex-row justify-between'>
							{item.heading ? <h2 className='text-white text-3xl' >
								{item.heading}

							</h2> : <></>}
							{item.cost ? <h3 className='text-white text-3xl rounded-md'>
								{item.cost}
							</h3> : <></>}
						</div>
						{item.text ? <h3 className='text-gray-400'>
							{item.text}
						</h3> : <></>}
					</motion.div>
				) : <></>}
			</div>
		</div>
	</motion.div>
}

export default ImageCardGrid