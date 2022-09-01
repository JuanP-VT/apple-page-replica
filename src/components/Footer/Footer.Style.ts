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
