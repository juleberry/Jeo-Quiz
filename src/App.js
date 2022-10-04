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

    return (
      <>
    <div className="App">
      <div id="intro">
      <h1 id="header">Welcome to JEOPARDY!</h1>
      </div>
      <h3 class="mainText">Score: </h3>
      <h3 class="mainText">Let's Play!</h3>
      <button>Random Trivia Question</button>
    <div id="mainGame" className="container">
      {question.map(question => (
        <div key={question.id}>
          <h2>Category: {question.category.title}</h2>
          <h3>Question: {question.question}</h3>
          <h3>Answer: {question.answer}</h3>
      </div>))}
    </div>
      <div id="answerReveal">Click to Reveal Answer</div>
      <div id="revealed"><h4>Revealed Answer</h4></div>
    </div>
    <div><a href="https://www.freepik.com/free-vector/led-wall-video-screen-with-glowing-dot-lights_9395692.htm#query=quiz%20show&position=2&from_view=keyword">Image by upklyak</a> on Freepik</div>
    </>
  );
}

export default App;
