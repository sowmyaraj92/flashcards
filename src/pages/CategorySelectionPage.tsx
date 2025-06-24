import { Link } from "react-router-dom";
import { flashcards } from "../data/flashcards";

function CategorySelectionPage() {
  const categories = [...new Set(flashcards.map((card) => card.category))];

  return (
    <div>
      <h1>Select a Category</h1>
      <div className="card">
        {categories.map((category) => (
          <Link key={category} to={`/study/${category}`} className="button category-button">
            {category}
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/" className="button back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default CategorySelectionPage; 