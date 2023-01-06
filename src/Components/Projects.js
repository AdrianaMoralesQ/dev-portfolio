import { ProjectWrapper } from "../Public/Styled Components.js";
import ProjectSection from "./ProjectSection.js";
import Carma from "./Projects/Carma.js";
import Books from "./Projects/Books.js";
import EatThis from "./Projects/EatThis.js";
import Monstera from "./Projects/LinkMonstera.js";

const Projects = () => {
	return (
		<ProjectWrapper>
			<ProjectSection
				subtitle="Full Stack Developer"
				title="Link Monstera"
				type="Personal Project"
				element={<Monstera />}
			/>
			<ProjectSection
				subtitle="Full Stack Developer"
				title="Eat This"
				type="Personal Project"
				element={<EatThis />}
			/>
			<ProjectSection
				subtitle="Front End Developer"
				title="Carma - Find your Car"
				type="Scraper"
				element={<Carma />}
			/>
			<ProjectSection
				subtitle="Full Stack Developer"
				title="It's Books"
				type="Social Media"
				element={<Books />}
			/>
		</ProjectWrapper>
	);
};
export default Projects;
