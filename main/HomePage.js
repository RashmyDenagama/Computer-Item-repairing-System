import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './HomePage.css'; 

const HomePage = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      model: "Model A",
      price: "$50",
      image: "https://via.placeholder.com/150", // Sample image URL
    },
    {
      id: 2,
      name: "Item 2",
      model: "Model B",
      price: "$60",
      image: "https://via.placeholder.com/150", // Sample image URL
    },
    {
      id: 3,
      name: "Item 3",
      model: "Model C",
      price: "$70",
      image: "https://via.placeholder.com/150", // Sample image URL
    },
    {
      id: 4,
      name: "Item 4",
      model: "Model D",
      price: "$80",
      image: "https://via.placeholder.com/150", // Sample image URL
    },
  ];

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <h1>Items</h1>
        <div className="item-container">
          {items.map(item => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Model: {item.model}</p>
                <p>Price: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
