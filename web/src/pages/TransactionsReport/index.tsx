import { useState, useEffect } from "react";
import { Container, ReportCardCategory } from "./styles";
import Charts from "react-apexcharts";
import SecondaryHeader from "../../components/SecondaryHeader";
import { chartConfig } from "../../utils/chartConfig";
import { UserCategory } from "../../utils/types";
import { formatPrice } from "../../utils/formatPrice";
import { fetchCurrentMonthTransactions } from "../../utils/transactionsFilter";
import { useAuth } from "../../context/auth";

interface CategoryChart {
  _id: string;
  name: string;
  color: string;
  amount: number;
}

interface ChartTransactions {
  categories: CategoryChart[];
  valuesByCategory: number[];
  colors: string[];
  labels: string[];
}

const TransactionsReport = () => {
  const [series, setSeries] = useState<ChartTransactions>({
    categories: [],
    valuesByCategory: [],
    colors: [],
    labels: [],
  });

  const { user } = useAuth();

  useEffect(() => {
    const fecthTransactions = async () => {
      const response = await fetchCurrentMonthTransactions(user!);
      const transactionsEntries = response.transactions.filter(
        (transaction) => transaction.expense
      );

      const data: ChartTransactions = {
        categories: [],
        valuesByCategory: [],
        colors: [],
        labels: [],
      };

      for (let i = 0; i < transactionsEntries.length; i++) {
        let exist = false;
        for (let j = 0; j < data.categories.length; j++) {
          if (
            data.categories[j]._id! === transactionsEntries[i].category?._id!
          ) {
            data.valuesByCategory[j] += transactionsEntries[i].price!;
            data.categories[j].amount += transactionsEntries[i].price!;
            exist = true;
            break;
          }
        }
        if (!exist) {
          const category: UserCategory = transactionsEntries[i].category!;
          const categoryFormat: CategoryChart = {
            _id: category._id!,
            name: category.name!,
            color: category.color!,
            amount: transactionsEntries[i].price!,
          };

          data.categories.push(categoryFormat);
          data.valuesByCategory.push(transactionsEntries[i].price!);
          data.colors.push(transactionsEntries[i].category?.color!);
          data.labels.push(transactionsEntries[i].category?.name!);
        }
      }

      setSeries(data);
    };

    fecthTransactions();
  }, [user]);

  return (
    <Container>
      <SecondaryHeader title="Relatório" goBack="/transactions" />

      <h1 className="report-title">Despesas este mês</h1>

      <Charts
        series={series!.valuesByCategory}
        options={{
          ...chartConfig.options,
          colors: series.colors,
          labels: series.labels,
        }}
        type="donut"
      />
      {series?.categories.map((category) => (
        <ReportCardCategory
          key={category._id}
          backgroundColor={category.color!}
        >
          <div className="report-category-card-container">
            <div className="report-category-card-color" />
            <h1 className="report-category-card-name">{category.name}</h1>
          </div>

          <h1 className="report-category-card-amount">
            {formatPrice(category.amount)}
          </h1>
        </ReportCardCategory>
      ))}
    </Container>
  );
};

export default TransactionsReport;