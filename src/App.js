import { useState, useEffect } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
};
const transition = 'all 1s';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  const [randomColor, setRandomColor] = useState(getRandomColor());

  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await fetch(
        'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
      );
      const quotes = await data.json();
      setQuotes(quotes);
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    fetchQuotes();
  }, []);

  return (
    <div>

    </div>
  )


export default App;
