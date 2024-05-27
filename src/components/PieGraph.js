import React from "react";
import { Pie } from "react-chartjs-2";

function PieGraph(props) {
  const { data, options } = props;
  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default PieGraph;
