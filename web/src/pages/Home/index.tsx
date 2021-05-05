import './styles.css';
import Header from '../../components/Header';
import ArtifactResume from '../../components/ArtifactResume';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <h1 className="home-balance">R$ 14.567,32</h1>

      <main className="home-content">
        <h1 className="home-content-title">Resumo</h1>
        <ArtifactResume name="Contas" total={10} />
        <ArtifactResume name="Objetivos" total={10} />
        <ArtifactResume name="Transações" total={10} />
        <ArtifactResume name="Categorias" total={10} />
      </main>
    </div>
  );
};

export default Home;
