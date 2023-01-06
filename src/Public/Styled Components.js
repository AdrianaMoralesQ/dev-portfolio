import styled from "styled-components";

export const Logo = styled.img`
	height: 60px;
	width: 60px;
	cursor: pointer;
`;
export const Nav = styled.nav`
	position: sticky;
	top: 0px;
	width: 100%;
	height: 80px;
	z-index: 1000;
	background-color: #1d3557;
`;

export const NavMenu = styled.div`
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	background-color: #1d3557;
`;

export const NavLink = styled.li`
	display: inline;
	margin-left: 2rem;
	color: #f1faee;
	cursor: pointer;
	&:hover {
		color: #a8dadc;
		text-decoration: underline 0.25rem;
	}
`;

export const Paragraph = styled.h4`
	color: #f1faee;
`;

export const SectionTitle = styled.h1`
	color: #1d3557;
	padding-top: 2rem;
	/* padding-left: 2.5rem; */
`;

export const SectionWrapper = styled.div`
	/* margin: 1rem 30%;
	min-height: 100vh;
	max-width: 1000px; */
	max-width: 1100px;
	margin: auto;
`;

export const AboutWrapper = styled.div`
	background-color: #1d3557;
	margin: 0px;
	padding: 20px;
	margin-bottom: 5vh;
`;

export const Header = styled.div`
	background-color: #1d3557;
	padding: 0.5;
	color: #f1faee;
	/* margin-left: 2vw; */
	/* margin-bottom: 40vh;
	margin-top: 20vh; */
	margin: 20vh auto 40vh;
	max-width: 1100px;
`;

export const Intro = styled.div`
	display: flex;
`;

export const Title = styled.h1`
	text-decoration: underline #e63946 0.25rem;
`;
export const Icons = styled.div`
	width: 10rem;
	padding: 0.25rem;
	display: flex;
	justify-content: space-between;
	align-content: center;
`;
export const Skill = styled.li`
	background-color: #e63946;
	width: 5.5rem;
	height: 2rem;
	list-style: none;
	padding: 0.25rem;
	margin: 0.25rem;
	border-radius: 6px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Listed = styled.ul`
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`;
export const Profile = styled.img`
	object-fit: contain;
	border-radius: 6px;
`;

export const SkillWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	@media screen and (min-width: 769px) {
		height: 100vh;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	background-color: #f1faee;
	padding: 0.5;
	color: #1d3557;
`;
export const ContentWrapper = styled.div`
	justify-content: space-around;
`;

export const SmallContentWrapper = styled.div`
	margin: 10px;
	@media screen and (max-width: 500px) {
		width: 70%;
	}
`;

export const ProjectWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	// tablet
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	// laptop
	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const ContactForm = styled.div`
	width: 400px;
	height: 600px;
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		margin: 2rem;
		width: 100%;
		font-size: 19px;
		color: #1d3557;
		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}
		textarea {
			max-width: 100%;
			min-width: 100%;
			width: 100%;
			max-height: 200px;
			min-height: 200px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}
		label {
			margin-top: 1rem;
		}
		input[type="submit"] {
			margin-top: 2rem;
			cursor: pointer;
			background: #e63946;
			color: white;
			border: none;
			font-size: 16px;
		}
	}
`;
export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	font-size: 19px;
`;

export const Screenie = styled.img`
	max-width: 350px;
	cursor: pointer;
	border-radius: 10px;
`;
