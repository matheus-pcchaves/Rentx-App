import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg'

import { 
  Container,
  Details, 
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './style';

interface carData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;  
}

interface Props {
   data: carData; 
}

export function Car({ data }: Props) {
  return (
    <Container>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{data.rent.price}</Price>
                </Rent>

                <Type>
                    <GasolineSvg/>
                </Type>
            </About>
        </Details>

        <CarImage 
          source={{ uri: data.thumbnail }}
          resizeMode='contain' 
        />
    </Container>
  );
}