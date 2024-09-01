/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Folder({ files }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div>
        {files.isFolder ? (
          <button onClick={() => setIsShown(!isShown)}>{">"}</button>
        ) : (
          <div />
        )}
        {files.name}
      </div>
      {files.isFolder &&
        isShown &&
        files.children.map((item, index) => {
          return (
            <div style={{ paddingLeft: "20px" }} key={index}>
              <Folder files={item} />
            </div>
          );
        })}
    </div>
  );
}
