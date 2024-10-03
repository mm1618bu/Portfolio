import React, { useEffect, useState } from 'react';
import { getShifts } from '../api/apiService';

const Shifts = () => {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const data = await getShifts();
        setShifts(data);
      } catch (err) {
        console.error('Failed to fetch shifts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {shifts.length > 0 ? (
        shifts.map((shift, index) => (
          <div key={index}>
            <h3>{shift.mainTask}</h3>
            <p>{shift.time}</p>
            <p>{shift.location}</p>
            {/* Other details */}
          </div>
        ))
      ) : (
        <p>No shifts available</p>
      )}
    </div>
  );
};

export default Shifts;
