import styled from "styled-components";

export const PCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const PCNavWrapper = styled.div`
  display: flex;
  gap: 35px;
  background-color: #1a1a1a;
  padding: 20px;
  justify-content: center;
`;
export const PCMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`;
export const PCNavStyledLink = styled.a`
  text-decoration: none;
  p {
    color: #ffff;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    &:hover {
      color: #44d62c;
    }
  }
`;

export const PCHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  .title {
    padding-top: 30px;
    font-size: 36px;
    font-weight: 200;
    color: #44d62c;
    padding-bottom: 5px;
    margin-bottom: 8px;
    text-align: center;
    max-width: 1000px;
  }
  .content {
    font-size: 19px;
    color: #999;
    font-weight: 300;
    max-width: 1000px;
    line-height: 28px;
    padding: 20px;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  max-width: 400px;
  border-bottom: 2px solid #44d62c;
  background-color: #111;
  @media (max-width: 600px) {
    min-width: 100%;
  }
  .top {
    height: 80%;
    img {
      width: 100%;
    }
  }
  .bot {
    height: 20%;
    padding: 10px;
    .title {
      font-size: 18px;
      line-height: 22px;
      color: #f4f4f4;
      margin-bottom: 10px;
    }
    .description {
      font-size: 14px;
      line-height: 22px;
      color: #888;
      margin-bottom: 20px;
    }
  }
`;

export const StyledGridLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #44d62c;
  font-weight: 300;
  margin-bottom: 20px;
  &::after {
    content: " > ";
  }
`;
