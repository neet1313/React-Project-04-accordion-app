import React from "react";
import data from "./data";
import Question from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and Answers about Login</h3>
        <section className="info">
          <Question data={data} />
        </section>
      </div>
    </main>
  );
}

export default App;
