import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Norwegian Flashcards</h1>
      <p>Welcome! Choose an activity:</p>
      <div className="card">
        <Link to="/study">
          <button className="study-button">Study Mode</button>
        </Link>
        <Link to="/quiz">
          <button className="quiz-button">Quiz Mode</button>
        </Link>
        <Link to="/stats">
          <button className="stats-button">Stats Page</button>
        </Link>
      </div>
    </>
  );
}

export default App;
