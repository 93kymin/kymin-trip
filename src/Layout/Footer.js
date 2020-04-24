import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 120px;
  text-align: center;
`;

function Footer() {
  return (
    <Container>
      <p>Copyright © 1999-2020 Take a trip.com (Boracay) Limited. </p>
      <p>
        All rights reserved. Site Operator: Take a trip.com (Boracay) Limited.
      </p>
      <p>Boracay Travel License No. 7</p>
    </Container>
  );
}

export default Footer;
