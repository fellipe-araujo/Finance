import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowLeft } from "react-icons/fi";
import { colors } from "../../styles/colors";

interface PrimaryHeaderProps {
  title: string;
  goTo: string;
}

const PrimaryHeader = ({ title, goTo }: PrimaryHeaderProps) => {
  return (
    <Container>
      <Content>
        <Link className="primary-header-link" to="/">
          <FiArrowLeft size={30} color={colors.white} />
        </Link>
        <h1 className="primary-header-title">{title}</h1>
        <Link className="primary-header-link" to={`${goTo}`}>
          <FiPlus size={30} color={colors.white} />
        </Link>
      </Content>
    </Container>
  );
};

export default PrimaryHeader;
