import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.div`
  height: 65%;
  margin-top: 30rem;
  overflow-y: scroll;
`;

const LinkAccountDetail = styled(Link)`
  text-decoration: none;
`;

export { List, LinkAccountDetail };
