import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 24px;
  margin: 24px 0;
  justify-content: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: minmax(288px, 1fr);
    gap: 16px;
    margin: 16px 0;
  }
`;
