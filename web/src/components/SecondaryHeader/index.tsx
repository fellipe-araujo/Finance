import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface SecondaryHeaderProps {
  title: string;
  goBack: string;
}

const SecondaryHeader = ({ goBack, title }: SecondaryHeaderProps) => {
  return (
    <Container>
      <Link className="secondary-header-link" to={`${goBack}`}>
        <FiArrowLeft size={30} color="#FFF" />
      </Link>
      <h1 className="secondary-header-title">{title}</h1>
      <div className="secondary-header-invisible" />
    </Container>
  );
};

export default SecondaryHeader;
