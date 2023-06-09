import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { 
  Container, 
  Content,
  Title,
  Message, 
  Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();  
  return (
    <Container>
        <LogoSvg width={width}/>

        <Content>
            <DoneSvg width={80} height={80}/>
            <Title>Carro alugado</Title>

            <Message>
                Agora você só precisa ir {`\n`}
                a uma concessionária da RENTX {`\n`}
                pegar o seu automóvel.
            </Message>
        </Content>

        <Footer>
          <ConfirmButton title='Ok' />
        </Footer>
    </Container>
  );
}