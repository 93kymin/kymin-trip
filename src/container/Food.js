import React from "react";
import styled from "styled-components";
import Img01 from "../assets/img/food01.jpg";
import Img02 from "../assets/img/food02.jpg";
import Img04 from "../assets/img/food04.jpg";
import Img05 from "../assets/img/food05.jpg";
import Img06 from "../assets/img/food06.jpg";

const Body = styled.div`
	padding-top: 20px;
	background: #f5f7fa;
	width: 100%;
	height: 1400px;
	@media (max-width: 576px) {
		height: 900px;
	}
`;

const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	h2 {
		text-align: center;
	}
	@media (max-width: 576px) {
		width: 95%;
	}
`;

const Card = styled.div`
	box-shadow: 0 2px 3px rgb(50, 50, 93, 0.11), 0 2px 4px rgba(0, 0, 0, 0.09);
	border: 1px solid rgba(0, 0, 0, 0.125);
	background: #fff;
	height: 220px;
	padding: 10px;
	&:hover {
		border: 2px solid rgba(0, 0, 0, 0.125);
		box-shadow: 10px 8px 10px rgb(50, 50, 93, 0.11);
	}
	img {
		float: left;
		padding: 0;
		width: 40%;
		margin-right: 10px;
	}
	p {
		text-align: left;
	}
	h4 {
		text-align: right;
	}
	@media (max-width: 576px) {
		height: 120px;
		img {
			width: 49%;
		}
	}
`;

function Food() {
	return (
		<Body>
			<Container>
				<h2>맛집 소개</h2>
				<Card>
					<img src={Img01} alt="food" />
					<h3>도쿄</h3>
					<p>회전초밥</p>
					<h4>가격 12,000원</h4>
				</Card>
				<Card>
					<img src={Img02} alt="food" />
					<h3>La</h3>
					<p>치즈 폭탄 버거</p>
					<h4>가격 8,900원</h4>
				</Card>
				<Card>
					<img src={Img04} alt="food" />
					<h3>세부</h3>
					<p>닭꼬지</p>
					<h4>가격 5,900원</h4>
				</Card>
				<Card>
					<img src={Img05} alt="food" />
					<h3>파리</h3>
					<p>크림파스타</p>
					<h4>가격 11,500원</h4>
				</Card>
				<Card>
					<img src={Img06} alt="food" />
					<h3>밀라노</h3>
					<p>피자</p>
					<h4>가격 28,700원</h4>
				</Card>
			</Container>
		</Body>
	);
}

export default Food;
