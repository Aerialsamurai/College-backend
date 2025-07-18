import React, { useEffect, useState } from "react";
import "./rank.css";
import axios from "axios";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://college-backend-la5k.onrender.com/rankings")
      .then(res => {
        setRankings(res.data.rankings || []);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load rankings");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="rn-wrapper" id="rankings">
      <h1 className="rn-heading">Rankings</h1>
      <div className="rn-container">
        <div className="rn-contbox">
          {rankings.map((item, index) => (
            <div className="rn-box" key={index}>
              <img
                src={item.image}
                alt={`${item.title} logo`}
                className={`rank-logo ${item.className || ""}`}
              />
              <h3>{item.title}</h3>
              <p className="subheading">{item.sub}</p>
              <p className="rank-number">{item.rank}</p>
              <p className="rn-know-more">Know more</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
