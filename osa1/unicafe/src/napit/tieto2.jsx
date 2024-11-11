const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}: </td>
        <td>
          {value} {text === 'positiivinen' ? '%' : ''}
        </td>
      </tr>
    )
  }
  
  export default StatisticLine