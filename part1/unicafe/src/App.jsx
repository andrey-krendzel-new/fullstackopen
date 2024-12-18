import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <tr>
    <td>
      {text}:
    </td>
    <td>
      {value}
    </td>
    </tr>
  )
}

const Statistics = ({all, good, neutral, bad}) => {
  if (all === 0) {
    return(<p>No feedback given</p>)
  } else {
    return(
      <div>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={(good*1 + bad * -1)/all} />
    <StatisticLine text="positive" value={good/all*100 + "%"} />
      </div>)
  }
}


const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h2>statistics</h2>
      <Statistics all={all} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App