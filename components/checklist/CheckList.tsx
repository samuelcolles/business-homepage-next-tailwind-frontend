import React from "react";
import { NextPage } from "next";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import tailwind from "../../tailwind.config";

interface Props {
	heading: string;
	icon: any;
	list: any[];
	index: number;
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


const CheckList: NextPage<Props> = ({ heading, icon, list, index }) => {
	return (
		<motion.div
			id={"check-list-" + (index + 1).toString()}
			className="flex flex-col justify-center xl:px-0 px-4 mb-common"
			transition={{ staggerChildren: 0.1 }}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: 0.3 }}
		>
			{heading ?
				<motion.h1
					className="text-center heading mb-common text-primary-800 mt-common"
					variants={animation}
				>
					{heading}
				</motion.h1>
				: <></>
			}
			<div className="flex justify-center">
				<div className="max-w-screen-xl grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-full gap-5">
					{list.map((item, index) =>
						<motion.div
							className={`font- flex flex-row mb-2 ${index % 2 === 1 ? 'text-primary' : 'text-secondary'}`}
							key={"listItem" + item.id}
							variants={animation}
						>
							{item.icon.data ?
								<div
									// src={process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url}
									className={`h-11 w-11 mr-2 ${index % 2 === 1 ? 'bg-primary' : 'bg-secondary'}`}
									style={{
										mask: `url(${process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url})`,
										maskRepeat: 'no-repeat'
									}}

								/> :
								icon.data ? <img src={process.env.STRAPI_BACKEND_URL + icon.data.attributes.url} height={42} width={42}></img> :
									<AiFillCheckCircle className="mr-3 flex-shrink-0" size={42} />
							}
							<div>
								{item.subheading ?
									<div className="font-bold text-3xl">{item.subheading}</div>
									: <></>
								}
								{item.text ?
									<div className="text-2xl text-black">{item.text}</div>
									: <></>
								}
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default CheckList;
