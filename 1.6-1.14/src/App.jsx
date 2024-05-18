import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const promedio = (good - bad) / total || 0;
  const porcentajePositivo = (good/total) * 100 || 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>all: {total}</p>
      <p>Media: {promedio.toFixed(2)}</p>
      <p>PorcentajePositivo: {porcentajePositivo.toFixed(2)}%</p>
    </div>
  );
};



export default App