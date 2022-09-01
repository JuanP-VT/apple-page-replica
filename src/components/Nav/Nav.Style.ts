import styled from "styled-components";
import { Link } from "react-router-dom";
type Props = {
  NavIsToggled: boolean;
};
export const NavBox = styled.div<Props>`
  display: flex;
  background-color: black;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
  padding: 10px;
  position: fixed;
  border-bottom: 2px solid #44d62c;
  z-index: 10;
  #barsMenu {
    display: none;
  }
  #NavLinkList {
    display: flex;
    gap: 80px;
    cursor: pointer;
  }
  img {
    height: 90%;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    #NavLinkList {
      gap: 35px;
    }
  }
  @media (max-width: 970px) {
    #barsMenu {
      display: inline;
      background-color: rgb(4, 4, 4);
    }
    #NavLinkList {
      position: absolute;
      top: 70px;
      flex-direction: column;
      width: 100%;
      background-color: rgb(0, 0, 0);
      justify-content: center;
      padding-top: 20px;
      display: ${(props) => (props.NavIsToggled ? "flex" : "none")};
      padding-left: 50px;
      a {
        border-bottom: 1px solid grey;
        padding-bottom: 25px;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #888;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  padding-top: 5px;
  white-space: nowrap;
  text-decoration: none;
  img {
    width: 35px;
    height: 35px;
  }
  &:hover {
    color: white;
  }
`;
