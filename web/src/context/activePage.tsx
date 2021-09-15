import React, { createContext, useState, useEffect, useContext } from 'react';

// interface ActivePageProps {
//   active: 'home' | 'accounts' | 'transactions' | 'objectives' | 'categories';
// }

interface ActivePageContextData {
  setPage(page: string): void;
  activePage: string;
}

const ActivePageContext = createContext<ActivePageContextData>(
  {} as ActivePageContextData
);

export const ActivePageProvider: React.FC = ({ children }) => {
  const [activePage, setActivePage] = useState('home');

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

  return (
    <ActivePageContext.Provider value={{ setPage, activePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export function useActivePage() {
  const context = useContext(ActivePageContext);

  return context;
}
