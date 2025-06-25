import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Norwegian Flashcards</h1>
      <p>Welcome! Choose an activity:</p>
      <div className="card">
        <Link to="/study" className="button study-button">
          Study Mode
        </Link>
        <Link to="/quiz" className="button quiz-button">
          Quiz Mode
        </Link>
        <Link to="/stats" className="button stats-button">
          Stats Page
        </Link>
      </div>
    </>
  );
}

export default App;
