import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [shoppingData, setShoppigData] = useState([]);
  const [pickedList, setPickedList] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const fetchFood = async (food) => {
    let url = `https://api.frontendeval.com/fake/food/${food}`;
    const res = await fetch(url);
    const result = await res.json();
    setShoppigData(result);
  };

  useEffect(() => {
    if (inputData.length > 1) {
      fetchFood(inputData);
    }
  }, [inputData]);

  const handleShoppingList = (e) => {
    const index = e.target.getAttribute("data-id");
    const item = shoppingData[index];
    const obj = {
      id: Date.now(),
      value: item,
      isDone: false,
    };
    setPickedList((prev) => [...prev, obj]);
    setInputData("");
    setShoppigData([]);
  };

  const handleLeftButton = (id) => {
    console.log(id);
    const pickedListCopy = pickedList;
    const result = pickedListCopy.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    console.log(result);
    setPickedList(result);
  };

  const handleDelete = (id) => {
    console.log("function clicked");
    const bucketListCopy = pickedList;
    const result = bucketListCopy.filter((item) => item.id !== id);
    console.log(result);
    setPickedList(result);
  };

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <div>
        <input
          placeholder="Search here"
          value={inputData}
          onChange={handleInputChange}
        />
      </div>
      {inputData.length >= 2 && (
        <div className="shopping-list" onClick={handleShoppingList}>
          {shoppingData.map((item, index) => {
            return (
              <div key={item} className="product" data-id={index}>
                {item}
              </div>
            );
          })}
        </div>
      )}
      <div className="bucket">
        {pickedList.map((item, index) => {
          return (
            <div key={index} className="bucket-list">
              <button
                className={`button`}
                onClick={() => handleLeftButton(item.id)}
              >
                ✓
              </button>
              <div className={item.isDone ? "strike" : "text"}>
                {item.value}
              </div>
              <button className="button" onClick={() => handleDelete(item.id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
