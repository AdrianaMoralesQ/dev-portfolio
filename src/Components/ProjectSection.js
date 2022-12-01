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
				<h3>{title}</h3>
				<h5>{type}</h5>
				<h4>{subtitle}</h4>
				<div>{element}</div>
			</SmallContentWrapper>
		</span>
	);
}
