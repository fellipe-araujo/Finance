import { Container, LinkGoBack, Title } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import theme from '../../styles/theme';

interface SecondaryHeaderProps {
  title: string;
  goBack: string;
}

const SecondaryHeader = ({ goBack, title }: SecondaryHeaderProps) => {
  return (
    <Container>
      <LinkGoBack className="secondary-header-link" to={`${goBack}`}>
        <FiArrowLeft size={30} color={theme.colors.financeBlue} />
      </LinkGoBack>

      <Title className="secondary-header-title">{title}</Title>

      <div />
    </Container>
  );
};

export default SecondaryHeader;
