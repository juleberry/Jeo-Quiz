import "./style.css";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [question, setQuestion] = useState([]);

  const [score, setScore] = useState(0);

  const handleIncrement = () => setScore(score + 100);
  const handleDecrement = () => setScore(score - 100);
  // must assign for reset function
  const reset = () => {
    setScore(0);
  };

  const getQuestion = async () => {
    const api_url = "https://jservice.io/api/random?count=1";
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <div className="App">
        <div id="intro">
          <h1 id="header">JEO QUIZ</h1>
        </div>

        <main className="mainText">
          Let's Play!
          <br />
          Click "Random Trivia Question" for a new question
          <br />
          <button
            id="randomBtn"
            onClick={() => {
              getQuestion();
              const ansBtn = document.getElementById("answerReveal");
              const showAns = document.getElementById("answerBox");
              ansBtn.classList.remove("hidden");
              showAns.classList.add("hidden");
              console.log("random was clicked");
            }}
          >
            Random Trivia Question
          </button>
        </main>

        <div id="mainGame">
          {question.map((question) => (
            <div key={question.id}>
              <div id="questionArea">
                <div>
                  <h2>Category:</h2>
                  <br />
                  <span className="gameTitle">{question.category.title}</span>
                </div>

                <div id="scoreArea">
                  <h2>Score: {score}</h2>
                  <section id="scores">
                    <button
                      onClick={handleIncrement}
                      id="correctAnsBtn"
                      className="scoreBtns"
                    >
                      +
                    </button>
                    <button
                      onClick={handleDecrement}
                      id="wrongAnsBtn"
                      className="scoreBtns"
                    >
                      -
                    </button>
                    <br />
                    <button onClick={reset} id="resetBtn" className="scoreBtns">
                      Reset
                    </button>
                  </section>
                </div>
              </div>

              <div id="questionBox">
                <div>
                  {/* initial functionality will increase/decrease score by 100 */}
                  <h4>
                    Value:{" "}
                    <span className="gameTitle" id="questionValue">
                      {question.value}
                    </span>
                  </h4>
                </div>
                <div>{question.question}</div>

                <div
                  id="answerReveal"
                  onClick={() => {
                    const ansBtn = document.getElementById("answerReveal");
                    const showAns = document.getElementById("answerBox");
                    showAns.classList.remove("hidden");
                    ansBtn.classList.add("hidden");
                    console.log("reveal was clicked");
                  }}
                >
                  <h3>Reveal Answer</h3>
                </div>
                <div id="answerBox" className="hidden">
                  {/* some answers have additional html in them; a possible fix would be to check answer for carat tags to determine if answer can generated as is or injected as html content */}
                  <span id="answer">
                    Answer:
                    <br /> {question.answer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div><a href="https://www.freepik.com/free-vector/led-wall-video-screen-with-glowing-dot-lights_9395692.htm#query=quiz%20show&position=2&from_view=keyword">Image by upklyak</a> on Freepik</div> */}
    </>
  );
}

export default App;
