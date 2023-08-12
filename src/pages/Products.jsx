import React, { useEffect, useState } from "react";
import "./products.css";
import { useInventory } from "../contexts/InventoryContext";

const Products = () => {
  const { data, inventory, dispatch } = useInventory();
  const departments = ["All departments", "Kitchen", "Clothing", "Toys"];
  const [selectedDepartment, setSelectedDepartment] = useState(
    localStorage.getItem("department") !== "All departments"
      ? localStorage.getItem("department")
      : "All Departments"
  );
  const [selectedSort, setSelectedSort] = useState(
    localStorage.getItem("sort") !== "name"
      ? localStorage.getItem("sort")
      : "name"
  );
  const [showLowStockOnly, setShowLowStockOnly] = useState(
    localStorage.getItem("lowStock") === true
  );

  const handleDepartmentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDepartment(selectedValue);
    dispatch({
      type: "FILTER_DEPARTMENT",
      department: selectedValue,
      inventoryData: data,
    });
    localStorage.setItem("department", selectedValue);
  };

  console.log(inventory);

  const sortingOptions = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "stock", label: "Stock" },
  ];

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "SORT", sortBy: selectedValue, inventoryData: data });
    setSelectedSort(selectedValue);
    localStorage.setItem("sort", selectedValue);
  };

  const handleLowStockToggle = () => {
    if (!showLowStockOnly) {
      dispatch({ type: "FILTER_LOW_STOCK", inventoryData: data });
    } else {
      dispatch({
        type: "FILTER_DEPARTMENT",
        department: selectedDepartment,
        inventoryData: data,
      });
    }
    // localStorage.setItem("lowStock", !showLowStockOnly);
    setShowLowStockOnly(!showLowStockOnly);
  };

  useEffect(() => {
    localStorage.setItem("lowStock", showLowStockOnly);
  }, [showLowStockOnly]);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory.inventory));
  }, [showLowStockOnly, selectedSort, selectedDepartment]);

  return (
    <div className="products">
      <div className="products-filters">
        <h2>Products</h2>
        <div>
          <select value={selectedDepartment} onChange={handleDepartmentChange}>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showLowStockOnly}
              onChange={handleLowStockToggle}
            />
            Show Low Stock Items
          </label>
        </div>
        <div>
          <select value={selectedSort} id="sort" onChange={handleSortChange}>
            {sortingOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {inventory.inventory.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
