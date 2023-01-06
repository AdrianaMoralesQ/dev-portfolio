import React from "react";
import linkmonstera from "../../Public/linkmonstera.png";
import { Screenie } from "../../Public/Styled Components";

export default function Monstera() {
	return (
		<>
			<Screenie src={linkmonstera} alt="link monstera app screenshot" />
			<h4 className="stack">
				{" "}
				Stack: React, Next.js, Typescript, Supabase, Tailwind
			</h4>
			<div>
				<p> A Link Tree clone.</p>
				<p>
					I wanted to build a project that recreates Link Tree and allows users
					to store their important personal links to share with others.
				</p>
				<p>
					Objective: Learning to use Supabase as a database and Tailwind for
					styling.
				</p>
				<a href="https://github.com/AdrianaMoralesQ/link-monstera"> Github</a>
			</div>
			<div>
				<a href="https://link-monstera-rcwn.vercel.app/Adriana">
					{" "}
					Live - Hosted on Vercel
				</a>
			</div>
		</>
	);
}
