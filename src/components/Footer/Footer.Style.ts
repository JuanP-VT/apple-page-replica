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
  }
  .forGamers {
    outline: 1px solid green;
    width: 20%;
  }
  .legal {
    height: 10%;
  }
`;
