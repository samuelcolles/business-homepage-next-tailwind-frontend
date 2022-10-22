const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req:any, res:any) => {
	const body = JSON.parse(req.body);

	const message = `
		Name:${body.name}\r\n
		Email:${body.email}\r\n
		Message:${body.message}
	`;

	const data = {
		to: body.contactEmail,
		from: 'samuelcolles@outlook.com',
		subject: 'New Web form message.',
		text: message,
	};

	mail.send(data);

	res.status(200).json({ status: "Ok" });
};
