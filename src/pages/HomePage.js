import React from 'react';
import Logo from '../components/Logo';
import MissionStatement from '../components/MissionStatement';
import MainOfferings from '../components/MainOfferings';

const HomePage = () => {
  return (
    <div>
      <Logo />
      <MissionStatement />
      <MainOfferings />
    </div>
  );
};

export default HomePage;