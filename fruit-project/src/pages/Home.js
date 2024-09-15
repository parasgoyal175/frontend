import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { title: 'Chatbot', icon: '🤖', to: '/chat' },
    { title: 'Translator', icon: '🌍', to: '/translator' },
    { title: 'FAQs', icon: '❓', to: '/faq' },
    { title: 'About', icon: 'ℹ️', to: '/about' },
  ];

  return (
    <div className="home">
      <h1 className="fruitAi">Fruit.Ai</h1>
      <h2 className="beHealthy">Be Healthy!</h2>
      <div className="card-container">
        {features.map((feature) => (
          <Link key={feature.title} to={feature.to} className="card">
            <span className="card-icon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>Explore the exciting features of Fruit.Ai!</p>
          </Link>
        ))}
      </div>
      {/* The navigation can be optional if you have a different way to handle it */}
      {/* <nav>
        <ul>
          <li><Link to="/chat">Chatbot</Link></li>
          <li><Link to="/translator">Translator</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Home;
