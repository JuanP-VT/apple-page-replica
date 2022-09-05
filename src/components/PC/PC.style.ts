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

export const PCHeader = styled.div`
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
    font-size: 18px;
    color: #999;
    font-weight: 300;
    max-width: 1000px;
    line-height: 28px;
    padding: 20px;
  }
`;
