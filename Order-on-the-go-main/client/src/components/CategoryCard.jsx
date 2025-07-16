import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image, isActive }) => (
  <div className={`category-card ${isActive ? 'active' : ''}`}>
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

export default CategoryCard;