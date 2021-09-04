import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import quotes from "./data";

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const [profileImage, setProfileImage] = useState();

  const { quote, author } = quotes[index];

  const checkNumber = (number) => {
    if (number > quotes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quotes.length - 1;
    }
    return number;
  };

  const nextQuote = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevQuote = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setProfileImage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [index]);

  return (
    <article className="review">
      <div className="img-container">
        <img src={profileImage} alt={"quote"} className="quote-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{author}</h4>
      <p className="info">{quote}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevQuote}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextQuote}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomQuote}>
        surprise me
      </button>
      <div className="quote-index">
        {index + 1} / {quotes.length}
      </div>
    </article>
  );
};

export default Quotes;
