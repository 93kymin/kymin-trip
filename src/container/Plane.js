import React from "react";
import styled from "styled-components";

function Plane() {
	return (
		<Container>
			<h2>전 세계 항공권 탐색!</h2>
			<br />
			<Grid>
				<form>
					<h3>출발지</h3>
					<select name="departure ">
						<option value="none"></option>
						<option value="none">=== 국내 ===</option>
						<option value="">서울</option>
						<option value="">부산</option>
						<option value="">제주</option>
						<option value="none">=== 해외 ===</option>
						<option value="">홍콩</option>
						<option value="">도쿄</option>
						<option value="">세부</option>
						<option value="">런던</option>
						<option value="">파리</option>
						<option value="">베를린</option>
						<option value="">프라하</option>
					</select>
				</form>
				<form>
					<h3>도착지</h3>
					<select name="arrival">
						<option value="none"></option>
						<option value="none">=== 국내 ===</option>
						<option value="">서울</option>
						<option value="">부산</option>
						<option value="">제주</option>
						<option value="none">=== 해외 ===</option>
						<option value="">홍콩</option>
						<option value="">도쿄</option>
						<option value="">세부</option>
						<option value="">런던</option>
						<option value="">파리</option>
						<option value="">베를린</option>
						<option value="">프라하</option>
					</select>
				</form>
				<form>
					<h3>가는날</h3>
					<input type="date" />
				</form>
				<form>
					<h3>오는날</h3>
					<input type="date" />
				</form>
				<button>항공권 검색</button>
			</Grid>
		</Container>
	);
}

export default Plane;

const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	padding-top: 20px;
	padding-bottom: 50px;
	text-align: center;
	font-size: 16px;
	select {
		background: #fff;
		border: 0;
		border-radius: 0;
		-webkit-appearance: none;
		box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.07);
		width: 150px;
		height: 40px;
	}
	input {
		margin-top: -0.5px;
		width: 150px;
		height: 40px;
		border: 0;
		border-radius: 0;
		-webkit-appearance: none;
		box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.07);
	}
	@media (max-width: 576px) {
		font-size: 14px;
		width: 100%;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(5, 1fr);
	border-radius: 0.8rem;
	box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.07);
	background-color: #ededed;
	padding: 10px;
	button {
		margin: 10px;
		border: 0;
		border-radius: 7px;
		background: #bebfc2;
		color: #fff;
		font-size: 16px;
		outline: none;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		button {
			margin-top: 20px;
			height: 60px;
			grid-column: 1/ 3;
			grid-row: 3/4;
		}
	}
`;
