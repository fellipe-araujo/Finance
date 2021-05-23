import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';

interface PrimaryHeaderProps {
  title: string;
  goTo: string;
}

const PrimaryHeader = ({ title, goTo }: PrimaryHeaderProps) => {
  return (
    <Container>
      <Content>
        <Link className="primary-header-link" to="/">
          <FiArrowLeft size={30} color="#FFF" />
        </Link>
        <h1 className="primary-header-title">{title}</h1>
        <Link className="primary-header-link" to={`${goTo}`}>
          <FiPlus size={30} color="#FFF" />
        </Link>
      </Content>
    </Container>
  );
};

export default PrimaryHeader;
