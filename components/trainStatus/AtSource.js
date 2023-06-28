import React from "react";
import TrainInfoCard from "./TrainInfoCard";

function AtSource({ trainData }) {
  return (
    <div>
      <TrainInfoCard trainInfo={trainData} />
    </div>
  );
}

export default AtSource;
