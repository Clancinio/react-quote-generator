import React from "react";
import Quotes from "./Quotes";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Quote Generator</h2>
          <div className="underline"></div>
        </div>
        <Quotes />
      </section>
    </main>
  );
}

export default App;
