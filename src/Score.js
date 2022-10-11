import { useState } from 'react';
import './style.css'

export default function Score (props) {

  const [score, setScore] = useState(0)

  const handleIncrement = () => setScore(score + 100)
  const handleDecrement = () => setScore(score - 100)
  // must assign for reset function
  const reset = () => {setScore(0)}

  return (
    <>
      <h2>Score: {score}</h2>
      <section id="scores">
        <button onClick={handleIncrement} id="correctAnsBtn" className='scoreBtns'>+</button>
        <button onClick={handleDecrement} id="wrongAnsBtn" className='scoreBtns'>-</button><br />
        <button onClick={reset} id="resetBtn" className='scoreBtns'>Reset</button>
      </section>
    </>
  )
}