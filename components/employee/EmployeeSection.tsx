import React from "react";
import { NextPage } from "next";
import Employee from "./Employee";
import { motion, Variants } from "framer-motion";

interface Props {
	employees: {
		id: number;
		attributes: {
			name: string;
			title: string;
			photo: any;
			links: any[];
		};
	}[];
}

export const animation: Variants = {
	offScreen: { y: 100, opacity: 0 },
	onScreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut"
		}
	}
}

const EmployeeSection: NextPage<Props> = ({ employees }) => {
	return (
		<motion.div
			id="employee-1"
			className="sm:px-0 px-3"
			initial="offScreen"
			whileInView="onScreen"
			transition={{ staggerChildren: 0.2 }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.h2
				className="text-teal-800 text-6xl text-center font-bold my-24"
				variants={animation}
			>
				Who We Are
			</motion.h2>
			<div className="sm:flex grid-cols-1  flex-row w-full justify-center gap-8 my-24">
				{employees.map(item => (
					<Employee
						key={item.id}
						name={item.attributes.name}
						title={item.attributes.title}
						photo={item.attributes.photo}
						links={item.attributes.links}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default EmployeeSection;
