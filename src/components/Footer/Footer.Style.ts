import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #111;
  display: flex;
  justify-content: center;
  @media (max-width: 880px) {
    justify-content: space-between;
  }
  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
  .main {
    height: 90%;
    display: flex;
    position: relative;
    border-bottom: 1px solid rgb(50, 50, 50);
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  .links {
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  .forGamers {
    width: 40%;
    p {
      padding-left: 50px;
      color: #44d62c;
      font-weight: 400;
      text-align: end;
      font-size: 14px;
      letter-spacing: 1.5px;
      margin-top: 20px;
    }
    .icons {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      a {
        img {
          height: 30px;
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 780px) {
      .icons {
        justify-content: center;
      }
      p {
        padding-left: 0px;
      }
      margin-bottom: 30px;
    }
  }
  .legal {
    height: 10%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: 860px) {
      flex-direction: column;
      height: 80px;
    }
    @media screen and (max-width: 560px) {
      height: 200px;
      align-items: flex-start;
    }
    small {
      color: #999;
      display: inline;
      text-decoration: none;
      padding: 7px;
      font-size: 12px;
      white-space: nowrap;
      margin-right: 50px;
    }
    .anchor {
      display: flex;
      gap: 30px;
      a {
        p {
          &::after {
            content: "|";
            display: inline;
            margin-left: 30px;
            font-weight: 900;
            font-size: 14px;
          }
        }
      }
      @media screen and (max-width: 560px) {
        flex-direction: column;
        gap: 0;
        height: 100px;
        a {
          p {
            &::after {
              content: "";
            }
          }
        }
      }
    }
  }
`;

type FooterMenuProps = {
  ListIsToggled: boolean;
};
export const FooterMenuContainer = styled.div<FooterMenuProps>`
  display: flex;
  flex-direction: column;
  padding: 7px;
  margin-top: 5px;
  margin-bottom: 20px;
  span {
    color: #fff;
    cursor: pointer;
    pointer-events: none;
    padding: 10px;
    position: relative;
    &:hover {
      svg {
        color: #fff;
      }
    }
    svg {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      color: rgb(50, 50, 50);
    }
    .plusIcon {
      display: ${(props) => (props.ListIsToggled ? "none" : "inline")};
    }
    .minusIcon {
      display: ${(props) => (props.ListIsToggled ? "inline" : "none")};
    }
    //Switch to mobile Nav at 780px
    @media (max-width: 780px) {
      pointer-events: all;
      border-bottom: 1px solid grey;
      width: 92vw;
    }
  }
  ul {
    list-style: none;
    display: ${(props) => (props.ListIsToggled ? "inline" : "none")};
  }
`;

export const StyledFooterLink = styled.a`
  color: #999;
  display: block;
  text-decoration: none;
  padding: 7px;
  font-size: 12px;
  white-space: nowrap;
`;
