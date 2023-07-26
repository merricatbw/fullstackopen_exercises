import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const randomizeSelected = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const vote = () => {
    const votesCopy = [...votes]
    votesCopy[selected]+=1
    setVotes(votesCopy)
    setMostVoted(findLargestIndex(votesCopy))
  }

  const findLargestIndex = (arr) => {
    if (arr.length === 0) return -1
    let max = arr[0]
    let maxIndex = 0

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <QuoteScore score={votes[selected]} /> 
      <div>
        <RandomButton clickHandler={randomizeSelected} />
        <VoteButton clickHandler={vote} />
      </div>
      <div>
        <h2>Highest voted anecdote</h2>
        <p>
         {anecdotes[mostVoted]}
        </p>
        <QuoteScore score={votes[mostVoted]} />
      </div>
    </div>
  )
}

const QuoteScore = ({ score }) => {
  return (
    <p>has { score } votes.</p>
  )
}

const RandomButton = ({ clickHandler }) => {
  return (
      <button onClick={clickHandler}>Random anecdote</button>
  )
}

const VoteButton = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler}>Vote</button>
  ) 
}

export default App
