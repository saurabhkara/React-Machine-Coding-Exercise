import useLocalStorage from "./useLocalStorage";

export default function CustomHook() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <h1>Custom Hook</h1>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <h3>Hello {name} !</h3>
      </div>
    </div>
  );
}
