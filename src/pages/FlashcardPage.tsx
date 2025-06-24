import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { flashcards } from "../data/flashcards";

function FlashcardPage() {
  const { category } = useParams<{ category: string }>();

  // State to track the current card being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter flashcards to get only the ones for the current category
  const categoryCards = flashcards.filter((c) => c.category === category);

  /**
   * Advances to the next card in the deck.
   * Resets the flip state of the card by changing the key.
   */
  const handleNextCard = () => {
    if (currentIndex < categoryCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle case where no cards are found for a category
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
      <div className="flashcard-page-card-container">
        {/*
          The `key` prop is crucial here. By setting it to `currentIndex`,
          we ensure that React creates a new Flashcard component instance
          each time the card changes. This automatically resets the
          child component's internal state (e.g., the `isFlipped` state).
        */}
        <Flashcard key={currentIndex} card={card} />
      </div>
      <p>
        Card {currentIndex + 1} of {categoryCards.length}
      </p>
      <div className="flashcard-page-nav-buttons">
        <button
          onClick={handleNextCard}
          disabled={currentIndex >= categoryCards.length - 1}
          className="button next-button"
        >
          Next Card
        </button>
        <Link to="/study" className="button back-button">
          Back to Categories
        </Link>
      </div>
    </div>
  );
}

export default FlashcardPage; 