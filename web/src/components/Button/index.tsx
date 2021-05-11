import './styles.css';

interface ButtonProps {
  title: string;
  type: string;
}

const Button = ({ title, type }: ButtonProps) => {
  let color = '';

  if (type === 'Create') {
    color = 'button-color-create';
  } else if (type === 'Delete') {
    color = 'button-color-delete';
  }
  return (
    <button className={`button-container ${color}`}>
      <h1 className="button-title">{title}</h1>
    </button>
  );
};

export default Button;
