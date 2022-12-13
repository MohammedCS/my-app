const Header = ({course}) => {
  return (
    <p>{course.name}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercise}</p>
  )
}

const Content = ({course}) => {
  const [part1, part2, part3] = course.parts;

  return (
    <div>
      <Part name={part1.name} exercise={part1.exercise} />
      <Part name={part2.name} exercise={part2.exercise} />
      <Part name={part3.name} exercise={part3.exercise} />
    </div>
  )
}

const Total = ({course}) => {
  const [part1, part2, part3] = course.parts;
  let total = part1.exercise + part2.exercise + part3.exercise;

  return (
    <p>Number of exercises = {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application develoment',
    parts: [
      {
        name: 'Fundamentas of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'state of compponent',
        exercise: 14
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
};

export default App 