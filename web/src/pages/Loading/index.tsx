import { LoadingContainer } from './styles';
import SyncLoader from 'react-spinners/SyncLoader';
import { colors } from '../../styles/colors';
import LogoFinance from '../../assets/LogoFinance.svg';

const Loading = () => {
  return (
    <LoadingContainer>
      <img className="loading-logo" src={LogoFinance} alt="Finance" />
      <div className="loading-content">
        <SyncLoader color={colors.grayLight} size={20} />
        <h2 className="loading-text">Aguarde</h2>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
