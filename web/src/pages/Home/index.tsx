import { HomeContainer, HomeContent } from './styles';
import Header from '../../components/Header';
import ArtifactResume from '../../components/ArtifactResume';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <h1 className="home-balance">R$ 14.567,32</h1>

      <HomeContent>
        <h1 className="home-resume">Resumo</h1>
        <ArtifactResume name="Contas" total={10} />
        <ArtifactResume name="Objetivos" total={10} />
        <ArtifactResume name="Transações" total={10} />
        <ArtifactResume name="Categorias" total={10} />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
