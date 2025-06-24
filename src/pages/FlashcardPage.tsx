import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { flashcards } from "../data/flashcards";

function FlashcardPage() {
  const { category } = useParams<{ category: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryCards = flashcards.filter((c) => c.category === category);

  const handleNextCard = () => {
    if (currentIndex < categoryCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!categoryCards || categoryCards.length === 0) {
    return (
      <div>
        <h1>Studying: {category}</h1>
        <p>No cards found for this category.</p>
        <Link to="/study">
          <button>Back to categories</button>
        </Link>
      </div>
    );
  }

  const card = categoryCards[currentIndex];

  return (
    <div>
      <h1>Studying: {category}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <Flashcard key={currentIndex} card={card} />
      </div>
      <p>
        Card {currentIndex + 1} of {categoryCards.length}
      </p>
      <div className="navigation-buttons" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handleNextCard} disabled={currentIndex >= categoryCards.length - 1} className="next-button">
          Next Card
        </button>
        <Link to="/study">
          <button className="back-button">Back to Categories</button>
        </Link>
      </div>
    </div>
  );
}

export default FlashcardPage; 