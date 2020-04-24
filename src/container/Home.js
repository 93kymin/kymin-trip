import React from "react";
import styled from "styled-components";
import Travel from "../components/Travel";
import Ticket from "../components/Ticket";
import Hotel from "../components/Hotel";
import FoodSlide from "../components/FoodSlide";
import Footer from "../Layout/Footer";

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	@media (max-width: 768px) {
		width: 95%;
	}
`;

function Home(props) {
	return (
		<div>
			<Container>
				<Travel />
				<br />
				<Ticket />
				<br />
				<Hotel />
				<br />
				<FoodSlide />
				<br />
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
