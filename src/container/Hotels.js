import React from "react";
import styled from "styled-components";
import HotelSlide from "../components/HotelSlide";
import Img01 from "../assets/img/hotel01.jpg";
import Img02 from "../assets/img/hotel02.jpg";
import Img03 from "../assets/img/hotel03.jpg";
import Img04 from "../assets/img/hotel04.jpg";
import Img05 from "../assets/img/hotel11.jpg";
import Img06 from "../assets/img/hotel12.jpg";
import Img07 from "../assets/img/hotel13.jpg";
import Img08 from "../assets/img/hotel14.jpg";
import Img09 from "../assets/img/hotel15.jpg";
import Img10 from "../assets/img/hotel16.jpg";

function Hotel() {
	return (
		<Container>
			<h2>호텔은 어디?</h2>
			<br />
			<h3>요즘 뜨는 지역</h3>
			<Box>
				<div>
					<img src={Img01} alt="hotel" />
					<h4>신라호텔</h4>
					<i className="fas fa-star">
						<span>4.8 / 후기 50개</span>
					</i>
					<p>68,900원</p>
				</div>

				<div>
					<img src={Img02} alt="hotel" />
					<h4>벨류호텔</h4>
					<i className="fas fa-star">
						<span>4.7 / 후기 70개</span>
					</i>
					<p>69,300원</p>
				</div>

				<div>
					<img src={Img03} alt="hotel" />
					<h4>마린호텔</h4>
					<i className="fas fa-star">
						<span>4.6 / 후기 140개</span>
					</i>
					<p>87,000원</p>
				</div>

				<div>
					<img src={Img04} alt="hotel" />
					<h4>오키드호텔</h4>
					<i className="fas fa-star">
						<span>4.6 / 후기 96개</span>
					</i>
					<p>78,900원</p>
				</div>
			</Box>
			<br />
			<br />
			<HotelSlide />
			<br />

			<h3>여름 여행 다 게획이 있구나</h3>
			<Box>
				<div>
					<img src={Img05} alt="hotel" />
					<h4>마리나 호텔</h4>
					<i className="fas fa-star">
						<span>4.5/ 후기 1250개</span>
					</i>
					<p>88,900원</p>
				</div>

				<div>
					<img src={Img06} alt="hotel" />
					<h4>에이본호텔</h4>
					<i className="fas fa-star">
						<span>4.7 / 후기 507개</span>
					</i>
					<p>70,560원</p>
				</div>

				<div>
					<img src={Img07} alt="hotel" />
					<h4>와이호텔</h4>
					<i className="fas fa-star">
						<span>4.3 / 후기 34개</span>
					</i>
					<p>90,000원</p>
				</div>

				<div>
					<img src={Img08} alt="hotel" />
					<h4>휘닉스호텔</h4>
					<i className="fas fa-star">
						<span>4.5 / 후기 204개</span>
					</i>
					<p>58,900원</p>
				</div>

				<div>
					<img src={Img09} alt="hotel" />
					<h4>샌트럴호텔</h4>
					<i className="fas fa-star">
						<span>4.6 / 후기 916개</span>
					</i>
					<p>88,000원</p>
				</div>

				<div>
					<img src={Img10} alt="hotel" />
					<h4>라마다호텔</h4>
					<i className="fas fa-star">
						<span>4.6 / 후기 796개</span>
					</i>
					<p>60,400원</p>
				</div>
			</Box>
			<br />
		</Container>
	);
}

export default Hotel;

const Container = styled.div`
	width: 60%;
	margin: 0 auto;
	padding-top: 20px;
	text-align: center;
	h3 {
		text-align: left;
		border-bottom: 1px solid #ccc;
	}
	@media (max-width: 768px) {
		width: 100%;
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
		font-size: 14px;
	}
	p {
		text-align: right;
		margin: 0;
	}
	.fa-star {
		color: #feee7d;
	}
	@media (max-width: 576px) {
		span {
			font-size: 12px;
		}
		.fa-star {
			font-size: 10px;
		}
	}
`;
