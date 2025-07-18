import React, { useEffect, useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import axios from 'axios';

const Hero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://college-backend-la5k.onrender.com/hero')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load hero data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  );
};

export default Hero;
