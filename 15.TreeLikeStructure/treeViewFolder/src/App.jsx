import "./App.css";
import Folder from "./Folder";
import { files } from "./data";

function App() {
  return (
    <div>
      <h3>VS CODE Folder structure</h3>
      <Folder files={files} />
    </div>
  );
}

export default App;
