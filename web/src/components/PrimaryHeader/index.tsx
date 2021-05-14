import './styles.css';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';

interface PrimaryHeaderProps {
  title: string;
  goTo: string;
}

const PrimaryHeader = ({ title, goTo }: PrimaryHeaderProps) => {
  return (
    <div className="primary-header-container">
      <div className="primary-header-content">
        <Link className="primary-header-link" to="/">
          <FiArrowLeft size={30} color="#FFF" />
        </Link>
        <h1 className="primary-header-title">{title}</h1>
        <Link className="primary-header-link" to={`${goTo}`}>
          <FiPlus size={30} color="#FFF" />
        </Link>
      </div>
    </div>
  );
};

export default PrimaryHeader;
