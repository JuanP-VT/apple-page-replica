import styled from "styled-components";

export const NavBox = styled.div`
  display: flex;
  background-color: black;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 60px;
  padding: 10px;
  div {
    display: flex;
    gap: 40px;
    p {
      color: #888;
    }
  }
  img {
    height: 80%;
  }
  svg {
    height: 40%;
    color: #888;
  }
`;
