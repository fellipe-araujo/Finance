import { useState, useEffect } from 'react';
import {
  LoadingContainer,
  Header,
  Title,
  LoaderBox,
  TextsBox,
  Text,
} from './styles';

import RingLoader from 'react-spinners/RingLoader';

import LogoFinance from '../../assets/Logo/Logo.svg';
import theme from '../../styles/theme';

interface Props {
  status: boolean;
}

const WelcomeApp = ({ status }: Props) => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);

  const welcomeMessages = () => {
    setTimeout(function () {
      setShowFirstMessage(false);
      setShowSecondMessage(true);
    }, 5000);

    setTimeout(function () {
      setShowSecondMessage(false);
      setShowThirdMessage(true);
    }, 10000);
  };

  useEffect(() => {
    welcomeMessages();
  }, []);

  return (
    <LoadingContainer>
      <Header>
        <img src={LogoFinance} alt="Finance" />
        <Title>FINANCE</Title>
      </Header>

      <TextsBox>
        {status && showFirstMessage ? (
          <Text>Bem-vindo(a) ao seu app favorito de finanças!</Text>
        ) : null}

        {status && showSecondMessage ? (
          <Text>Organize sua vida financeira de forma rápida e simples!</Text>
        ) : null}

        {status && showThirdMessage ? (
          <Text>Está quase lá! Estamos preparando tudo para você!</Text>
        ) : null}

        {status ? null : (
          <Text>Está quase lá! Estamos preparando tudo para você!</Text>
        )}
      </TextsBox>

      <LoaderBox>
        <RingLoader color={theme.colors.financeBlue} size={80} />
      </LoaderBox>
    </LoadingContainer>
  );
};

export default WelcomeApp;
