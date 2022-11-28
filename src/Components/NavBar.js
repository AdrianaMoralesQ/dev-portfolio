import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Nav, NavLink, NavMenu, Logo } from "../Public/Styled Components.js";
import logo from "../Public/logo.png";

export default class NavBar extends Component {
	render() {
		return (
			<Nav className="nav" id="navbar">
				<NavMenu className="nav-content">
					<Logo
						src={logo}
						className="nav-logo"
						alt="Logo"
						activeClass="active"
						to="About"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					/>
					<ul className="nav-items">
						<NavLink>
							<Link
								activeClass="active"
								to="Skills"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Skills
							</Link>
						</NavLink>
						<NavLink>
							{" "}
							<Link
								activeClass="active"
								to="Projects"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Projects
							</Link>
						</NavLink>
						<NavLink>
							{" "}
							<Link
								activeClass="active"
								to="Contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Contact
							</Link>
						</NavLink>
					</ul>
				</NavMenu>
			</Nav>
		);
	}
}
