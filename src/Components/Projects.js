import {
	Wrapper,
	Intro,
	Description,
	Skill,
	Listed,
	Profile,
	SkillWrapper,
	ContentWrapper,
} from "../Public/Styled Components.js";

const Projects = () => {
	return (
		<Wrapper>
			<SkillWrapper>
				<div>
					<Listed>
						<h2>Front-end:</h2>
						<ContentWrapper>
							<h3>Carma - Find a Car</h3>
							<p>
								{" "}
								I built the front-end for this amazing app! It notifies users
								when a Comunauto becomes available in their selected radius.
							</p>
							<p>
								{" "}
								It's responsive to mobile devices and desktop adjusting the
								display based on screen size.
							</p>
							<p>UI design and colors were influenced by the Comunauto site.</p>
						</ContentWrapper>
					</Listed>
					<Listed>
						<h2>Full-Stack:</h2>
						<ContentWrapper>
							<h3>It's Books</h3>
							<p>
								{" "}
								I built the front-end for this amazing app! It notifies users
								when a Comunauto becomes available in their selected radius.
							</p>
							<p>
								{" "}
								It's responsive to mobile devices and desktop adjusting the
								display based on screen size.
							</p>
							<p>UI design and colors were influenced by the Comunauto site.</p>
							<p>Branding was created by me </p>
							<p>On Github</p>
						</ContentWrapper>
						<ContentWrapper>
							<h3>In the Fridge</h3>
							<p> App for people trying to follow a balanced diet.</p>
							<p>
								{" "}
								It's responsive to mobile devices and desktop adjusting the
								display based on screen size.
							</p>
							<p>UI design and colors were influenced by the Comunauto site.</p>
						</ContentWrapper>
					</Listed>
					<Listed>
						<h2>Full-Stack:</h2>
					</Listed>
					<Description>
						<h3> I like making things run smoothly</h3>
						<ContentWrapper>
							<p>
								I have an unconventional background. I've worked in a bunch of
								industries, ranging from legal translation, video-game QA and
								Localization Project Management. I recently pivoted to Full
								Stack Web development because I wanted to learn how to fix the
								software issues that plagued my roles in QA and Localization.
								Having worked with Devs, to report bugs - I understand the
								importance of asking follow-up questions, clear communication
								and user-friendly technology.
							</p>
						</ContentWrapper>
					</Description>
				</div>
			</SkillWrapper>
		</Wrapper>
	);
};
export default Projects;
