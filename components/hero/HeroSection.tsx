import React from 'react'
import type { NextPage } from "next";
import Hero, { Variant } from "./Hero";
import { motion } from "framer-motion";

interface Props {
	heroes: any[];
}

const HeroSection: NextPage<Props> = ({ heroes }) => {
	return (<motion.div
		className='flex flex-col gap-12'
		initial={{ opacity: 0 }}
		whileInView={{
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}

		}}
	>

		{heroes.map((item, index) => (
			<Hero
				key={item.id}
				variant={
					index === 0
						? Variant.primary
						: index % 2 === 1
							? Variant.secondary
							: Variant.tertiary
				}
				heading={item.attributes.heading}
				subHeading={item.attributes.subHeading}
				text={item.attributes.text}
				photo={item.attributes.photo}
				button={item.attributes.button}
			/>
		))}
	</motion.div>

	)
}

export default HeroSection