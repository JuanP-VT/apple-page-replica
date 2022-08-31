import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #111;
  height: 500px;
  display: flex;
  justify-content: center;
  .content {
    width: 70%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
  }
  .main {
    height: 90%;
    display: flex;
    position: relative;
  }
  .links {
    width: 80%;
    outline: 1px solid green;
    display: flex;
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  .forGamers {
    outline: 1px solid green;
    width: 20%;
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
  padding: 10px;
  font-size: 12px;
  span {
    color: #fff;
    cursor: pointer;
    margin-bottom: 20px;
    pointer-events: none;
    @media (max-width: 780px) {
      pointer-events: all;
    }
  }
  ul {
    list-style: none;
    display: ${(props) => (props.ListIsToggled ? "inline" : "none")};
    a {
      color: #999;
      display: block;
      text-decoration: none;
    }
  }
`;
