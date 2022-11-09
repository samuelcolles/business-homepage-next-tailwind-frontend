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
			phoneNumber: string;
			email: string;
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
		<div className="flex justify-center">

			<motion.div
				id="employee-1"
				className="sm:px-0 px-3 max-w-screen-xl w-full"
				initial="offScreen"
				whileInView="onScreen"
				transition={{ staggerChildren: 0.2 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.h2
					className="text-teal-800 text-6xl text-center font-bold mb-common"
					variants={animation}
				>
					Who We Are
				</motion.h2>
				<div className="flex sm:flex-row flex-col w-full justify-around gap-8 mb-common">
					{employees.map(item => (
						<Employee
							key={"employee" + item.id}
							name={item.attributes.name}
							title={item.attributes.title}
							photo={item.attributes.photo}
							links={item.attributes.links}
							email={item.attributes.email}
							phoneNumber={item.attributes.phoneNumber}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default EmployeeSection;
