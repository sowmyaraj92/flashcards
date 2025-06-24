import { Link } from "react-router-dom";
import { flashcards } from "../data/flashcards";

function CategorySelectionPage() {
  const categories = [...new Set(flashcards.map((card) => card.category))];

  return (
    <div>
      <h1>Select a Category</h1>
      <div className="card">
        {categories.map((category) => (
          <Link key={category} to={`/study/${category}`}>
            <button className="category-button">{category}</button>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/">
            <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default CategorySelectionPage; 