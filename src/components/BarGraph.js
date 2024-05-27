import React from "react";
import { Bar } from "react-chartjs-2";

function BarGraph(props) {
  const { data, options } = props;
  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default BarGraph;
