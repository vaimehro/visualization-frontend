import React, { useEffect, useState } from "react";
import { fetchData } from "../services/fetchDataService";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import { Chart as ChartJS, registerables, Colors } from "chart.js";

ChartJS.register(...registerables, Colors);
function GraphWrapper(props) {
  const [graphData, setGraphData] = useState(null);

  const options = {
    responsive: true,
    tension: 0.3, // 2. Set the tension (curvature) of the line to your liking.  (You may want to lower this a smidge.)
    plugins: {
      colors: {
        forceOverride: true,
      },
    },
  };

  useEffect(() => {
    const fetched = fetchData();
    fetched
      .then((res) => {
        setGraphData(res);
      })
      .catch((error) => {
        setGraphData({ error: true, msg: error.message });
      });
  }, []);

  return (
    <>
      <div class="graph-wrapper  flex-container">
        {graphData && graphData.error
          ? graphData.msg
          : graphData && (
              <>
                <LineGraph data={graphData} options={options}></LineGraph>
                <BarGraph data={graphData} options={options}></BarGraph>
                <PieGraph data={graphData} options={options}></PieGraph>
              </>
            )}
      </div>
    </>
  );
}

export default GraphWrapper;
