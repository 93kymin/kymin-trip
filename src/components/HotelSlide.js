import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Img01 from "../assets/img/hotel05.jpg";
import Img02 from "../assets/img/hotel06.jpg";
import Img03 from "../assets/img/hotel07.jpg";
import Img05 from "../assets/img/hotel09.jpg";
import Img06 from "../assets/img/hotel10.jpg";

const Container = styled.div``;

const Box = styled.div`
	overflow: hidden;
	@media (max-width: 576px) {
		img {
			height: 200px;
		}
	}
`;

export default class HotelSlide extends Component {
	render() {
		const settings = {
			autoplay: true,
			arrows: false,
			dots: false,
			infinite: true,
			speed: 500,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<Container>
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
						<img src={Img05} alt="slide" />
					</Box>
					<Box>
						<img src={Img06} alt="slide" />
					</Box>
				</Slider>
			</Container>
		);
	}
}
