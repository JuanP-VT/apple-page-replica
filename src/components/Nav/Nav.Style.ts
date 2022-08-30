import styled from "styled-components";
type Props = {
  NavIsToggled: boolean;
};
export const NavBox = styled.div<Props>`
  display: flex;
  background-color: black;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
  padding: 10px;
  position: fixed;
  #barsMenu {
    display: none;
  }
  #NavLinkList {
    display: flex;
    gap: 40px;
    cursor: pointer;
    p {
      color: #888;
      font-family: razerf5thin;
      font-weight: 100;
      &:hover {
        color: white;
      }
    }
  }
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
      p {
        border-bottom: 1px solid grey;
        padding-bottom: 25px;
      }
    }
  }
`;
