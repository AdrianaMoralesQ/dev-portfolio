import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm } from "../Public/Styled Components";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_t9hf4ql",
				"Dev_Website",
				form.current,
				"FXTH_s_6BnvFAo-6T"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Message sent!");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<ContactForm>
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</ContactForm>
	);
};
export default Contact;
