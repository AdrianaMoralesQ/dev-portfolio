import {
	Wrapper,
	Listed,
	SkillWrapper,
	SmallContentWrapper,
	ProjectWrapper,
} from "../Public/Styled Components.js";
import ProjectSection from "./ProjectSection.js";
import Carma from "./Projects/Carma.js";
import Books from "./Projects/Books.js";

const Projects = () => {
	return (
		<ProjectWrapper>
			<ProjectSection
				title="Carma - Find A Car"
				subtitle="Front End"
				type="Scraper"
				element={<Carma />}
			/>
			<ProjectSection
				title="It's Books"
				subtitle="Full Stack"
				type="Social Media"
				element={<Books />}
			/>
			<ProjectSection
				title="Carma - Find A Car"
				subtitle="Front End"
				type="Scraper"
				element={<Carma />}
			/>
		</ProjectWrapper>
	);
};
export default Projects;

// <Wrapper>
// 	<SkillWrapper>
// 		<div>
// 			<Listed>
// 				<h2>Front-end:</h2>
// 				<>
//
// 				</>
// 			</Listed>
// 			<Listed>
// 				<h2>Full-Stack:</h2>{" "}
// 				<>
// 					<SmallContentWrapper>
// 						<h3>It's Books</h3>
//
// 					</SmallContentWrapper>
// 					<SmallContentWrapper>
// 						<h3>In the Fridge</h3>
// 						<p> App for people trying to follow a balanced diet.</p>
// 						<p>
// 							{" "}
// 							It's responsive to mobile devices and desktop adjusting the
// 							display based on screen size.
// 						</p>
// 						<p>
// 							UI design and colors were influenced by the Comunauto site.
// 						</p>
// 					</SmallContentWrapper>
// 				</>
// 			</Listed>
// 		</div>
// 	</SkillWrapper>
// </Wrapper>
