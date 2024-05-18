
import { useState } from 'react';

const App = () => {
  const anecdotes = [
    "Recuerdo cuando era pequeño y era muy fan de cirstiano ronaldo pero nunca pude ser como el ",
    "ya que era muy malo para el futbol"
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      {votes[mostVotedIndex] > 0 && (
        <div>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>has {votes[mostVotedIndex]} votes</p>
        </div>
      )}
    </div>
  );
};

export default App;