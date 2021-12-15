import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import Hero from 'components/Hero/Hero';
import FeaturedCat from 'components/FeaturedCat/FeaturedCat';
import TopSellers from 'components/TopSellers/TopSellers';

function MainPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(items, error, isLoaded);

  return (
    <>
      <Header products={items} />
      <SideBar />
      <Hero />
      <FeaturedCat />
      <TopSellers items={items} />
    </>
  );
}

export default MainPage;
