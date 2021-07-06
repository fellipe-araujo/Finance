import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface OptionProps {
  balance?: boolean;
  entry?: boolean;
  expense?: boolean;
}

const BalanceContainer = styled.div<OptionProps>`
  min-width: 20rem;
  min-height: 10rem;
  padding: 1rem 1.5rem;
  margin: .5rem 0;
  background-color: ${colors.white};
  border-radius: 0.8rem;
  box-shadow: 0 0 1rem rgba(14, 9, 9, 0.1);

  display: flex;
  flex-direction: column;

  &:nth-child(n + 2) {
    margin-left: 2rem;
  }

  .balance-title {
    font-size: 2rem;
    color: ${colors.grayMedium};
  }

  .balance-value {
    font-size: 2.4rem;
    align-self: center;
    margin: 1rem 0;

    ${(props) =>
      props.balance &&
      css`
        background-image: linear-gradient(167.96deg, #b8c0ff 20%, #42a1dc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `}

    ${(props) =>
      props.entry &&
      css`
        color: ${colors.transactionDark};
      `}

    ${(props) =>
      props.expense &&
      css`
        color: ${colors.redLight};
      `}
  }
`;

export { BalanceContainer };
