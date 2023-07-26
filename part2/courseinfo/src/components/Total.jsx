const Total = ({ parts }) => {
  const exerciseTotal = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0)
  return (
    <p><strong>Total of {exerciseTotal} exercises</strong></p> 
  )
}
export default Total
