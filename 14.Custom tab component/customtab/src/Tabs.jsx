import React, { useEffect, useState } from "react";

export default function Tabs(props) {
  const [headers, setHeaders] = useState([]);
  const [contentMap, setContentMap] = useState({});
  const [active, setActive] = useState("");
  const { children } = props;

  useEffect(() => {
    const header = [];
    const map = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) {
        return;
      }
      const { title } = element.props;
      header.push(title);
      map[title] = element.props.children;
    });

    setHeaders(header);
    setActive(header[0]);
    setContentMap(map);
  }, [props, children]);

  const handleClickButton = (e) => {
    const { id } = e.target;
    if (id === "") {
      return;
    }
    setActive(id);
  };

  return (
    <div>
      <div className="header">
        <div className="innerHeader" onClick={handleClickButton}>
          {headers.map((item, key) => {
            return (
              <button
                key={key}
                id={item}
                className={active === item ? "selected" : null}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {Object.keys(contentMap).map((key, index) => {
          if (key === active) {
            return <div key={index}>{contentMap[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
