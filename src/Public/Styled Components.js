import styled from "styled-components";

export const AppWrapper = styled.div`
	background-color: #f1faee;
`;

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
	padding-left: 2.5rem;
`;

export const SectionWrapper = styled.div`
	margin-top: 1rem;
	height: 100vh;
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
	margin-left: 2vw;
	margin-bottom: 40vh;
	margin-top: 20vh;
`;

export const Wrapper = styled.div`
	background-color: #f1faee;
	padding: 0.5;
	color: #1d3557;
	margin-left: 2vw;
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
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: 6px;
	text-align: center;
	align-items: flex-start;
`;

export const Listed = styled.ul`
	display: flex;
	margin-left: 10vw;
`;
export const Profile = styled.img`
	width: 600px;
	border-radius: 6px;
`;

export const SkillWrapper = styled.div`
	display: flex;
	margin-bottom: 10vh;
`;
export const Description = styled.div`
	margin-left: 12vw;
`;
export const ContentWrapper = styled.div`
	width: 40vw;
	justify-content: space-around;
`;

export const SmallContentWrapper = styled.div`
	width: 30vw;
	justify-content: space-between;
	margin-top: 2rem;
`;
