import React from 'react'
import type { NextPage } from "next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
	videoHeaderSRC: string;
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

const VideoHeader: NextPage<Props> = ({ videoHeaderSRC }) => {
	return <motion.iframe
		variants={animation}
		initial="hidden"
		animate="show"
		className='aspect-[16/9] w-full'
		src={videoHeaderSRC}
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
		allowFullScreen
	>
	</motion.iframe>
}

export default VideoHeader