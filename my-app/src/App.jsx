import { useState } from 'react'

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ selected, votes }) => {
  return (
    <div>
      <p>{selected} has {votes} votes</p>
    </div>
  )
}

const handleVotes = (selected, votes, setVotes) => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
  console.log(copy)
}

const TopAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes)
  const index = votes.indexOf(maxVotes)
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  console.log('Selected: '+ selected)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      {/* Display the selected anecdote */}
      <p>{anecdotes[selected]}</p>
      
      {/* Button to get the next random anecdote */}
      <Button onClick={() => setSelected(getRandomIntInclusive(0, anecdotes.length - 1))} text="next anecdote" />

      {/* Button to vote for the current anecdote*/}
      <Button onClick={() => handleVotes(selected, votes, setVotes)} text="vote" />

      {/* Show votes of selected anecdote*/}
      <Anecdote selected={selected} votes={votes[selected]} />
      <TopAnecdote anecdotes={anecdotes} votes={votes} />

    </div>
  )
}

export default App