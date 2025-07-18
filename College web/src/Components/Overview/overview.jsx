import React, { useEffect, useState } from 'react';
import './overview.css';
import axios from 'axios';

const Overview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://college-backend-la5k.onrender.com/overview')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load overview');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="ov-head" id="overview">
      <h2 className="overview-heading">Overview</h2>
      <div className="overview-container">
        {data.paragraphs && <p className="overview-paragraph">{data.paragraphs[0]}</p>}
        <div className="overview-facts-grid">
          {data.facts && data.facts.map((fact, i) => (
            <div className="overview-fact-card" key={i}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
        {data.paragraphs && data.paragraphs[1] && <p className="overview-paragraph">{data.paragraphs[1]}</p>}
      </div>
    </div>
  );
};

export default Overview;