import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    div {
      &:nth-child(4) {
        display: none;
      }
    }
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    div {
      &:nth-child(3),
      :nth-child(4) {
        display: none;
      }
    }
  }
`;

function Ticket() {
  return (
    <Container>
      <h2>추천 항공권</h2>
      <Grid>
        <Card>
          <Link to="/plane">
            <h3>인천 -> 파리</h3>
            <p>6월 3일(목) ~ 6월 17일(일)</p>
            <p>최저가 803,276원</p>
          </Link>
        </Card>
        <Card>
          <Link to="/plane">
            <h3>인천 -> 런던</h3>
            <p>5월 1일(금) ~ 5월 21일(월)</p>
            <p>최저가 900,276원</p>
          </Link>
        </Card>
        <Card>
          <Link to="/plane">
            <h3>인천 -> 프라하</h3>
            <p>6월 3일(수) ~ 6월 19일(월)</p>
            <p>최저가 773,276원</p>
          </Link>
        </Card>
        <Card>
          <Link to="/plane">
            <h3>인천 -> 일본</h3>
            <p>6월 5일(토) ~ 6월 29일(월)</p>
            <p>최저가 403,276원</p>
          </Link>
        </Card>
      </Grid>
    </Container>
  );
}

export default Ticket;
