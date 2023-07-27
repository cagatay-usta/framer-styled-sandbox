import styled from "styled-components";

export const StyledHeader = styled.header`
  font-weight: bold;
  font-size: 2rem;
  background-color: ${({theme}) => theme.colors.header};
  color: coral;
`;
