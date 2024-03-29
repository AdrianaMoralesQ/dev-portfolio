import React from "react";
import carma from "../../Public/carma.png";
import { Screenie, LinkWrapper } from "../../Public/Styled Components";

export default function Carma() {
	return (
		<div>
			<LinkWrapper>
				<a href="https://github.com/AdrianaMoralesQ/communauto-notification-system/tree/main/frontend">
					Github
				</a>
			</LinkWrapper>
			<Screenie src={carma} alt="Carma app screenshot" />
			<h4 className="stack">
				{" "}
				Stack: React, Typescript, Styled-Components, Vercel{" "}
			</h4>
			<div>
				<p>
					I built the front-end for this amazing app! It notifies users when a
					Comunauto becomes available in their selected radius.
				</p>
				<p>
					It's responsive to mobile devices and desktop adjusting the display
					based on screen size.
				</p>
				<p>
					UI design and colors were inspired by the Comunauto site but complying
					with accessibility parameters.{" "}
				</p>
			</div>
		</div>
	);
}
