import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {
	heading: string;
	subHeading: string;
	text: string;
	button: {
		label: string;
		url: string;
	};
	photo: any;
	variant: Variant;
	index: number;
};

export enum Variant {
	primary = 0,
	secondary,
	tertiary,
};

const Hero: NextPage<Props> = ({
	heading,
	subHeading,
	text,
	button,
	photo,
	variant,
	index,
}) => {
	const isOdd = variant === Variant.primary || variant === Variant.tertiary;
	return <motion.div

		className={`flex divider-common ${isOdd ? "justify-start" : "justify-end"}`}
		id={`hero-${index + 1}`}
		initial={isOdd ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ ease: "easeOut" }}
	>

		<div className={`w-full flex max-w-screen-common md:mx-0 mx-4 mt-4 md:mt-0 ${isOdd
			? "md:flex-row flex-col"
			: "md:flex-row-reverse flex-col "
			}`} >

			{photo && photo.data ?
				<div
					className="flex bg-cover bg-center w-full aspect-square "
					style={{
						backgroundImage: `url(${process.env.STRAPI_BACKEND_URL +
							photo.data.attributes.url
							})`,
					}}
				/>
				: <></>
			}
			<div className='my-common flex flex-col container-common w-full md:mx-4'>
				<h2 className={'sub-heading mb-3 text-center md:text-left'}>
					{heading}
				</h2>
				<h3 className="text-3xl mb-4 text-center md:text-left">
					{subHeading}
				</h3>
				<p className="text-lg text-tertiary-900">{text}</p>
				{button ?
					<motion.a
						href={button.url}
						className="btn-common self-center mt-8"
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						{button.label}
					</motion.a> : <></>
				}
			</div>
		</div>
	</motion.div>
};

export default Hero;
