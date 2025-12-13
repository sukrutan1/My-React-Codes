import React, { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  function handleClick() {
    setItemList((prev) => [...prev, inputItem]);
    console.log(itemList);
  }
  function handleChange(event) {
    setInputItem(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
