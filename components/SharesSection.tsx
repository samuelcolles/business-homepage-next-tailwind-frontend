import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion';

interface Props {
	shares: any[];
}

const SharesSection: NextPage<Props> = ({ shares }) => {
	return (
		<div className='flex flex-row gap-4 sm:gap-8 justify-center mb-common'>
			{shares.map(item =>
				<motion.a
					href={item.url}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					key={"share" + item.id}
				>
					<img
						src={process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url}
						height={64}
						width={64}
						alt={item.label}
					/>
				</motion.a>
			)}
		</div>
	)
}

export default SharesSection