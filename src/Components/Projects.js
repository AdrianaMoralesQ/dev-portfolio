import {
	Wrapper,
	Listed,
	SkillWrapper,
	SmallContentWrapper,
} from "../Public/Styled Components.js";

const Projects = () => {
	return (
		<Wrapper>
			<SkillWrapper>
				<div>
					<Listed>
						<h2>Front-end:</h2>
						<>
							<SmallContentWrapper>
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
								<p>
									UI design and colors were influenced by the Comunauto site.
								</p>
							</SmallContentWrapper>
						</>
					</Listed>
					<Listed>
						<h2>Full-Stack:</h2>{" "}
						<>
							<SmallContentWrapper>
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
								<p>
									UI design and colors were influenced by the Comunauto site.
								</p>
								<p>Branding was created by me </p>
								<p>On Github</p>
							</SmallContentWrapper>
							<SmallContentWrapper>
								<h3>In the Fridge</h3>
								<p> App for people trying to follow a balanced diet.</p>
								<p>
									{" "}
									It's responsive to mobile devices and desktop adjusting the
									display based on screen size.
								</p>
								<p>
									UI design and colors were influenced by the Comunauto site.
								</p>
							</SmallContentWrapper>
						</>
					</Listed>
				</div>
			</SkillWrapper>
		</Wrapper>
	);
};
export default Projects;
