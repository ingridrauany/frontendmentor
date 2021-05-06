import './assets/css/reset.css';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card
        title={'Sedans'} 
        description={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'} 
        cardNumber={'card_1'}
      />

      <Card
        title={'SUVs'} 
        description={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'} 
        cardNumber={'card_2'}
      />

      <Card
        title={'Luxury'} 
        description={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'} 
        cardNumber={'card_3'}
      />
    </div>
  );
}

export default App;
