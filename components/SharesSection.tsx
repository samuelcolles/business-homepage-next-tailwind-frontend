import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion';

interface Props {
	shares: {
		share: any[];
		header: string;
	}
}

const SharesSection: NextPage<Props> = ({ shares }) => {
	console.log(shares);
	return <div className='py-common bg-stripes-white bg-stripes bg-quaternary-300/20'>
		{shares.header && shares.header.length > 0 ?
			<h1 className='text-center heading font-satisfy mb-common text-quaternary-800'>{shares.header}</h1>
			: <></>}
		<div className='flex flex-row gap-4 sm:gap-8 justify-center '>
			{shares.share.map(item =>
				<motion.a
					href={item.url}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					key={"share" + item.id}
					className="flex flex-col justify-center items-center text-center"
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
	</div>
}

export default SharesSection