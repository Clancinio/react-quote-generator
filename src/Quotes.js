import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import quotes from "./data";

const Quotes = () => {
  const [index, setIndex] = useState(0);

  const { text, author } = quotes[index];
  console.log(quotes);

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={"https://i.pravatar.cc/300"}
          alt={"quote"}
          className="quote-img"
        />
      </div>
      <h4 className="author">{author}</h4>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </article>
  );
};

export default Quotes;
