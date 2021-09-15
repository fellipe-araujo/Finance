import { useState, useEffect } from 'react';
import { Content, Title, List, ReportCardCategory, CategoryBox } from './styles';

import { useParams } from 'react-router-dom';
import Charts from 'react-apexcharts';

import SecondaryHeader from '../../components/SecondaryHeader';
import PageContainer from '../../components/PageContainer';

import { chartConfig } from '../../utils/chartConfig';
import { UserCategory } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import { fetchMonthAndYearTransactions } from '../../utils/transactionsFilter';
import { period } from '../../utils/period';
import { useAuth } from '../../context/auth';
import ReportLogo from '../../assets/report-logo.svg';

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

interface ParamsProps {
  yearId: string;
  monthId: string;
}

const TransactionsReport = () => {
  const [series, setSeries] = useState<ChartTransactions>({
    categories: [],
    valuesByCategory: [],
    colors: [],
    labels: [],
  });

  const params: ParamsProps = useParams();

  const { user } = useAuth();

  useEffect(() => {
    const fecthTransactions = async () => {
      const response = await fetchMonthAndYearTransactions(
        user!,
        params.monthId,
        params.yearId
      );
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
  }, [params.monthId, params.yearId, user]);

  return (
    <PageContainer>
      <SecondaryHeader
        title={`Relatório - ${
          period.months.find((month) => month.id === params.monthId)?.value
        }`}
        goBack="/transactions"
      />

      <Content>
        <Title className="report-title">Despesas neste mês</Title>

        <Charts
          series={series?.valuesByCategory}
          options={
            chartConfig(series.colors, series.labels, series.colors).options
          }
          type="donut"
          height={300}
        />

        <List>
          {series?.categories.length > 0 ? (
            series?.categories.map((category) => (
              <ReportCardCategory key={category._id}>
                <CategoryBox backgroundColor={category.color!}>
                  <div />
                  <h2 className="report-category-card-name">{category.name}</h2>
                </CategoryBox>

                <h2 className="report-category-card-amount">
                  {formatPrice(category.amount)}
                </h2>
              </ReportCardCategory>
            ))
          ) : (
            <img src={ReportLogo} alt="Report" />
          )}
        </List>
      </Content>
    </PageContainer>
  );
};

export default TransactionsReport;
