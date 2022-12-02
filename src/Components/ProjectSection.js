import React from "react";
import { SmallContentWrapper } from "../Public/Styled Components";

export default function ProjectSection({
	title,
	type,
	image,
	subtitle,
	element,
}) {
	return (
		<span>
			<SmallContentWrapper>
				<h3 class="title">{title}</h3>
				<h4 class="italics">{subtitle}</h4>
				<h5>{type}</h5>
				<div>{element}</div>
			</SmallContentWrapper>
		</span>
	);
}
