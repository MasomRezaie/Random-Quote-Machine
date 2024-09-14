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
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      );
      const quotes = await data.json();
      setQuotes(quotes);
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    fetchQuotes();
  }, []);

  const changeQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: '10px' }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: '10px' }} />
          </h2>
          <h4 id="author">{quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: '10px',
              transition,
            }}
            aria-label="Tweet this quote"
          >
            <FaTwitter color="black" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
            type="button"
            aria-label="Change quote"
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
