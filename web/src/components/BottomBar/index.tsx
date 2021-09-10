import React, { useState, useEffect } from 'react';
import { Container, IconContainer, Title } from './styles';

import { useHistory } from 'react-router'
import { MdHome, MdCreditCard, MdFlag, MdExtension } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { useActivePage } from '../../context/activePage';
import theme from '../../styles/theme';

interface ActivePageProps {
  active: 'home' | 'accounts' | 'transactions' | 'objectives' | 'categories';
}

const BottomBar = () => {
  const [homeColor, setHomeColor] = useState(theme.colors.white);
  const [accountColor, setAccountColor] = useState(theme.colors.white);
  const [transactionColor, setTransactionColor] = useState(theme.colors.white);
  const [objectiveColor, setObjectiveColor] = useState(theme.colors.white);
  const [categoryColor, setCategoryColor] = useState(theme.colors.white);

  const history = useHistory();

  const { activePage, setPage } = useActivePage();

  function handleSetPage(page: ActivePageProps) {
    setPage(page);
    if (page.active === 'home') {
      history.push('/');
    } else {
      history.push(`/${page.active}`)
    }
  }

  function setColorWhiteToAllPages() {
    setHomeColor(theme.colors.white);
    setAccountColor(theme.colors.white);
    setTransactionColor(theme.colors.white);
    setObjectiveColor(theme.colors.white);
    setCategoryColor(theme.colors.white);
  }

  useEffect(() => {
    function checkPage() {
      if (activePage.active === 'home') {
        setColorWhiteToAllPages();
        setHomeColor(theme.colors.financeBlue);
        return;
      } else if (activePage.active === 'accounts') {
        setColorWhiteToAllPages();
        setAccountColor(theme.colors.financeBlue);
        return;
      } else if (activePage.active === 'transactions') {
        setColorWhiteToAllPages();
        setTransactionColor(theme.colors.financeBlue);
        return;
      } else if (activePage.active === 'objectives') {
        setColorWhiteToAllPages();
        setObjectiveColor(theme.colors.financeBlue);
        return;
      } else if (activePage.active === 'categories') {
        setColorWhiteToAllPages();
        setCategoryColor(theme.colors.financeBlue);
        return;
      }
    }

    checkPage();
  }, [activePage.active]);

  return (
    <Container>
      <IconContainer onClick={() => handleSetPage({ active: 'home' })}>
        <MdHome size={30} color={homeColor} />
        <Title color={homeColor}>Home</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage({ active: 'accounts' })}>
        <MdCreditCard size={30} color={accountColor} />
        <Title color={accountColor}>Contas</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage({ active: 'transactions' })}>
        <FiPlus size={30} color={transactionColor} />
        <Title color={transactionColor}>Transações</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage({ active: 'objectives' })}>
        <MdFlag size={30} color={objectiveColor} />
        <Title color={objectiveColor}>Objetivos</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage({ active: 'categories' })}>
        <MdExtension size={30} color={categoryColor} />
        <Title color={categoryColor}>Categorias</Title>
      </IconContainer>

    </Container>
  );
};

export default BottomBar;
