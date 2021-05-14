import {
  HomeContainer,
  HomeBalance,
  HomeContent,
  HomeResumeTitle,
} from './styles';
import Header from '../../components/Header';
import ArtifactResume from '../../components/ArtifactResume';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeBalance>R$ 14.567,32</HomeBalance>

      <HomeContent>
        <HomeResumeTitle>Resumo</HomeResumeTitle>
        <ArtifactResume name="Contas" total={10} />
        <ArtifactResume name="Objetivos" total={10} />
        <ArtifactResume name="Transações" total={10} />
        <ArtifactResume name="Categorias" total={10} />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
