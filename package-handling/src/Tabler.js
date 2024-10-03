import React, { useState, useEffect } from 'react';

const Tabler = () => {
  const [data, setData] = useState([]);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 100; // Adjust this number based on your requirements
  const [sortConfig, setSortConfig] = useState({ key: 'time', direction: 'ascending' });

  // Fetch and sort data
  useEffect(() => {
    import('./data.json')
      .then(jsonData => {
        const sortedData = jsonData.default.sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
        setData(sortedData);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  // Pagination logic
  useEffect(() => {
    const addRecord = () => {
      if (currentIndex < data.length) {
        setCurrentRecords(prevRecords => [...prevRecords, data[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    };

    const intervalId = setInterval(addRecord, 6000); // 6 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, data]);

  // Sorting function
  const sortData = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  // Pagination calculation
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const paginatedRecords = currentRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(currentRecords.length / recordsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
              <th key={index} onClick={() => sortData(key)} style={{ cursor: 'pointer' }}>
                {key} {sortConfig.key === key ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRecords.map((record, index) => (
            <tr key={index}>
              {Object.values(record).map((value, valueIndex) => (
                <td key={valueIndex}>{value !== null ? value.toString() : ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
      </div>
    </div>
  );
};

export default Tabler;
