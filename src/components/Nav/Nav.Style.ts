import styled from "styled-components";
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
  border-bottom: 2px solid green;
  z-index: 10;
  #barsMenu {
    display: none;
  }
  #NavLinkList {
    display: flex;
    gap: 80px;
    cursor: pointer;
    p {
      color: #888;
      font-size: 15px;
      font-weight: 300;
      line-height: 19px;
      padding-top: 5px;
      white-space: nowrap;
      &:hover {
        color: white;
      }
    }
  }
  img {
    height: 90%;
    cursor: pointer;
  }
  svg {
    height: 40%;
    color: #888;
    padding-top: 5px;
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
