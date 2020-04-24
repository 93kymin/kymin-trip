import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 2px 3px rgb(50, 50, 93, 0.11), 0 2px 4px rgba(0, 0, 0, 0.09);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  padding: 10px;
  &:hover {
    box-shadow: 10px 8px 10px rgb(50, 50, 93, 0.11);
  }
`;

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;
