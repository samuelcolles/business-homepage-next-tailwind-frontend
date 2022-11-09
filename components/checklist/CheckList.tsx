import React from "react";
import { NextPage } from "next";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
			className="flex flex-col justify-center sm:px-4 px-0 mb-common"
			transition={{ staggerChildren: 0.1 }}
			initial="offScreen"
			whileInView="onScreen"
			viewport={{ once: true, amount: 0.3 }}
		>
			{heading ?
				<motion.h1
					className="text-center heading mb-common"
					variants={animation}
				>
					{heading}
				</motion.h1>
				: <></>
			}
			<div className="flex justify-center">
				<div className="max-w-screen-xl grid md:grid-cols-3 grid-cols-1 w-full text-teal-800 gap-5">
					{list.map((item) =>
						<motion.div
							className="flex flex-row mb-2"
							key={"listItem" + item.id}
							variants={animation}
						>
							{icon.data ? <img src={process.env.STRAPI_BACKEND_URL + icon.data.attributes.url} height={42} width={42}></img> :
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
