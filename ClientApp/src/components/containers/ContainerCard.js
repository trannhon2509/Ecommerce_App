import React from 'react';
import Card from '../Card';
import Pagging from '../Pagging';

function ContainerCard() {
  const cardData = [
    { img: "/img/p1.png", name: "Green Lamp", category: "Lamp", quantity: 100, price: 5, rating: 5 },
    { img: "/img/p2.png", name: "Green Lamp", category: "Lamp", quantity: 100, price: 5, rating: 5 },
    { img: "/img/p3.png", name: "Green Lamp", category: "Lamp", quantity: 100, price: 5, rating: 5 },
    { img: "/img/p4.png", name: "Green Lamp", category: "Lamp", quantity: 100, price: 5, rating: 5 },
    // Add more card data objects here
  ];
  
  return (
    <div className='container'>
      <div className="menu-list-row">
        <div className="row g-xxl-5 bydefault_show" id="menu-dish">
          {cardData.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              name={card.name}
              category={card.category}
              quantity={card.quantity}
              price={card.price}
              rating={card.rating}
            />
          ))}
        </div>
        <div className='mt-5'>
              <Pagging startPage={1} endPage={3} itemsPerPage={4} />
            </div>
      </div>
    </div>
  );
}
export default ContainerCard;