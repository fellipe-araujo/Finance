import { formatPrice } from "./formatPrice";

export const chartConfig = (
  seriesColors: string[],
  seriesLabels: string[],
  dataLabelsColors: string[]
) => {
  const config = {
    options: {
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: dataLabelsColors,
          fontWeight: 400,
          fontFamily: "Nunito, sans-serif",
          fontSize: "16px",
        },
      },
      colors: seriesColors,
      labels: seriesLabels,
      stroke: {
        show: true,
      },
      legend: {
        show: false,
      },
      noData: {
        text: "Sem despesas este mês",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#202020",
          fontFamily: "Nunito, sans-serif",
          fontSize: "16px",
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 400,
                color: "#39393A",
              },
              total: {
                showAlways: true,
                show: true,
                label: "Total",
                fontWeight: 700,
                color: "#202020",
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                formatter: function (w: any) {
                  return formatPrice(
                    w.globals.seriesTotals.reduce((a: any, b: any) => {
                      return a + b;
                    }, 0)
                  );
                },
              },
            },
          },
          customScale: 0.8,
          expandOnClick: true,
          dataLabels: {
            offset: 50,
          },
        },
      },
    },
  };

  return config;
};
