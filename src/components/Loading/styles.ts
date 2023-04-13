import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({theme}) => theme.colors.shape_dark};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.header 
}))``;