import React, { createContext, useState, useContext } from 'react';

interface ActivePageProps {
  active: 'home' | 'accounts' | 'transactions' | 'objectives' | 'categories';
}

interface ActivePageContextData {
  setPage(page: ActivePageProps): void;
  activePage: ActivePageProps;
}

const ActivePageContext = createContext<ActivePageContextData>(
  {} as ActivePageContextData
);

export const ActivePageProvider: React.FC = ({ children }) => {
  const [activePage, setActivePage] = useState<ActivePageProps>({
    active: 'home',
  });

  function setPage(page: ActivePageProps) {
    if (page.active === 'home') {
      setActivePage({ active: 'home' });
    } else if (page.active === 'accounts') {
      setActivePage({ active: 'accounts' });
    } else if (page.active === 'transactions') {
      setActivePage({ active: 'transactions' });
    } else if (page.active === 'objectives') {
      setActivePage({ active: 'objectives' });
    } else if (page.active === 'categories') {
      setActivePage({ active: 'categories' });
    }
  }

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
