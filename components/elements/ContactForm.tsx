import React from "react";
import { useState } from "react";
import { NextPage } from "next";

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

	return (
		<div className="flex flex-row justify-center ">

			<div className="max-w-screen-xl w-full flex flex-col sm:flex-row mb-24 gap-4 px-4">
				<div className="sm:w-1/2">
					<h2 className="text-center sm:text-left text-6xl font-bold color text-teal-900 mb-16">Contact Us</h2>
					<p>Don't hesitate to reach out to us with the contact sheet, or by the following email address.</p>

				</div>

				<form method="post" onSubmit={handleOnSubmit} className="sm:w-1/2" >
					<p className="flex flex-col mb-4">
						<div className="flex flex-row justify-between mb-2">
							<label htmlFor="name">Name:</label>
							{nameError ? <p>Please enter your name.</p> : <></>}
						</div>
						<input className="input-box" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
					</p>
					<p className="flex flex-col mb-4">
						<div className="flex flex-row justify-between mb-2" >
							<label htmlFor="email">Email:</label>
							{emailError ? <p>Please enter a valid email.</p> : <></>}
						</div>

						<input className="input-box" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
					</p>
					<p className="flex flex-col mb-4">
						<div className="flex flex-row justify-between mb-2">
							<label htmlFor="message">Message:</label>
							{messageError ? <p>Please enter a message.</p> : <></>}
						</div>

						<textarea className="input-box" name="message" value={message} onChange={e => setMessage(e.target.value)} />
					</p>

					<button className="btn">Send</button>



				</form>
			</div >
		</div>
	);
};

export default ContactForm;
