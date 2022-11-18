import React from "react";
import type { NextPage } from "next";
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
			ease: "easeOut",
		},
	},
};

const ImageCardGrid: NextPage<Props> = ({ heading, subheading, cards }) => {
	return <motion.div
		className="py-common flex justify-center divider-common"
		transition={{ staggerChildren: 0.1 }}
		initial="offScreen"
		whileInView="onScreen"
		viewport={{ once: true }}
	>
		<div className="mx-4" >

			<motion.h2 className="heading container-common text-center" variants={animation}>
				{heading}
			</motion.h2>
			<motion.h3 className="text-3xl font-semibold" variants={animation}>
				{subheading}
			</motion.h3>
			<div className="flex justify-center text-left">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-screen-common w-full mt-common">
					{cards ? (
						cards.map((item, index) => (
							<motion.div
								className={`w-full ${index % 2 == 0 ? 'bg-primary-700' : 'bg-secondary-700'} p-4`}
								key={"image-card" + heading + item.id}
								variants={animation}
							>
								<div
									className="flex bg-cover bg-center w-full aspect-square "
									style={{
										backgroundImage: `url(${process.env.STRAPI_BACKEND_URL +
											item.image.data.attributes.url
											})`,
									}}
								/>
								<div className="flex flex-row justify-between">
									{item.heading ? (
										<h2 className="text-white text-3xl">{item.heading}</h2>
									) : (
										<></>
									)}
									{item.cost ? (
										<h3 className="text-white text-bold text-3xl rounded-md">
											{item.cost}
										</h3>
									) : (
										<></>
									)}
								</div>
								{item.text ? (
									<h3 className="text-gray-200 text-lg">{item.text}</h3>
								) : (
									<></>
								)}
							</motion.div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	</motion.div>
}

export default ImageCardGrid;
