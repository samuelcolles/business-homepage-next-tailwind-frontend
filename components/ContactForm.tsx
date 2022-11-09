import React from "react";
import { useState } from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {
	contactEmail: string;
}

const ContactForm: NextPage<Props> = ({ contactEmail }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [nameError, setNameError] = useState(true);
	const [emailError, setEmailError] = useState(true);
	const [messageError, setMessageError] = useState(true);


	async function handleOnSubmit(e: any) {
		e.preventDefault();
		setNameError(false);
		setEmailError(false);
		setMessageError(false);
		var passedChecks = true;
		if (name === "") {
			passedChecks = false;
			setNameError(true);
		}
		if (email === "") {
			passedChecks = false;
			setEmailError(true);
		}
		if (email === "") {
			passedChecks = false;
			setMessageError(true);
		}
		if (!passedChecks) return;

		const formData: any = {
			name,
			email,
			message,
			contactEmail,
		};

		console.log(formData);
		fetch("/api/mail", {
			method: "post",
			body: JSON.stringify(formData),
		});
	}

	return <div id="contact-form" className="flex flex-row justify-center px-4 xl:px-0 ">

		<div className="max-w-screen-xl w-full flex flex-col sm:flex-row mb-common gap-4 sm:px-0 px-4">
			<motion.div
				className="sm:w-1/2"
				initial={{ x: "-50%", opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ ease: "easeOut" }}
			>
				<h2 className="text-center sm:text-left text-6xl font-bold color text-teal-900 mb-common">Contact Us</h2>
				<p>Don't hesitate to reach out to us with the contact sheet, or by the following email address.</p>

			</motion.div>

			<motion.form
				method="post"
				onSubmit={handleOnSubmit}
				className="sm:w-1/2"
				initial={{ x: "50%", opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ ease: "easeOut" }}
			>
				<div className="flex flex-col mb-4">
					<div className="flex flex-row justify-between mb-2">
						<label htmlFor="name">Name:</label>
						{nameError ? <p>Please enter your name.</p> : <></>}
					</div>
					<input className="input-box" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
				</div>
				<div className="flex flex-col mb-4">
					<div className="flex flex-row justify-between mb-2" >
						<label htmlFor="email">Email:</label>
						{emailError ? <p>Please enter a valid email.</p> : <></>}
					</div>

					<input className="input-box" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="flex flex-col mb-4">
					<div className="flex flex-row justify-between mb-2">
						<label htmlFor="message">Message:</label>
						{messageError ? <p>Please enter a message.</p> : <></>}
					</div>

					<textarea className="input-box" name="message" value={message} onChange={e => setMessage(e.target.value)} />
				</div>

				<motion.button
					className="btn"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
				>
					Send
				</motion.button>



			</motion.form>
		</div >
	</div>
};

export default ContactForm;
