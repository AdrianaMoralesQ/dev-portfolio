import React from "react";
import { SmallContentWrapper } from "../Public/Styled Components";

export default function ProjectSection({ title, type, subtitle, element }) {
	return (
		<SmallContentWrapper>
			<h4 class="italics">{subtitle}</h4>
			<h3 class="title">{title}</h3>
			<h5>{type}</h5>
			<div>{element}</div>
		</SmallContentWrapper>
	);
}
