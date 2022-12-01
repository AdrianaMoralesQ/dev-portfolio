import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm, ContactWrapper } from "../Public/Styled Components";

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
					alert("📤 Message sent!");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<ContactWrapper>
			<ContactForm>
				<form ref={form} onSubmit={sendEmail}>
					<label>Name:</label>
					<input type="text" name="user_name" />
					<label>Email:</label>
					<input type="email" name="user_email" />
					<label>Message:</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</ContactForm>
			<div>
				<p>Prefer to send me an email?</p>
				<p>
					Reach out to <b>amorales25@gmail.com.</b>
				</p>
				<p>
					Or you can message me on{" "}
					<a href="https://www.linkedin.com/in/adriana-morales-quiones/">
						LinkedIn.
					</a>
				</p>
				<p>I look forward to connecting soon 🫶</p>
			</div>
		</ContactWrapper>
	);
};
export default Contact;
