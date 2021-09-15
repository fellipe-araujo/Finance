import React, { useState, useEffect } from 'react';
import { Container, IconContainer, Title } from './styles';

import { useHistory } from 'react-router';
import {
  MdHome,
  MdCreditCard,
  MdFlag,
  MdExtension,
  MdTrendingUp,
} from 'react-icons/md';
import { subscribe } from 'on-screen-keyboard-detector';
import Emitter from 'emittery';

import { useActivePage } from '../../context/activePage';
import theme from '../../styles/theme';

const BottomBar = () => {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [homeColor, setHomeColor] = useState(theme.colors.white);
  const [accountColor, setAccountColor] = useState(theme.colors.white);
  const [transactionColor, setTransactionColor] = useState(theme.colors.white);
  const [objectiveColor, setObjectiveColor] = useState(theme.colors.white);
  const [categoryColor, setCategoryColor] = useState(theme.colors.white);

  const showBottomBar = () => {
    setKeyboardIsOpen(true);
  };

  const hiddenBottomBar = () => {
    setKeyboardIsOpen(false);
  };

  const emitter = new Emitter();
  subscribe((visibility) => emitter.emit(visibility));

  emitter.on('hidden', function () {
    hiddenBottomBar();
  });
  emitter.on('visible', function () {
    showBottomBar();
  });

  const history = useHistory();

  const { activePage, setPage, firstTimeOpenApp } = useActivePage();

  function saveCurrentPage(page: string) {
    sessionStorage.setItem('@Finance:current_page', page);
  }

  function handleSetPage(page: string) {
    setPage(page);
    if (page === 'home') {
      history.push('/');
    } else {
      history.push(`/${page}`);
    }

    saveCurrentPage(page);
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
      if (activePage === 'home') {
        setColorWhiteToAllPages();
        setHomeColor(theme.colors.financeBlue);
        return;
      } else if (activePage === 'accounts') {
        setColorWhiteToAllPages();
        setAccountColor(theme.colors.financeBlue);
        return;
      } else if (activePage === 'transactions') {
        setColorWhiteToAllPages();
        setTransactionColor(theme.colors.financeBlue);
        return;
      } else if (activePage === 'objectives') {
        setColorWhiteToAllPages();
        setObjectiveColor(theme.colors.financeBlue);
        return;
      } else if (activePage === 'categories') {
        setColorWhiteToAllPages();
        setCategoryColor(theme.colors.financeBlue);
        return;
      }
    }

    checkPage();
  }, [activePage]);

  return (
    <Container keyboardIsOpen={keyboardIsOpen} isLoading={firstTimeOpenApp}>
      <IconContainer onClick={() => handleSetPage('home')}>
        <MdHome size={25} color={homeColor} />
        <Title color={homeColor}>Home</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage('accounts')}>
        <MdCreditCard size={25} color={accountColor} />
        <Title color={accountColor}>Contas</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage('transactions')}>
        <MdTrendingUp size={25} color={transactionColor} />
        <Title color={transactionColor}>Transações</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage('objectives')}>
        <MdFlag size={25} color={objectiveColor} />
        <Title color={objectiveColor}>Objetivos</Title>
      </IconContainer>

      <IconContainer onClick={() => handleSetPage('categories')}>
        <MdExtension size={25} color={categoryColor} />
        <Title color={categoryColor}>Categorias</Title>
      </IconContainer>
    </Container>
  );
};

export default BottomBar;
