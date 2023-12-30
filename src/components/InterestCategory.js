import React, { useState } from 'react';
import InterestItem from './InterestItem';

function InterestCategory({ title }) {
  const [items, setItems] = useState([]); // Holds the interests

  const handleAddInterest = () => {
    // Function to handle adding a new interest
    // This is where you'd integrate your form or input method
    const newItem = prompt("Enter new interest: "); // Simple prompt for example
    setItems([...items, newItem]);
  };

  return (
    <div className="interest-category">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <InterestItem key={index} name={item} />
      ))}
      <button onClick={handleAddInterest}>+</button>
    </div>
  );
}

export default InterestCategory;
