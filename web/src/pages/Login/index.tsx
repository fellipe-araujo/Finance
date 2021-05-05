import './styles.css';
import LogoFinance from '../../assets/LogoFinance.svg';
import InputAuthenticate from '../../components/InputAuthenticate';
import Button from '../../components/Button';

const Login = () => {
  return (
    <div className="login-container">
      <img className="login-logo" src={LogoFinance} alt="Logo Finance" />
      
      <div className="login-inputs-group">
        <InputAuthenticate title="Email" type="email" />
        <InputAuthenticate title="Senha" type="password" />

        <Button title="Entrar" />
      </div>
    </div>
  );
};

export default Login;
