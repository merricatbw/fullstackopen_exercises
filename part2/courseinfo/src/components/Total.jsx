const Total = ({ parts }) => {
  const exerciseTotal = parts.reduce((a, b) => a + b.exercises, 0)
  console.log(exerciseTotal)
  return (
    <p><strong>Total of {exerciseTotal} exercises</strong></p> 
  )
}
export default Total
