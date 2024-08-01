import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [imgData, setImgData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchImages = async () => {
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    const list = data.filter((item) =>
      item.data.url_overridden_by_dest.includes("jpg")
    );
    setImgData(list);
    console.log(list);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleClick = (dir) => {
    const lastIndex = imgData.length - 1;
    if (dir === "left") {
      if (index === 0) {
        setIndex(lastIndex);
      } else {
        setIndex((prev) => prev - 1);
      }
    } else {
      if (index === lastIndex) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const sid = setInterval(() => {
      handleClick("right");
    }, 3000);
    return () => {
      clearInterval(sid);
    };
  }, [index]);

  return (
    <div className="app">
      <button onClick={() => handleClick("left")}>{"<"}</button>
      <img
        src={imgData[index]?.data.url}
        alt="image not found"
        className="img"
      />
      <button className="right" onClick={() => handleClick("right")}>
        {">"}
      </button>
    </div>
  );
}

export default App;
