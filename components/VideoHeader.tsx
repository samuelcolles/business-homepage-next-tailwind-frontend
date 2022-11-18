import React, { useState } from 'react'
import type { NextPage } from "next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
	src: string;
	thumbnail: any;
};
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
};

const VideoHeader: NextPage<Props> = ({ src, thumbnail }) => {
	const [showThumbnail, setShowThumbnail] = useState(true);
	return <div className='flex justify-center divider-common'>
		<div className='max-w-screen-common w-full mx-common'>
			{showThumbnail ?
				<motion.div
					variants={animation}
					initial="hidden"
					animate="show"
					onClick={() => setShowThumbnail(false)}
					className='w-full aspect-[16/9] bg-cover bg-center '
					style={{ backgroundImage: `url(${process.env.STRAPI_BACKEND_URL + thumbnail.data.attributes.url})` }}
				>
				</motion.div>
				: <iframe
					className='aspect-[16/9] w-full'
					src={src + "?autoplay=1"}
					title="YouTube video player"
					allowFullScreen
				/>
			}
		</div>
	</div>
};

export default VideoHeader;