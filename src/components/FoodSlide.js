import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import Img01 from "../assets/img/food01.jpg";
import Img02 from "../assets/img/food02.jpg";
import Img03 from "../assets/img/food03.jpg";
import Img04 from "../assets/img/food04.jpg";
import Img05 from "../assets/img/food05.jpg";
import Img06 from "../assets/img/food06.jpg";
import Img07 from "../assets/img/food07.jpg";

const Container = styled.div`
	padding-bottom: 50px;
	position: relative;
	button {
		background: none;
		border: none;
		position: absolute;
		top: 40%;
	}
`;

const Box = styled.div`
	overflow: hidden;
	img {
		&:hover {
			transition: transform 0.35s;
			transform: scale(1.2);
			-webkit-transform: scale(1.2);
		}
	}
`;

export default class FoodSlide extends Component {
	render() {
		const settings = {
			autoplay: true,
			arrows: false,
			dots: false,
			infinite: true,
			speed: 500,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<Container>
				<br />
				<Link to="/food">
					<h2> 추천 맛집</h2>
				</Link>

				<Slider {...settings}>
					<Box>
						<img src={Img01} alt="slide" />
					</Box>
					<Box>
						<img src={Img02} alt="slide" />
					</Box>
					<Box>
						<img src={Img03} alt="slide" />
					</Box>
					<Box>
						<img src={Img04} alt="slide" />
					</Box>
					<Box>
						<img src={Img05} alt="slide" />
					</Box>
					<Box>
						<img src={Img06} alt="slide" />
					</Box>
					<Box>
						<img src={Img07} alt="slide" />
					</Box>
				</Slider>
			</Container>
		);
	}
}
