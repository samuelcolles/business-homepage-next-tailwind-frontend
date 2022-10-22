import React from "react";
import { NextPage } from "next";
import EmployeeCard from "./EmployeeCard";
import { motion } from "framer-motion";

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

const EmployeeHighlight: NextPage<Props> = ({ employees }) => {
	return (
		<motion.div
			className="sm:p-0 p-3"
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeOut", staggerChildren: 0.3 }}
		>
			<motion.h2 className="text-teal-800 text-6xl text-center font-bold my-24"
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeOut" }}
			>
				Who We Are
			</motion.h2>
			<motion.div className="flex flex-row w-full justify-center gap-8 my-24"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 200 }}
				transition={{ ease: "easeOut" }}
			>
				{employees.map(item => (
					<EmployeeCard
						key={item.id}
						name={item.attributes.name}
						title={item.attributes.title}
						photo={item.attributes.photo}
						links={item.attributes.links}
					/>
				))}
			</motion.div>
		</motion.div>
	);
};

export default EmployeeHighlight;
