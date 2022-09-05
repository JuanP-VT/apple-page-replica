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
    &:hover {
      color: #44d62c;
    }
  }
`;
