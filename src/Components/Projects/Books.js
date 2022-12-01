import React from "react";

export default function Books() {
	return (
		<>
			<h4 className="stack">
				{" "}
				React, Typescript, Styled-Components, MockAPI, MongoDB, Auth0, Figma
			</h4>
			<div>
				<p>Project planning was done on Figma.</p>
				<p> Mock users and book information was created with Mock API. </p>
				<p>Users could create an account and log in using Auth0. </p>
				<p>
					{" "}
					Logged in users can add books they want to read to their club, as well
					as vote and rate books.
				</p>
				<a href="https://github.com/AdrianaMoralesQ/its-books-project-final">
					{" "}
					Github
				</a>
			</div>
		</>
	);
}
