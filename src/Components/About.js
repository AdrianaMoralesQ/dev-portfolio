import {
	Intro,
	Title,
	Icons,
	Header,
	Paragraph,
	AboutWrapper,
} from "../Public/Styled Components.js";
import {
	AiFillLinkedin,
	AiOutlineGithub,
	AiFillTwitterCircle,
	AiFillMail,
} from "react-icons/ai";
import Emoji from "./Emoji";

const About = () => {
	return (
		<AboutWrapper>
			<Header>
				<Intro>
					<h1>Hi, I'm Adriana| </h1>
					<Title> Full Stack Developer</Title>
				</Intro>
				<Icons>
					<a
						className="button"
						href="https://www.linkedin.com/in/adriana-morales-quiones/"
					>
						<AiFillLinkedin className="icon" />
					</a>
					<a className="button" href="https://github.com/AdrianaMoralesQ">
						<AiOutlineGithub />
					</a>
					{/* <a className="button" href="https://twitter.com/AdrianaMorale26">
						<AiFillTwitterCircle />
					</a> */}
					<button
						onClick={() => {
							window.scrollTo({ top: 2900, left: 0, behavior: "smooth" });
						}}
					>
						<AiFillMail />
					</button>
				</Icons>
				<Paragraph>
					I'm a curious learner and a strong relationship-builder{" "}
					<Emoji symbol="👩‍🚀" label="woman astronaut" />
				</Paragraph>
				<Paragraph>
					I thrive in diverse teams and have a passion for coding{" "}
					<Emoji symbol="🦒" label="giraffe" />
					<Emoji symbol="🐘" label="elephant" />{" "}
					<Emoji symbol="🐊" label="crocodile" />
				</Paragraph>
				<Paragraph>
					I will devour <Emoji symbol=" 🍜 " label="ramen" />, I do CrossFit 🏋️‍♀️
					and love my snarky cat 🐈.
				</Paragraph>
			</Header>
		</AboutWrapper>
	);
};
export default About;
