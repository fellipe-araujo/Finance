import './styles.css';

interface AccountCardProps {
  title: string;
  value: string;
} 

const AccountCard = ({ title, value }: AccountCardProps) => {
  return (
    <div className="account-card-container">
      <div className="account-card-title-box">
        <h1 className="account-card-title">{title}</h1>
      </div>
      <div className="account-card-value-box">
        <h1 className="account-card-value">{value}</h1>
      </div>
    </div>
  );
};

export default AccountCard;
