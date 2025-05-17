import React from "react";
import "./_home.scss";
import LineBarChart from "../../components/charts/lineBarChart";
import CustomPieChart from "../../components/charts/pieChart";
import RectangleChart from "../../components/charts/rectangleChart";
import RadialChart from "../../components/charts/radialChart";
import ShapeChart from "../../components/charts/shapeChart";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="chart-wrapper">
        <h1>Line Bar Chart</h1>
        <LineBarChart />
      </div>
      <div className="chart-wrapper">
        <h1>Pie Chart</h1>
        <CustomPieChart />
      </div>
      <div className="chart-wrapper">
        <h1>Rectangle Chart</h1>
        <RadialChart />
      </div>
      <div className="chart-wrapper">
        <h1>Shape Chart</h1>
        <ShapeChart />
      </div>

      <div className="chart-wrapper">
        <h1>Rectangle Chart</h1>
        <RectangleChart />
      </div>
    </div>
  );
};

export default Home;
