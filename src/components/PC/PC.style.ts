import styled from "styled-components";

export const PCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const PCNavWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const PCNavStyledLink = styled.a`
  &:hover {
    color: green;
  }
`;
