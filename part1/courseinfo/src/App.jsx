const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map((part) => part.exercises)} />
    </div>
  )
}

const Content = ({ parts, exercises }) => { 
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div> 
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercises }) => {
  return (
    <p> {part} {exercises} </p>
  )
}

const Total = ({ exercises }) => {
  return (
    <p>Number of exercises {exercises.reduce((a, b) => a + b, 0)}</p>
  )
}


export default App
