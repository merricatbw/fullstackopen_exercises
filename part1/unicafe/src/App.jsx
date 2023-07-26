import {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good+1)}
  const handleBad = () => {setBad(bad+1)}
  const handleNeutral = () => {setNeutral(neutral+1)}

  const anyFeedback = () => {
    if (good === 0 && neutral === 0 && bad === 0) return false
    return true
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <FeedbackButton text="good" func={handleGood} /> 
        <FeedbackButton text="neutral" func={handleNeutral} />
        <FeedbackButton text="bad" func={handleBad} />
      </div>
      {anyFeedback() ? <Statistics feedback={{good: good, neutral: neutral, bad: bad}} /> : <p>No feedback given</p>}
    </div>
  )
}

const FeedbackButton = ({ text, func }) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

const Statistics = ({ feedback }) => {
  const total = [feedback.good, feedback.neutral, feedback.bad].reduce((a, b) => a + b, 0)
  const average = (feedback.good - feedback.bad) / total
  const positivePercentage = (feedback.good / total) * 100
  return (
    <div>
      <h2>statistics</h2>        
      <table>
        <Statistic text="Good" count={feedback.good} />
        <Statistic text="Neutral" count={feedback.neutral} />
        <Statistic text="Bad" count={feedback.bad} />
        <Statistic text="All" count={total} />
        <Statistic text="Average" count={isNaN(average) ? 0 : average.toFixed(2)} />
        <Statistic text="Positive" count={isNaN(positivePercentage)? 0 : positivePercentage.toFixed(2)} symbol="%" />

      </table>
    </div>

  ) 
}

const Statistic = ({ text, count, symbol }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}{symbol}</td>
    </tr>
  )
}

export default App
