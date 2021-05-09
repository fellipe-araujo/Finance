import './styles.css';
import SecondaryHeader from '../../components/SecondaryHeader';

const AccountDetail = () => {
  return (
    <div className="account-detail-container">
      <SecondaryHeader title="Principal" goBack="/accounts" />
    </div>
  );
};

export default AccountDetail;
