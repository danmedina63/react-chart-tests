import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./ExtraBar";

export default function Home() {
  return (
    <Layout>
      <h2>{name("Daniel", "Medina")}</h2>
      <DeviceChart
        options={{
          colors: ["#0f6375", "#f5a623", "#00FF00"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#c00", "#3469a7", "#c1b01e"],
          labels: ["switch", "ps5", "xbox"],
        }}
      />

        <RadialChart />
      
          </Layout>
  );
}