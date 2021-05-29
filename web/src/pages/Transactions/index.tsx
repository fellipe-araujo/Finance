import { Container, List } from "./styles";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import TransactionCard from "../../components/TransactionCard";

const Transactions = () => {
  return (
    <Container>
      <PrimaryHeader title="Transações" goTo="/transactions/create" />
      <ArtifactData
        title="Transações"
        subTitle="este mês"
        value="2"
        artifactType="Transações"
      />

      <List>
        <TransactionCard
          name="Transação 1"
          expense={false}
          price={200.90}
          date="10/03/2021"
          accountName="Trabalho"
          categoryName="PetShop"
          categoryColor="#9a11e3"
          onDelete={() => {}}
        />
      </List>
    </Container>
  );
};

export default Transactions;
