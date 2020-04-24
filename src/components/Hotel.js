import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
	@media (max-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Box = styled.div`
	text-align: left;
	.fa-star {
		color: #4a65f6;
	}
	img {
		&:hover {
			-webkit-filter: brightness(80%);
		}
	}
`;

const HotelList = styled.form`
	padding: 20px 0;
	button {
		background: #fff;
		cursor: pointer;
		display: inline-block;
		line-height: 18px;
		padding: 8px 16px;
		margin-right: 16px;
		margin-bottom: 16px;
		border: 1px solid #dadfe6;
		border-radius: 2px;
		color: #0f294d;
		&:hover,
		:active {
			color: #287dfa;
			background-color: #e9f2fe;
		}
	}
`;

function Hotel() {
	return (
		<Container>
			<HotelList>
				<h2>추천 호텔</h2>
				<Link to="/Hotel">
					<button>부산</button>
				</Link>
				<Link to="/Hotel">
					<button>제주</button>
				</Link>
				<Link to="/Hotel">
					<button>홍콩</button>
				</Link>
				<Link to="/Hotel">
					<button>도쿄</button>
				</Link>
				<Link to="/Hotel">
					<button>오사카</button>
				</Link>
				<Link to="/Hotel">
					<button>보라카이</button>
				</Link>
			</HotelList>
			<Grid>
				<Box>
					<img src={require("../assets/img/hotel01.jpg")} alt="hotel" />
					<h3>호텔1</h3>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</Box>
				<Box>
					<img src={require("../assets/img/hotel02.jpg")} alt="hotel" />
					<h3>호텔2</h3>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</Box>
				<Box>
					<img src={require("../assets/img/hotel03.jpg")} alt="hotel" />
					<h3>호텔3</h3>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</Box>
				<Box>
					<img src={require("../assets/img/hotel04.jpg")} alt="hotel" />
					<h3>호텔4</h3>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</Box>
			</Grid>
		</Container>
	);
}

export default Hotel;
