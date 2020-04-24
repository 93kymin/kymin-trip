import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	font-size: 20px;
	height: 70px;
	.fa-plane {
		color: #4a65f6;
	}
	.fa-user-circle {
		position: absolute;
		top: 5px;
		right: 10px;
	}
`;

function Header() {
	return (
		<Container>
			<i className="fas fa-plane"></i>
			<span>Take a Trip</span>
			<Link to="/LoginPage">
				<i className="fas fa-user-circle fa-lg"></i>
			</Link>
		</Container>
	);
}

export default Header;
