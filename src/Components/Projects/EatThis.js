import React from "react";
import eatthis from "../../Public/eatthis.png";
import { Screenie } from "../../Public/Styled Components";

export default function Eat() {
	return (
		<>
			<Screenie src={eatthis} alt="Eat this app screenshot" />
			<h4 className="stack">
				{" "}
				Stack: React, Next.js, Airtable API, ThemeUI and Bootstrap
			</h4>
			<div>
				<p>This project is a work in progress.</p>
				<p> The app will track food portions and recipes for users. </p>
				<p>
					Data for food portions and recipes will be updated via the Airtable
					API to make updating it easy.{" "}
				</p>
				<a href="https://github.com/AdrianaMoralesQ/EatThisApp"> Github</a>
			</div>
		</>
	);
}
