import { useState } from "react";
import { Container, LogoContainer, LogoApp, LogoTitle } from "./styles";
import LogoFinance from "../../assets/Logo/Logo.svg";
import InputAuthenticate from "../../components/InputAuthenticate";
import Button from "../../components/Button";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn(email, password);
  };

  return (
    <Container>
      <LogoContainer>
        <LogoApp src={LogoFinance} alt="Logo Finance" />
        <LogoTitle>FINANCE</LogoTitle>
      </LogoContainer>

      <div>
        <InputAuthenticate
          title="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputAuthenticate
          title="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" isCreate onClick={handleLogin} />
      </div>
    </Container>
  );
};

export default Login;
