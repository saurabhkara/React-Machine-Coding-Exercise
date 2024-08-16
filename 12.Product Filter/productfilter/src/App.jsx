import { useEffect, useState } from "react";
import "./App.css";
import { items } from "./item";

function App() {
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [filterItem, setFilterItem] = useState(items);
  const [activeFilter, setActiveFilter] = useState([]);

  const handleFilterButtonClick = (e) => {
    const category = e.target.id;
    if (!category) {
      return;
    }
    console.log(e.target.id);
    if (activeFilter.includes(category)) {
      //remove from active filter
      const filteredCategory = activeFilter.filter((item) => item !== category);
      setActiveFilter(filteredCategory);
    } else {
      //add into active filter
      const activeFilterCopy = [...activeFilter, category];
      setActiveFilter(activeFilterCopy);
    }
  };

  const applyFilterItem = () => {
    if (activeFilter.length) {
      const filteredItemResult = items.filter((item) =>
        activeFilter.includes(item.category)
      );
      setFilterItem(filteredItemResult);
    } else {
      setFilterItem(items);
    }
  };

  useEffect(() => {
    applyFilterItem();
  }, [activeFilter]);

  return (
    <div className="app">
      <div className="filters" onClick={handleFilterButtonClick}>
        {filters.map((item, index) => {
          return (
            <button
              key={index}
              id={item}
              className={activeFilter.includes(item) ? "selected" : null}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="product-list">
        {filterItem.map((itm, idx) => {
          return (
            <div key={idx} className="item">
              <p>{itm.name}</p>
              <p className="category">{itm.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
