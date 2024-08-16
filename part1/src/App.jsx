import { useState } from 'react'

// const Header = (element) => {
//   return (
//     <>
//       <p>{element.course}</p>
//     </>
//   )
// }

// const Content = (element) => {
//   return (
//     <>
//       {element.content.map((c, index) => (
//         <p key={index}>{c.name}</p>
//       ))}
//     </>
//   )
// }

// const Total = (element) => {
//   let tmp = 0;
//   for (let i = 0; i < element.content.length; i++){
//     tmp += element.content[i].exercises;

//   }
//   return (
//     <>
//       <p>{tmp}</p>
//     </>
//   )
// }


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   const Display = (props) => {
//     return (
//       <div>{props.counter}</div>
//     )
//   }

//   const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }

//   const [counter, setCounter] = useState(0)
//   const addone = () => setCounter(counter + 1);
//   const minusone = () => setCounter(counter - 1)
//   const setzero = () => setCounter(0)


//   return (
//     <div>
//       <Header course={course} />
//       <Content content={[part1, part2, part3]} />
//       <Total content={[part1, part2, part3]} />

//       <Button onClick={addone} text = 'plus'/>
//       <Button onClick={minusone} text = 'minus'/>
//       <Button onClick={setzero} text = 'zero'/>
//       <Display counter={counter}/>
//     </div>
//   )
// }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addState = (counter, set, total) => {
    const handler = () => {
      set(counter + 1)
      setTotal(total + 1)
    }
    return handler
  }

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={addState(good, setGood, total)}>good</button>
      <button onClick={addState(neutral, setNeutral, total)}>neutral</button>
      <button onClick={addState(bad, setBad, total)}>bad</button>
      <h2>statistics</h2>
      good {good}
      <br></br>
      neutral {neutral}
      <br></br>
      bad {bad}
      <br></br>
      total {total}
      <br></br>
      average
      <br></br>
      positive {((100 * good) / total).toFixed(1)}%
    </div>
  )
}


export default App