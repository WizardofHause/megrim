import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}

export default App;
