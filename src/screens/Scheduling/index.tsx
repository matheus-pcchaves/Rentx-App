import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import { 
  Container,
  Header, 
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme()  
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />  
      <Header>
        <BackButton 
          onPress={() => {}}
          color={theme.colors.shape}
        />

        <Title>
            Escolha uma {'\n'}
            data da inicio e {'\n'}
            fim do aluguel.
        </Title>

        <RentalPeriod>
            <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue selected={false}></DateValue>
            </DateInfo>        

            <ArrowSvg/>

            <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue selected={false}></DateValue>
            </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar/>
      </Content>

      <Footer>
        <Button
          title='Confirmar'
        />
      </Footer>
    </Container>
  );
}