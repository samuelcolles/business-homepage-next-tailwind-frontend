import React from 'react'
import type { NextPage } from "next";
import Hero, { Variant } from "./Hero";

interface Props {
	heroes: any[];
}

const HeroSection: NextPage<Props> = ({ heroes }) => {
	return (<div
		className='flex flex-col gap-12'
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
				id={0}
				heading={item.attributes.heading}
				subHeading={item.attributes.subHeading}
				text={item.attributes.text}
				photo={item.attributes.photo}
				button={item.attributes.button}
			/>
		))}
	</div>

	)
}

export default HeroSection