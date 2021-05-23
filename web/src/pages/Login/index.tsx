import { Container } from './styles';
import LogoFinance from '../../assets/LogoFinance.svg';
import InputAuthenticate from '../../components/InputAuthenticate';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <img className="login-logo" src={LogoFinance} alt="Logo Finance" />

      <div>
        <InputAuthenticate title="Email" type="email" />
        <InputAuthenticate title="Senha" type="password" />

        <Button title="Entrar" isCreate />
      </div>
    </Container>
  );
};

export default Login;
