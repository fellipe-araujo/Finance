import './styles.css';
import Logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header className="header-container">
      <img className="header-image" src={Logo} alt="Finance Logo" />
      <h1 className="header-user-name">Fellipe</h1>
    </header>
  );
};

export default Header;
