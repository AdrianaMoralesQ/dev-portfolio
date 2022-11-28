import React from "react";
import { SectionTitle, SectionWrapper } from "../Public/Styled Components.js";

export default function Section({ title, element, subtitle, dark, id }) {
	return (
		<SectionWrapper className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<SectionTitle>{title}</SectionTitle>
				<span>{element}</span>
				<p>{subtitle}</p>
			</div>
		</SectionWrapper>
	);
}
