import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
  }
`;
type Props = {
  backgroundImg: string;
};
export const HomeMainContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  align-items: center;
  padding-top: 50px;
  color: white;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  border-bottom: 10px solid rgb(50, 50, 50);
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
  p {
    display: inline;
  }
  &:hover {
    p {
      border-bottom: 1px solid white;
    }
  }
  span {
    &::after {
      content: ">";
      font-family: "Roboto", sans-serif;
      margin-left: 7px;
      color: #44d62c;
      font-weight: 300;
      font-size: 20px;
      padding-bottom: 50px;
    }
  }
`;
