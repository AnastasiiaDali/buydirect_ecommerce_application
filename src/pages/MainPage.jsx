import React from 'react';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import Hero from 'components/Hero/Hero';
import FeaturedCat from 'components/FeaturedCat/FeaturedCat';
import TopSellers from 'components/TopSellers/TopSellers';

function MainPage() {
  return (
    <>
      <Header />
      <SideBar />
      <Hero />
      <FeaturedCat />
      <TopSellers />
    </>
  );
}

export default MainPage;
