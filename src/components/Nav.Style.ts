import styled from "styled-components";

export const NavBox = styled.div`
  display: flex;
  background-color: black;
  padding: 15px;
  ul {
    justify-content: center;
    gap: 50px;
    display: flex;
    width: 100%;
    text-decoration: none;
    li {
      color: white;
      list-style: none;
    }
  }
`;
