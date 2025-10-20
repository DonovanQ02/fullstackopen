import { useState } from 'react'

const statisticsLine = ({ text, value }) => {  
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  if (total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        {statisticsLine({ text: 'good', value: good })}
        {statisticsLine({ text: 'neutral', value: neutral })}
        {statisticsLine({ text: 'bad', value: bad })}
        {statisticsLine({ text: 'all', value: total })}
        {statisticsLine({ text: 'average', value: average })}
        {statisticsLine({ text: 'positive', value: `${positivePercentage} %` })}
      </tbody>
    </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App