import React from 'react';
import { CompanyLogo } from '../components/CompanyLogo.js';
import { getCompanyInfo } from '../utils/getCompanyInfo.js';
import '../styles/HomePage.css';

const HomePage = () => {
  let mission = 'Mission not available.';
  let offerings = ['No offerings available.'];

  try {
    const companyInfo = getCompanyInfo();
    if (companyInfo && companyInfo.mission) {
      mission = companyInfo.mission;
    }
    if (companyInfo && Array.isArray(companyInfo.offerings) && companyInfo.offerings.length > 0) {
      offerings = companyInfo.offerings;
    }
  } catch (error) {
    console.error('Error fetching company info:', error);
  }

  return (
    <div className='home-page'>
      <CompanyLogo src='/path/to/logo.png' />
      <h1>Our Mission</h1>
      <p>{mission}</p>
      <h2>Our Offerings</h2>
      <ul>{offerings.map((offering, index) => <li key={index}>{offering}</li>)}</ul>
    </div>
  );
};

export default HomePage;
