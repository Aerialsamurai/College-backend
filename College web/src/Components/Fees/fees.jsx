import React, { useEffect, useState } from 'react';
import './fees.css';
import axios from 'axios';

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://college-backend-la5k.onrender.com/fees')
      .then(res => {
        setFees(res.data.fees || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load fees');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="fees-wrapper" id="fees">
      <h2 className="fees-title">Fee Structure</h2>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Tuition</th>
            <th>Hostel</th>
            <th>Misc</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, idx) => (
            <tr key={idx}>
              <td>{fee.program}</td>
              <td>{fee.tuition}</td>
              <td>{fee.hostel}</td>
              <td>{fee.misc}</td>
              <td>{fee.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fees;
