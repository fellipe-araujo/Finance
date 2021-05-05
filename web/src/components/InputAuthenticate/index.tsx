import './styles.css';

interface InputProps {
  title: string;
  type: string;
}

const InputAuthenticate = ({ title, type }: InputProps) => {
  return (
    <div className="input-authenticate-container">
      <h2 className="input-authenticate-title">{title}</h2>
      <input className="input-authenticate-box" required type={type} />
    </div>
  );
};

export default InputAuthenticate;
