import './styles.css';

interface InputAppProps {
  title: string;
  name: string;
}

const InputApp = ({ title, name }: InputAppProps) => {
  let artifact = '';

  if (name === 'Contas') {
    artifact = 'input-app-artifact-account';
  } else if (name === 'Objetivos') {
    artifact = 'input-app-artifact-objective';
  } else if (name === 'Transações') {
    artifact = 'input-app-artifact-transaction';
  } else if (name === 'Categorias') {
    artifact = 'input-app-artifact-category';
  }

  return (
    <div className="input-app-container">
      <h1 className="input-app-title">{title}</h1>
      <input className={`input-app-box ${artifact}`} />
    </div>
  );
};

export default InputApp;
