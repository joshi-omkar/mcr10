import React from "react";
import "./dashboard.css";
import { useInventory } from "../contexts/InventoryContext";

const Dashboard = () => {
  const { data } = useInventory();

  const Card = ({ value, title }) => {
    return (
      <div className="dashboard-card">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    );
  };

  const getDataInfo = data.reduce(
    (acc, item) => {
      if (item.stock <= 10) {
        acc.lowStock += 1;
      }

      acc.stock += item.stock;
      acc.delivered += item.delivered;

      return acc;
    },
    { lowStock: 0, delivered: 0, stock: 0 }
  );

  return (
    <div className="dashboard">
      <Card value={getDataInfo.stock} title={"Stock"} />
      <Card value={getDataInfo.delivered} title={"Delivered"} />
      <Card value={getDataInfo.lowStock} title={"Low Stock Items"} />
    </div>
  );
};

export default Dashboard;
