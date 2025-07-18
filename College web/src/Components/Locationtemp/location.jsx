import './location.css';
import { FaPlaneDeparture, FaTrain, FaWifi, FaUtensils, FaUserGraduate, FaMale, FaFemale, FaFutbol, FaHospital, FaBook, FaDollarSign } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const iconMap = {
  FaPlaneDeparture: <FaPlaneDeparture />, FaTrain: <FaTrain />, FaWifi: <FaWifi />, FaUtensils: <FaUtensils />,
  FaUserGraduate: <FaUserGraduate />, FaMale: <FaMale />, FaFemale: <FaFemale />, FaFutbol: <FaFutbol />,
  FaHospital: <FaHospital />, FaBook: <FaBook />, FaDollarSign: <FaDollarSign />
};

const Location = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://college-backend-la5k.onrender.com/location')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load location data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="location-wrapper" id="location">
      <h1 className="location-heading">Location & Campus Facilities</h1>
      <div className="location-container location-section">
        <div className="map-section" style={{ minHeight: '260px', maxWidth: '350px', marginRight: '32px' }}>
          <iframe
            src={data.mapEmbedUrl}
            style={{ border: 0, width: '100%', height: '100%', minHeight: '260px', borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IIT Delhi Map"
          ></iframe>
        </div>
        <div className="info-section">
          <div className="info-box animated-info">
            <h2>Email</h2>
            <p>{data.contact.email}</p>
          </div>
          <div className="info-box animated-info">
            <h2>Contact No.</h2>
            <p>{data.contact.phone}</p>
          </div>
          <div className="info-box animated-info">
            <h2>Address</h2>
            <p>{data.contact.address}</p>
          </div>
          <div className="info-box animated-info">
            <h2>Official Website</h2>
            <p><a href={data.contact.website} target="_blank" rel="noopener noreferrer" className="info-link">{data.contact.website}</a></p>
          </div>
        </div>
      </div>
      <div className="location-section">
        <h2>Nearby Airports</h2>
        <ul>
          {data.airports.map((airport, idx) => (
            <li key={idx}>{airport.name} - {airport.distance}</li>
          ))}
        </ul>
        <h2>Nearby Stations</h2>
        <ul>
          {data.stations.map((station, idx) => (
            <li key={idx}>{station.name} - {station.distance}</li>
          ))}
        </ul>
        <h2>Campus Facilities</h2>
        <ul className="facilities-list">
          {data.facilities.map((facility, idx) => (
            <li key={idx} className="facility-item">
              {iconMap[facility.icon] || null} {facility.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
