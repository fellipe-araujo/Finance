import React, { createContext, useState, useEffect, useContext } from 'react';

interface ActivePageContextData {
  setPage(page: string): void;
  activePage: string;
  firstTimeOpenApp: boolean;
}

const ActivePageContext = createContext<ActivePageContextData>(
  {} as ActivePageContextData
);

export const ActivePageProvider: React.FC = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [firstTimeOpenApp, setFirstTimeOpenApp] = useState(false);

  function setPage(page: string) {
    if (page === 'home') {
      setActivePage('home');
    } else if (page === 'accounts') {
      setActivePage('accounts');
    } else if (page === 'transactions') {
      setActivePage('transactions');
    } else if (page === 'objectives') {
      setActivePage('objectives');
    } else if (page === 'categories') {
      setActivePage('categories');
    }
  }

  useEffect(() => {
    function fetchPage() {
      const response = sessionStorage.getItem('@Finance:current_page');

      if (response) {
        setActivePage(response);
      }
    }

    fetchPage();
  }, []);

  useEffect(() => {
    function fetchOpenApp() {
      const response = sessionStorage.getItem('@Finance:first_open');

      if (!response) {
        setFirstTimeOpenApp(true);
        setTimeout(function () {
          setFirstTimeOpenApp(false);
        }, 15000);
        sessionStorage.setItem('@Finance:first_open', 'true');
      }
    }

    fetchOpenApp();
  }, []);

  return (
    <ActivePageContext.Provider
      value={{ setPage, activePage, firstTimeOpenApp }}
    >
      {children}
    </ActivePageContext.Provider>
  );
};

export function useActivePage() {
  const context = useContext(ActivePageContext);

  return context;
}
