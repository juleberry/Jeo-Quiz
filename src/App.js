import './style.css'
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [question, setQuestion] = useState([])

  const getQuestion = async () => {
    const api_url = "https://jservice.io/api/random?count=1"
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      setQuestion(data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getQuestion()
  }, [])

  // const handleClick = () => {
  //   // const ans = document.getElementsById('answerReveal')
  //   // ans.innerText = "Answer: {question.answer}"
  //   console.log('clicked')
  // }

    return (
      <>
    <div className="App">
      <div id="intro">
      <h1 id="header">Welcome to JEOPARDY!</h1>
      </div>
      <h3 className="mainText">Score: </h3>
      <h3 className="mainText">Let's Play!</h3>
      <button onClick={() => {
        getQuestion()
        console.log('random was clicked')
      }}>Random Trivia Question</button>
    <div id="mainGame" className="container">
      {question.map(question => (
        <div key={question.id}>
          <div id="questionArea">
          <h4>Category: <span id="categoryTitle">{question.category.title}</span></h4>
          <p>Question: {question.question}</p>
          </div>
          <div id="answerReveal" onClick={() => {
            const answer = document.getElementById("answerReveal")
            console.log('reveal was clicked')
          }}><h3>Click to Reveal Answer</h3>
          </div>
      </div>))}
    </div>
    {/* toggle className between "answerReveal" and "revealed" */}
      
    </div>
    {/* <div><a href="https://www.freepik.com/free-vector/led-wall-video-screen-with-glowing-dot-lights_9395692.htm#query=quiz%20show&position=2&from_view=keyword">Image by upklyak</a> on Freepik</div> */}
    </>
  );
}

export default App;
