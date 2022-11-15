import React, { useState } from 'react'
import type { NextPage } from "next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
	src: string;
	thumbnail: any;
}
const animation: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			ease: "easeOut",
		}
	}
}

const VideoHeader: NextPage<Props> = ({ src, thumbnail }) => {
	const [showThumbnail, setShowThumbnail] = useState(true);
	return <>
		{
			showThumbnail ?
				<div
					onClick={() => setShowThumbnail(false)}
					className='w-full aspect-[16/9] bg-cover bg-center '
					style={{ backgroundImage: `url(${process.env.STRAPI_BACKEND_URL + thumbnail.data.attributes.url})` }}
				>
				</div> :
				<motion.iframe
					variants={animation}
					initial="hidden"
					animate="show"
					className='aspect-[16/9] w-full'
					src={src + "?autoplay=1"}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
					allowFullScreen
				/>

		}

	</>
}

export default VideoHeader