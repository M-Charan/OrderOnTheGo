// File: src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
import './Home.css';

const Home = () => {
  const categories = [
    { title: 'Breakfast', image: '/images/breakfast.jpeg', isActive: true },
    { title: 'Pizza', image: '/images/pizza.jpeg' },
    { title: 'Noodles', image: '/images/noodles.jpeg' },
    { title: 'Burger', image: '/images/burger.jpeg' },
    { title: 'Momos', image: '/images/momos.jpeg' },
  ];

  const popularRestaurants = [
    { name: 'McDonalds', image: '/images/mcdonalds.jpeg' },
    { name: 'BURGER KING', image: '/images/burgerking.jpeg' },
    { name: 'Naidu Gari', image: '/images/naidugari.jpeg' },
  ];

  const allRestaurants = [
    { name: 'BURGER KING', image: '/images/burgerking.jpeg', location: 'PVP Square, Vijayawada.' },
    { name: "Domino’s Pizza", image: '/images/dominos.jpeg', location: 'Bandar Road, Vijayawada.' },
    { name: 'TACO BELL', image: '/images/tacobell.jpeg', location: 'Labbipet, Vijayawada.' },
    { name: 'Sweet Magic', image: '/images/sweetmagic.png', location: 'MG Road, Vijayawada.' },
    { name: 'Andhra Spice', image: '/images/andhraspice.jpeg', location: 'Labbipet, Vijayawada.' },
    { name: 'McDonalds', image: '/images/mcdonalds.jpeg', location: 'Auto Nagar, Vijayawada.' },
    { name: 'Naidu Gari Kunda Biriyani', image: '/images/naidugari.jpeg', location: 'FoodCourt, Vijayawada.'},
    { name: 'Paradise Biriyani', image: '/images/paradise.jpg', location: 'Trenset Mall, Vijayawada.'},
    { name: 'KFC', image: '/images/KFC.png', location: 'Bandar Road, Vijayawada.'},
    { name: 'Vani Sweets', image: '/images/vanisweets.png', location: 'Labbipet, Vijayawada.'},
  ];

  return (
    <>
      <Header />

      <div className="container">
        <div className="categories">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        <h2>Popular Restaurants</h2>
        <div className="restaurants">
          {popularRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>

        <h2>All Restaurants</h2>
        <div className="restaurants all">
          {allRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>@OrderOnTheGo Foods - Live it up!!</p>
        <p>©OrderOnTheGo.com - All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
