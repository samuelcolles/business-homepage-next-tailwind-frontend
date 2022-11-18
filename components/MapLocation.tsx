import React from 'react'
import type { NextPage } from "next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
	mapLocation: {
		attributes: {
			src: string;
			header: string;
			address: string;
		};
	};
};

const animation: Variants = {
	offScreen: { y: 100, opacity: 0 },
	onScreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut"
		}
	}
};

const MapLocation: NextPage<Props> = ({ mapLocation: { attributes: { src, header, address } } }) => {
	return <motion.div
		id='map-location'
		className='pt-common text-center divider-common'
		variants={animation}
		transition={{ staggerChildren: 0.1 }}
		initial="offScreen"
		whileInView="onScreen"
		viewport={{ once: true, amount: 0.3 }}
	>
		{
			header || address ?
				<div className='flex justify-center mx-4'>

					<div className='container-common'>
						{header && header.length > 0 ?
							<h2 className='heading '>{header}</h2> : <></>
						}
						{address && address.length > 0 ?
							<h2 className='text-3xl font-semibold mt-6'>{address}</h2> : <></>
						}

					</div>
				</div>
				: <></>
		}
		{src && src.length > 0 ?
			<iframe
				className='w-full md:aspect-[16/7] aspect-square mt-common divider-common-top'
				src={src}
				loading="lazy"
			></iframe> : <></>
		}
	</motion.div>
};

export default MapLocation;