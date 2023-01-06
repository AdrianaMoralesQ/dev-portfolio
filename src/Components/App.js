import { render } from "react-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Section from "./Section";
import { Component } from "react";
import dummyText from "./DummyText";
import NavBar from "./NavBar";
import Skills from "./Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EatThisPage from "./ProjectPage/EatThis";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<header> Adriana Morales</header>
					<div className="App">
						<NavBar />
						<About id="About" />
						<Section
							title="My Skills"
							element={<Skills />}
							dark={true}
							id="Skills"
						/>
						<Section
							title="Projects"
							element={<Projects />}
							dark={true}
							id="Projects"
						/>
						<Section
							title="Contact"
							element={<Contact />}
							dark={true}
							id="Contact"
						/>
						<Routes>
							<Route path="/eatthis" element={<EatThisPage />}></Route>
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
// const App = () => {
// 	return (
// 		<BrowserRouter>
// 			<header> Adriana Morales</header>
// 			<NavBar />
// 			<Routes>
// 				<Route path="/" element={<About />}></Route>
// 				<Route path="/projects" element={<Projects />}></Route>
// 				<Route path="/contact" element={<Contact />}></Route>
// 			</Routes>
// 		</BrowserRouter>
// 	);
// };
render(<App />, document.getElementById("root"));
