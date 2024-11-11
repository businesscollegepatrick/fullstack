import StatisticLine from './tieto2'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all ? ((good - bad) / all).toFixed(3) : 0
  const positive = all ? ((good / all) * 100).toFixed(3) : 0

  return (
    <section>
      <h2>Statistiikat:</h2>
      {all ? (
        <table>
          <tbody>
            <StatisticLine text="hyvä" value={good} />
            <StatisticLine text="neutraali" value={neutral} />
            <StatisticLine text="huono" value={bad} />
            <StatisticLine text="kaikki" value={all} />
            <StatisticLine text="keskiarvo" value={average} />
            <StatisticLine text="positiivinen" value={positive} />
          </tbody>
        </table>
      ) : (
        <p>Palautetta ei ole annettu</p>
      )}
    </section>
  )
}

export default Statistics