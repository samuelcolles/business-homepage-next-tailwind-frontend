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

const CheckList: NextPage<Props> = ({ heading, icon, list, index }) => {
	return <motion.div
		id={"check-list-" + (index + 1).toString()}
		className="flex flex-col justify-center divider-common"
		transition={{ staggerChildren: 0.1 }}
		initial="offScreen"
		whileInView="onScreen"
		viewport={{ once: true, amount: 0.3 }}
	>

		<div className="flex justify-center">
			{/* <div className="flex flex-wrap justify-start flex-row max-w-screen-xl w-full gap-5 bg-white p-6 border-tertiary-50 border-4"> */}
			<div className="max-w-screen-xl w-full gap-5 border-4 container-common my-common mx-4">

				{heading ?
					<motion.h1
						className="text-center heading mb-12"
						variants={animation}
					>
						{heading}
					</motion.h1>
					: <></>
				}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-16">
					{list.map((item, index) =>
						<motion.div
							// className={`flex-1 flex flex-row mb-2 ${index % 2 === 1 ? 'text-primary-600' : 'text-secondary-600'}`}
							className='flex-1 flex flex-row mb-2 text-tertiary-800'
							key={"listItem" + item.id}
							variants={animation}
						>
							{item.icon.data ?
								<div
									className={`h-11 w-11 mr-2 flex-shrink-0 ${index % 2 === 1 ? 'bg-primary-700' : 'bg-secondary-700'}`}
									style={{
										mask: `url(${process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url})`,
										WebkitMask: `url(${process.env.STRAPI_BACKEND_URL + item.icon.data.attributes.url})`,
										WebkitMaskRepeat: 'no-repeat',
										maskRepeat: 'no-repeat'
									}}
								/>
								: icon.data ? <img src={process.env.STRAPI_BACKEND_URL + icon.data.attributes.url} height={42} width={42}></img>
									: <AiFillCheckCircle className="mr-3 flex-shrink-0" size={42} />
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
		</div>
	</motion.div>
};

export default CheckList;
