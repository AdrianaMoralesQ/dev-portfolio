import React from "react";
import eatthis from "../../Public/eatthis.png";
import { Screenie } from "../../Public/Styled Components";

export default function Eat() {
	return (
		<>
			<Screenie src={eatthis} alt="Eat thisapp screenshot" />
			<h4 className="stack">
				{" "}
				React, Next.js, Airtable API, Figma, ThemeUI and Bootstrap
			</h4>
			<div>
				<p>Project planning was done on Figma.</p>
				<p> App tracks food portions and recipes for users </p>
				<p>Data for food portions and recipes is updated via Airtable API </p>
				<a href="https://github.com/AdrianaMoralesQ/its-books-project-final">
					{" "}
					Github
				</a>
			</div>
		</>
	);
}
