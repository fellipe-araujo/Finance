import './styles.css';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="button-container">
      <h1 className="button-title">{title}</h1>
    </button>
  );
};

export default Button;
