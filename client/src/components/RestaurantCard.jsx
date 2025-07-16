import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ name, image, location }) => (
  <div className="restaurant-card">
    <img src={image} alt={name} />
    <p className="restaurant-name">{name}</p>
    {location && <p className="location">{location}</p>}
  </div>
);

export default RestaurantCard;