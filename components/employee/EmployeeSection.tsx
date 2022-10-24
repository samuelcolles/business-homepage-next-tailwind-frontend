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

const animation: Variants = {
	offScreen: { y: 100, opacity: 0 },
	onScreen: {
		y: 0,
		opacity: 1,
		transform: "easeOut"
	}
}

const EmployeeSection: NextPage<Props> = ({ employees }) => {
	return (
		<motion.div
			className="sm:px-0 px-3"
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeOut" }}
		>
			<h2 className="text-teal-800 text-6xl text-center font-bold my-24">
				Who We Are
			</h2>
			<div className="flex flex-row w-full justify-center gap-8 my-24">
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
