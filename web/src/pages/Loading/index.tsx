import { LoadingContainer } from './styles';

import RingLoader from 'react-spinners/RingLoader';

import theme from '../../styles/theme';

const Loading = () => {
  return (
    <LoadingContainer>
      <RingLoader color={theme.colors.financeBlue} size={80} />
    </LoadingContainer>
  );
};

export default Loading;
