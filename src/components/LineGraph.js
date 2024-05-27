import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph(props) {
  const { data, options } = props;
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineGraph;
