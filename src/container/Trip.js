import React from "react";
import styled from "styled-components";
import TripSlider from "../components/TripSlider";
import euro01 from "../assets/img/paris.jpg";
import euro02 from "../assets/img/london.jpg";
import euro03 from "../assets/img/praha.jpg";
import euro04 from "../assets/img/venice.jpg";

import asia01 from "../assets/img/asia01.jpg";
import asia02 from "../assets/img/asia02.jpg";
import asia03 from "../assets/img/asia03.jpg";
import asia04 from "../assets/img/asia04.jpg";

import usa01 from "../assets/img/newyork2.jpg";
import usa02 from "../assets/img/la2.jpg";
import usa03 from "../assets/img/sanfrancisco.jpg";
import usa04 from "../assets/img/brooklyn.jpg";

function Trip() {
	return (
		<Container>
			<h2>여행을 떠나요~</h2>
			<br />
			<h3>유럽!</h3>
			<Box>
				<div>
					<img src={euro01} alt="tripimg" />
					<h4>프랑스 파리</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={euro02} alt="tripimg" />
					<h4>영국 런던</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={euro03} alt="tripimg" />
					<h4>체코 프라하</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={euro04} alt="tripimg" />
					<h4>이탈리아 베니스</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
			</Box>

			<br />
			<br />
			<TripSlider />
			<br />

			<h3>아시아!</h3>
			<Box style={{ gridTemplateColumns: "1fr" }}>
				<div>
					<img src={asia01} alt="tripimg" />
					<h4>일본</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={asia02} alt="tripimg" />
					<h4>홍콩</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={asia03} alt="tripimg" />
					<h4>싱가포르</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={asia04} alt="tripimg" />
					<h4>베트남</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
			</Box>

			<br />
			<h3>미국!</h3>
			<Box>
				<div>
					<img src={usa01} alt="tripimg" />
					<h4>뉴욕</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={usa02} alt="tripimg" />
					<h4>할리우드</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={usa03} alt="tripimg" />
					<h4>샌프란시스코</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>

				<div>
					<img src={usa04} alt="tripimg" />
					<h4>브루클린</h4>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
			</Box>
			<br />
		</Container>
	);
}

export default Trip;

const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	padding-top: 20px;
	text-align: center;
	h3 {
		text-align: left;
		border-bottom: 1px solid #ccc;
		font-size: 18px;
	}
	@media (max-width: 768px) {
		width: 100%;
		h3 {
			font-size: 16px;
		}
	}
`;

const Box = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	text-align: left;
	h4 {
		margin: 0;
	}
	span {
		font-size: 12px;
	}
	p {
		text-align: right;
		margin: 0;
	}
	.fa-star {
		color: #feee7d;
	}
	@media (max-width: 576px) {
	}
`;
