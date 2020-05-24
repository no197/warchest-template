var ctx = document.getElementById("myChart").getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");

gradientStroke.addColorStop(1, "#f49080");

var myChart = new Chart(ctx, {
  type: "line",

  data: {
    labels: [
      "29-1-2019",
      "11-2-2019",
      "22-2-2019",
      "27-2-2019",
      "6-3-2019",
      "17-6-2019",
      "8-8-2019",
      "20-8-2019",
      "27-9-2019",
      "7-10-2019",
      "16-10-2019",
      "22-10-2019",
      "18-11-2019",
      "21-11-2019",
      "12-12-2019",
      "25-12-2019",
      "6-1-2020",
    ],
    datasets: [
      {
        label: "Giá",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 8,
        pointHoverBorderColor: "rgba(0, 0, 0, 0.1)",
        pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [
          238000.0,
          238000.0,
          238000.0,
          238000.0,
          238000.0,
          267000.0,
          267000.0,
          267000.0,
          253650.0,
          253650.0,
          253650.0,
          267000.0,
          267000.0,
          267000.0,
          186000.0,
          267000.0,
          267000.0,
        ],
      },
    ],
  },
  options: {
    tooltips: {
      // position: 'top',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: true,
            // maxTicksLimit: 5,
            padding: 40,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false,
            // drawTicks: false,
            // display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            // zeroLineColor: 'transparent',
            display: false,
          },
          ticks: {
            maxTicksLimit: 5,
            // padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
});
