import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarStyled = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 18px;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    display: inline-block;
    padding: 10px;
  }
  a {
    &:hover {
      color: #324294;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <nav>
        <ul>
          <li>
            <NavLink to="/">홈</NavLink>
          </li>
          <li>
            <NavLink to="/trip">여행</NavLink>
          </li>
          <li>
            <NavLink to="/plane">항공권</NavLink>
          </li>
          <li>
            <NavLink to="/hotel">호텔</NavLink>
          </li>
          <li>
            <NavLink to="/food">맛집</NavLink>
          </li>
        </ul>
      </nav>
    </SidebarStyled>
  );
};

export default Sidebar;
