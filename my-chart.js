const labels = ["1월", "2월", "3월", "4월", "5월"];
const datasets = [
  {
    label: "높음",
    backgroundColor: "#db3a34",
    borderColor: "#db3a34",
    data: [1, 1, 3, 2, 3],
    maxBarThickness: 150,
  },
  {
    label: "중간",
    backgroundColor: "#ffc857",
    borderColor: "#ffc857",
    data: [12, 21, 33, 42, 13],
    maxBarThickness: 150,
  },
  {
    label: "낮음",
    backgroundColor: "#177e89",
    borderColor: "#177e89",
    data: [12, 12, 33, 12, 31],
    maxBarThickness: 150,
  },
];

const data = {
  labels,
  datasets,
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.querySelector("#myChart"), config);
