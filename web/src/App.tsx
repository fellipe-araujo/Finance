import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { ActivePageProvider } from "./context/activePage";
import Routes from "./routes";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <ActivePageProvider>
            <Routes />
          </ActivePageProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
