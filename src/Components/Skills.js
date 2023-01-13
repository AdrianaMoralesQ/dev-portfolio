import {
	Wrapper,
	Description,
	Skill,
	Listed,
	Profile,
	SkillWrapper,
	ContentWrapper,
} from "../Public/Styled Components.js";
import ProfilePic from "../Public/ProfilePic.png";

const Skills = () => {
	return (
		<Wrapper>
			<SkillWrapper>
				<Profile src={ProfilePic} alt="Profile Pic" />
				<div>
					<Listed>
						<h3>Front-end:</h3>
						<Skill>Javascript</Skill>
						<Skill>Typescript</Skill>
						<Skill>HTML</Skill>
						<Skill>CSS</Skill>
						<Skill>React</Skill>
						<Skill>Bootstrap</Skill>
						<Skill>Tailwind</Skill>
						<Skill>Context</Skill>
						<Skill>Next.js</Skill>
					</Listed>
					<Listed>
						<h3>Back-end:</h3>
						<Skill>Node.js</Skill>
						<Skill>MongoDB</Skill>
						<Skill>Airtable</Skill>
						<Skill>Supabase</Skill>
					</Listed>
					<Listed>
						<h3>Currently learning:</h3>
						<Skill>Firebase</Skill>
					</Listed>
					<div>
						<h3 className="title"> I like making things run smoothly</h3>

						<p>
							I have an unconventional background. I've worked in a bunch of
							industries, ranging from legal translation, video-game QA and
							Localization Project Management. I recently pivoted to Full Stack
							Web development because I wanted to learn how to fix the software
							issues that I struggled with during my roles in QA and
							Localization. Having worked with Devs to report bugs, I understand
							the importance of asking follow-up questions, clear communication
							and user-friendly technology.
						</p>
					</div>
				</div>
			</SkillWrapper>
		</Wrapper>
	);
};
export default Skills;
