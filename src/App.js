import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(1)

  const handleIncreae = () => {
    setCounter(counter + 1)
  }

  console.log('re-render')

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncreae}>Increase</button>
    </div>
  );
}

export default App;
