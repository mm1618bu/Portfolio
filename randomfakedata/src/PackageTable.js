import React, { useState } from "react";
import { faker } from '@faker-js/faker';

// Function to generate fake Walmart inventory data
const generateInventoryData = (numRows) => {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    data.push({
      productName: faker.commerce.productName(),
      category: faker.commerce.department(),
      stockQuantity: faker.number.int({ min: 0, max: 500 }), // Random stock quantity
      price: faker.commerce.price({ min: 1, max: 500, dec: 2, symbol: "$" }), // Random price with dollar sign
      lastRestocked: faker.date.past().toLocaleDateString(),
    });
  }
  return data;
};

const InventoryTable = () => {
  const [numRows, setNumRows] = useState(10); // Default to 10 rows
  const [inventoryData, setInventoryData] = useState(generateInventoryData(numRows));

  // Handle changing the number of rows
  const handleRowChange = (e) => {
    const value = e.target.value;
    setNumRows(value);
    setInventoryData(generateInventoryData(value)); // Update inventory data when rows change
  };

  // Inline CSS styles
  const styles = {
    container: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    table: {
      width: '80%',
      margin: '20px auto',
      borderCollapse: 'collapse',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    },
    th: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 15px',
      textTransform: 'uppercase',
      letterSpacing: '0.1rem',
    },
    tr: {
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #dddddd',
    },
    trHover: {
      backgroundColor: '#f1f1f1',
    },
    td: {
      padding: '12px 15px',
      color: '#333',
    },
    input: {
      padding: '10px',
      margin: '20px 0',
      width: '50px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Walmart Inventory</h1>
      
      <label htmlFor="numRows">Number of Rows: </label>
      <input
        type="number"
        id="numRows"
        value={numRows}
        onChange={handleRowChange}
        min="1"
        style={styles.input}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Stock Quantity</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.tr : { ...styles.tr, ...styles.trHover }}
            >
              <td style={styles.td}>{item.productName}</td>
              <td style={styles.td}>{item.category}</td>
              <td style={styles.td}>{item.stockQuantity}</td>
              <td style={styles.td}>{item.price}</td>
              <td style={styles.td}>{item.lastRestocked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
