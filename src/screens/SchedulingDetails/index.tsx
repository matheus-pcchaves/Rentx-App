import React from 'react';
import { Feather } from '@expo/vector-icons';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { 
  Container, 
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name, 
  Rent,
  Period,
  Price,
  Acessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from './style';

import { ImageSlider } from '../../components/ImageSlider';
import { BackButton } from '../../components/BackButton';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SchedulingDetails() {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>
      
      <CarImages>
        <ImageSlider 
          imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracán</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$580,00</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380km/h" icon={speedSvg}/>
          <Acessory name="3.2s" icon={accelerationSvg}/>
          <Acessory name="800/hp" icon={forceSvg}/>
          <Acessory name="Gasolina" icon={gasolineSvg}/>
          <Acessory name="Auto" icon={exchangeSvg}/>
          <Acessory name="2 Pessoas" icon={peopleSvg}/>
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>  

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>580 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$2,900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}