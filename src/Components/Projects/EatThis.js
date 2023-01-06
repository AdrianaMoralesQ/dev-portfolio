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
				<p> The app provides a list of ingredients for cooking and recipes.</p>
				<p>
					Data for ingredients and recipes is stored in Airtable to make
					updating them simple.{" "}
				</p>
				<p>
					Objective: Using Airtable API as a database, using ThemesUI and
					Bootstrap for styling.
				</p>
				<a href="https://github.com/AdrianaMoralesQ/EatThisApp"> Github</a>
			</div>
			<div>
				<a href="https://eat-this-app.vercel.app/"> Live - Hosted on Vercel</a>
			</div>
		</>
	);
}
