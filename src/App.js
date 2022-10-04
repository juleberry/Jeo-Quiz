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
    <div className="App">
      <h1 id="header">Welcome to JEOPARDY!</h1>
      <h3 class="mainText">Score: </h3>
      <h3 class="mainText">Let's Play!</h3>
    <div>
      {question.map(question => (
        <div key={question.id}>
          <h2>{question.category.title}</h2>
          <h3>{question.question}</h3>
          <h4>{question.answer}</h4>
      </div>))}
    </div>

    <button>Random Trivia Question</button>
    <div class="container mainText">
      Category
      <br />Points<br />Question<br />
      <div id="answerReveal">Click to Reveal Answer</div>
      <div id="revealed" >Revealed Answer</div>
    </div>
    </div>
  );
}

export default App;
