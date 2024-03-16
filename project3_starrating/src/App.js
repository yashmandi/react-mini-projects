import './App.css';
import StarRating from './components/starRating';

function App() {
  return (
    <>
      <h1>
        <StarRating noOfStars={5} />
      </h1>
    </>
  );
}

export default App;

