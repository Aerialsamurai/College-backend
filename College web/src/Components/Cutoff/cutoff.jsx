import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css';
import './cutoff.css';

const Cutoff = () => {
  const [cutoffData, setCutoffData] = useState(null);
  const [selectedRound, setSelectedRound] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedQuota, setSelectedQuota] = useState('All');
  const categories = ['All', 'OPEN', 'OBC-NCL', 'SC', 'ST', 'GEN-EWS', 'OPEN-PwD'];
  const quotas = ['All', 'AI', 'HS', 'OS', 'GO'];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://college-backend-la5k.onrender.com/cutoff')
      .then(res => {
        setCutoffData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load cutoff data');
        setLoading(false);
      });
  }, []);

  let filteredData = [];
  if (cutoffData && cutoffData.rounds) {
    const roundData = cutoffData.rounds.find(r => r.round === selectedRound);
    if (roundData) {
      filteredData = roundData.data.filter(item =>
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        (selectedQuota === 'All' || item.quota === selectedQuota)
      );
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="cutoff">
      <Navbar />
      <Hero />
      <div className="cutoff-section">
        <h2>Cutoff Data</h2>
        <div className="filters">
          <div>
            <label>Round:</label>
            <select value={selectedRound} onChange={e => setSelectedRound(Number(e.target.value))}>
              {cutoffData && cutoffData.rounds && cutoffData.rounds.map(r => (
                <option key={r.round} value={r.round}>Round {r.round}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Category:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Quota:</label>
            <select value={selectedQuota} onChange={e => setSelectedQuota(e.target.value)}>
              {quotas.map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>
        </div>
        <table className="cutoff-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Category</th>
              <th>Quota</th>
              <th>Opening Rank</th>
              <th>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.branch}</td>
                <td>{item.category}</td>
                <td>{item.quota}</td>
                <td>{item.openingRank}</td>
                <td>{item.closingRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cutoff;