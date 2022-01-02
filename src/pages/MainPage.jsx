/**
 * MainPage
 * @returns {node} MainPage component
 */

import React from 'react';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import Hero from 'components/Hero/Hero';
import FeaturedCat from 'components/FeaturedCat/FeaturedCat';
import TopSellers from 'components/TopSellers/TopSellers';
import SpecialSale from 'components/SpecialSale/SpecialSale';
import DiscountedItems from 'components/DiscountedItems/DiscountedItems';

function MainPage() {
  return (
    <>
      <Header />
      <SideBar />
      <Hero />
      <FeaturedCat />
      <DiscountedItems />
      <SpecialSale />
      <TopSellers />
    </>
  );
}

export default MainPage;
