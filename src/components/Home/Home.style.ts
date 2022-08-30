import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 1px solid green;
  height: 600px;
  align-items: center;
  padding-top: 50px;
  color: white;
  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .links {
    display: flex;
    gap: 70px;
  }
`;

export const ArrowLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  color: white;
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    content: " >";
    font-family: "Roboto", sans-serif;
    margin-left: 5px;
    color: #44d62c;
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 50px;
  }
`;
