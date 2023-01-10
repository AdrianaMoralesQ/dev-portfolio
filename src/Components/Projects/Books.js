import React from "react";
import books from "../../Public/books.png";
import { LinkWrapper, Screenie } from "../../Public/Styled Components";

export default function Books() {
	return (
		<>
			<LinkWrapper>
				<p className="link">
					<a href="https://github.com/AdrianaMoralesQ/its-books-project-final">
						{" "}
						Github
					</a>{" "}
				</p>
			</LinkWrapper>
			<Screenie src={books} alt="It's books app screenshot" />
			<h4 className="stack">
				Stack: React, Typescript, Styled-Components, MockAPI, MongoDB, Auth0
			</h4>
			<div>
				<p>
					Project planning was done on{" "}
					<a href="https://www.figma.com/file/ROzAItI2Q766g9OVauFKnM/It's-Books?node-id=1%3A3&t=jECA9cnad35ThZQE-3">
						Figma
					</a>
					.
				</p>
				<p> Mock users and book information was created with Mock API. </p>
				<p>Users could create an account and log in using Auth0. </p>
				<p>
					{" "}
					Logged in users can add books they want to read to their club, as well
					as vote and rate books.
				</p>
				<div className="side">
					{/* <p> - </p>
					<p>
						<a href="https://www.loom.com/share/da0537ab918f4ed1b1b7a8558c8a2310">
							{" "}
							Loom (5mins)
						</a> */}
					{/* </p> */}
				</div>
			</div>
		</>
	);
}
