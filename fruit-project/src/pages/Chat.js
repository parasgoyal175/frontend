import React, { useState } from 'react';
import Apple from './images/Apple.jpeg';
import Banana from './images/Banana.jpeg';
import Orange from './images/Orange.jpeg';

const fruits = [
  { name: 'Apple', image: Apple, details: 'Apples are nutritious fruits that come in a variety of colors and flavors.' },
  { name: 'Banana', image: Banana, details: 'Bananas are a good source of potassium and are often enjoyed as a snack.' },
  { name: 'Orange', image: Orange, details: 'Oranges are known for their high vitamin C content and are great for boosting immunity.' },
];

const responses = {
  greeting: 'Hello! I am your fruit assistant. How can I help you today?',
  askForFruit: 'You can choose a fruit to learn more about it.',
  noSelection: 'Please select a fruit from the options provided.',
  back: 'Would you like to see more fruits or ask something else?',
};

function Chat() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [chatState, setChatState] = useState('greeting'); 
  
  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
    setChatState('fruitDetails');
  };

  const handleBackClick = () => {
    setSelectedFruit(null);
    setChatState('askForFruit');
  };

  const handleGreeting = () => {
    setChatState('askForFruit');
  };

  return (
    <div className="chat">
      <div className="chat-box">
        <div className="chat-message">
          <p>{responses[chatState]}</p>
        </div>
        {chatState === 'greeting' && (
          <button onClick={handleGreeting}>Start</button>
        )}
        {chatState === 'askForFruit' && (
          <div>
            <ul className="fruit-list">
              {fruits.map((fruit, index) => (
                <li key={index} className="fruit-card" onClick={() => handleFruitClick(fruit)}>
                  <img src={fruit.image} alt={fruit.name} />
                  <p>{fruit.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedFruit && chatState === 'fruitDetails' && (
          <div className="fruit-details">
            <h3>{selectedFruit.name}</h3>
            <img src={selectedFruit.image} alt={selectedFruit.name} />
            <p>{selectedFruit.details}</p>
            <button onClick={handleBackClick}>Back to Fruits</button>
          </div>
        )}
        {chatState === 'fruitDetails' && !selectedFruit && (
          <div>
            <button onClick={handleGreeting}>Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;