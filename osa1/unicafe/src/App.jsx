import { useState } from 'react'
import Statistics from './napit/tiedot'
import Button from './napit/nappi'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <header>
        <h2>Anna palautetta:</h2>
      </header>
      <main>
        <section>
          <Button setValue={setGood} value={good} text="hyvä" />
          <Button setValue={setNeutral} value={neutral} text="neutraali" />
          <Button setValue={setBad} value={bad} text="huono" />
        </section>

        <Statistics good={good} neutral={neutral} bad={bad} />
      </main>
    </>
  )
}

export default App