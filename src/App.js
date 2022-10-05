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

      <main className="mainText">Let's Play!<br />Click "Random Trivia Question" for a new question</main>
      <button onClick={() => {
        getQuestion()
        const ansBtn = document.getElementById('answerReveal')
        const showAns = document.getElementById("answerBox")
        ansBtn.classList.remove('hidden')
        showAns.classList.add('hidden')
        console.log('random was clicked')
      }}>Random Trivia Question</button>

    <div id="mainGame">

      {question.map(question => (
        <div key={question.id}>

          <div id="questionArea">
          <p>
            <h2>Category:</h2><br />
            <span className="gameTitle">{question.category.title}</span>
            </p>
          
          <p>
            <h2>Score: <span className="gameTitle">0</span></h2><br />
              <button id="wrongAnsBtn">-</button>
              <button id="correctAnsBtn">+</button>
          </p>
          </div>

          <div id="questionBox">
          <p>
            <h4>Value: <span className="gameTitle">{question.value}</span></h4>
          </p>
          <div>{question.question}
          </div>

          <div id="answerReveal" onClick={() => {
            const ansBtn = document.getElementById('answerReveal')
            const showAns = document.getElementById("answerBox")
            showAns.classList.remove('hidden')
            ansBtn.classList.add('hidden')
            console.log('reveal was clicked')
          }}><h3>Reveal Answer</h3>
          </div>
          <div id="answerBox" className="hidden">
            {/* some answers have additional html in them; a possible fix would be to check answer for carat tags to determine if answer can generated as is or injected as html content */}
            <span id="answer">Answer:<br /> {question.answer}</span>
        </div>
      </div>
          
      </div>))}
    </div>
    </div>
    {/* <div><a href="https://www.freepik.com/free-vector/led-wall-video-screen-with-glowing-dot-lights_9395692.htm#query=quiz%20show&position=2&from_view=keyword">Image by upklyak</a> on Freepik</div> */}
    </>
  );
}

export default App;
