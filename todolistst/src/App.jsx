import React, { useState } from "react";

const App = () => {
  // react fragment syntactic sugar
  const [inputEntry, setInput] = useState("");

  //defining a function to be used as event
  const clickEvent = (e) => {
    setInput(e.target.value); //creating an event, now what we write in input is visible as li
  };
  //defining addItems
  const addItems = () => {};
  //using usestate hook
  return (
    <>
      {/* //we need state and to get state we will use hooks */}

      <div className="main">
        <div className="container">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={clickEvent} />
          <button onClick={addItems}>Add task +</button>

          <ol>
            <li>{inputEntry}</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
