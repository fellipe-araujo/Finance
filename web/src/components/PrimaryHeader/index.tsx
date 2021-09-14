import { Container, Content, Title, LinkNewAccount } from "./styles";
import { FiPlus } from "react-icons/fi";
import theme from "../../styles/theme";

interface PrimaryHeaderProps {
  title: string;
  goTo: string;
}

const PrimaryHeader = ({ title, goTo }: PrimaryHeaderProps) => {
  return (
    <Container>
      <Content>
        <div />

        <Title>{title}</Title>

        <LinkNewAccount className="primary-header-link" to={`${goTo}`}>
          <FiPlus size={30} color={theme.colors.financeBlue} />
        </LinkNewAccount>
      </Content>
    </Container>
  );
};

export default PrimaryHeader;
