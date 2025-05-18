// src/pages/Home.jsx
import React from 'react';
import { FaUtensils } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container text-center py-5">
      <FaUtensils size={60} className="text-primary mb-3" />
      <h1 className="display-4 fw-bold">Welcome to My Restaurant</h1>
      <p className="lead mt-3">
        Experience a wide range of delicious cuisines — Starters, Mains, and Chinese Specials —
        all curated to perfection with veg and non-veg options.
      </p>
      <hr className="my-4" />
      <p className="text-muted">Serving quality and flavor since 1998 🍽️</p>
    </div>
  );
}
