import styled from "styled-components";
type Props = {};
export const NavBox = styled.div`
  display: flex;
  background-color: black;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
  padding: 10px;
  position: fixed;

  img {
    height: 80%;
    cursor: pointer;
  }
  svg {
    height: 40%;
    color: #888;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;

export const NavLinkList = styled.div`
  display: flex;
  gap: 40px;
  cursor: pointer;
  p {
    color: #888;
    &:hover {
      color: white;
    }
  }
`;
