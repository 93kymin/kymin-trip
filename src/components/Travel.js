import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 20px;
`;

const TabMenu = styled.div`
	input[type="radio"] {
		display: none;
	}
	input[type="radio"] + label {
		display: inline-block;
		line-height: 18px;
		padding: 10px 16px;
		margin: 0 8px 25px 8px;
		border: 1px solid #dadfe6;
		border-radius: 2px;
		cursor: pointer;
		text-align: center;
		&:hover {
			color: #287dfa;
			background-color: #e9f2fe;
		}
	}

	input[type="radio"]:checked + label {
		background-color: #e9f2fe;
		color: #287dfa;
	}
	.conbox {
		display: none;
	}
	input[id="tab01"]:checked ~ #con1 {
		display: grid;
	}
	input[id="tab02"]:checked ~ #con2 {
		display: grid;
	}
	input[id="tab03"]:checked ~ #con3 {
		display: grid;
	}
	input[id="tab04"]:checked ~ #con4 {
		display: grid;
	}
`;

const Box = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
	img {
		max-width: 400px;
		max-height: 265px;
		border-radius: 10px;
	}
`;

const Screen = styled.div`
	position: relative;
	overflow: hidden;
	.top {
		position: absolute;
		bottom: 150%;
		left: 30px;
		z-index: 2;
		color: #fff;
		font-size: 22px;
		font-weight: 900;
		transition: all 0.35s;
	}
	.bottom {
		position: absolute;
		top: 150%;
		left: 30px;
		z-index: 2;
		color: #fff;
		transition: all 0.35s;
	}
	img:hover {
		-webkit-filter: brightness(70%);
		transition: all 0.35s;
	}
	&:hover .top {
		bottom: 52%;
	}
	&:hover .bottom {
		top: 52%;
	}
`;

function Travel() {
	return (
		<Container>
			<h2>추천 여행지</h2>
			<TabMenu>
				<input type="radio" name="tabmenu" id="tab01" defaultChecked />
				<label for="tab01">유럽</label>
				<input type="radio" name="tabmenu" id="tab02" />
				<label for="tab02">아시아</label>
				<input type="radio" name="tabmenu" id="tab03" />
				<label for="tab03">미국</label>
				<input type="radio" name="tabmenu" id="tab04" />
				<label for="tab04">국내</label>

				<Box className="conbox" id="con1">
					<Screen>
						<div className="top">파리</div>
						<div className="bottom">Paris</div>
						<img src={require("../assets/img/paris.jpg")} alt="pairs" />
					</Screen>
					<Screen>
						<div className="top">런던</div>
						<div className="bottom">London</div>
						<img src={require("../assets/img/london.jpg")} alt="london" />
					</Screen>
					<Screen>
						<div className="top">프라하</div>
						<div className="bottom">Praha</div>
						<img src={require("../assets/img/praha.jpg")} alt="praha" />
					</Screen>
				</Box>

				<Box className="conbox" id="con2">
					<Screen>
						<div className="top">세부</div>
						<div className="bottom">Cebu</div>
						<img src={require("../assets/img/cebu.jpg")} alt="cebu" />
					</Screen>
					<Screen>
						<div className="top">방콕</div>
						<div className="bottom">Bangkok</div>
						<img src={require("../assets/img/bangkok.jpg")} alt="bangkok" />
					</Screen>
					<Screen>
						<div className="top">도쿄</div>
						<div className="bottom">Tokyo</div>
						<img src={require("../assets/img/tokyo3.jpg")} alt="tokyo" />
					</Screen>
				</Box>

				<Box className="conbox" id="con3">
					<Screen>
						<div className="top">뉴욕</div>
						<div className="bottom">Newyork</div>
						<img src={require("../assets/img/newyork2.jpg")} alt="newyork" />
					</Screen>
					<Screen>
						<div className="top">할리우드</div>
						<div className="bottom">La</div>
						<img src={require("../assets/img/la2.jpg")} alt="la" />
					</Screen>
					<Screen>
						<div className="top">샌프란시스코</div>
						<div className="bottom">Sanfrancisco</div>
						<img
							src={require("../assets/img/sanfrancisco.jpg")}
							alt="sanfrancisco"
						/>
					</Screen>
				</Box>

				<Box className="conbox" id="con4">
					<Screen>
						<div className="top">서울</div>
						<div className="bottom">Seoul</div>
						<img src={require("../assets/img/seoul2.jpg")} alt="seoul" />
					</Screen>
					<Screen>
						<div className="top">부산</div>
						<div className="bottom">Busan</div>
						<img src={require("../assets/img/busan.jpg")} alt="busan" />
					</Screen>
					<Screen>
						<div className="top">제주</div>
						<div className="bottom">Jeju</div>
						<img src={require("../assets/img/jeju2.jpg")} alt="jeju" />
					</Screen>
				</Box>
			</TabMenu>
		</Container>
	);
}

export default Travel;
