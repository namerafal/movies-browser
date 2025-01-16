import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 56px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 24px 16px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;
