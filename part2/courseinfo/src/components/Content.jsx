import Part from "./Part.jsx"
import Total from "./Total.jsx"

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </ul>
      <Total parts={parts} />
    </div>
  )
}

export default Content 
