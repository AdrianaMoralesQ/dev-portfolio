import React from "react";
import { SectionTitle, SectionWrapper } from "../Public/Styled Components.js";

export default function Section({ title, element, dark, id }) {
	return (
		<SectionWrapper className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<SectionTitle>{title}</SectionTitle>
				<div>{element}</div>
			</div>
		</SectionWrapper>
	);
}
