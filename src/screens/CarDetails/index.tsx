import React from 'react';

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
  About,
  Acessories,
  Footer,
} from './style';

import { ImageSlider } from '../../components/ImageSlider';
import { BackButton } from '../../components/BackButton';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

export function CarDetails() {
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

        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de Lide.
          Indultado na praça real maestranza de Sevilla. É um belíssimo carro pra quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}