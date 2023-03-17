import React from "react";

const App = () => {
  // react fragment syntactic sugar
  return (
    <>
      <div className="main">
        <div className="container">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type="text" placeholder="Add items" />
          <button>Add task +</button>

          <ol>
            <li>buy a car</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
