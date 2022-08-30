import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;
type Props = {
  backgroundImg: string;
};
export const HomeMainContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 1px solid green;
  height: 600px;
  align-items: center;
  padding-top: 50px;
  color: white;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 300;
  }
  .links {
    display: flex;
    gap: 70px;
  }
`;
export const ArrowLinkStyle = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  color: white;
  position: relative;
  font-weight: 300;
  &:hover {
    border-bottom: 1px solid white;
  }
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
