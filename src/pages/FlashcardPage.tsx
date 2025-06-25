import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { flashcards } from "../data/flashcards";
import type { Flashcard as FlashcardType } from "../types";

function FlashcardPage() {
  const { category } = useParams<{ category: string }>();

  // State to track the current card being displayed
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to keep track of incorrect answers
  const [incorrectCards, setIncorrectCards] = useState<FlashcardType[]>([]);
  // State for the flip status is now managed here, in the parent component
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter flashcards to get only the ones for the current category
  const categoryCards = flashcards.filter((c) => c.category === category);

  /**
   * Handles the user's response, tracks incorrect answers, and advances to the next card.
   * @param isCorrect - Whether the user answered correctly.
   */
  const handleCardReviewed = (isCorrect: boolean) => {
    if (!isCorrect) {
      setIncorrectCards([...incorrectCards, categoryCards[currentIndex]]);
    }

    if (currentIndex < categoryCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Reset the flip state for the new card
    } else {
      // TODO: Handle end of session - for now, just log it
      console.log("End of session. Incorrect cards:", incorrectCards);
      alert("End of session!"); // Placeholder for end of session
    }
  };

  // Handle case where no cards are found for a category
  if (!categoryCards || categoryCards.length === 0) {
    return (
      <div>
        <h1>Studying: {category}</h1>
        <p>No cards found for this category.</p>
        <Link to="/study" className="button back-button">
          Back to Categories
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
          The `isFlipped` state and the click handler are now passed down as props.
          The `key` prop is no longer needed as we explicitly control component state.
        */}
        <Flashcard
          card={card}
          isFlipped={isFlipped}
          onCardClick={() => setIsFlipped(!isFlipped)}
        />
      </div>

      {/* The feedback buttons are now here, outside the Flashcard component */}
      {isFlipped && (
        <div className="feedback-buttons-container">
          <button
            className="button correct-button"
            onClick={() => handleCardReviewed(true)}
          >
            ✅ Right
          </button>
          <button
            className="button incorrect-button"
            onClick={() => handleCardReviewed(false)}
          >
            ❌ Wrong
          </button>
        </div>
      )}

      <p>
        Card {currentIndex + 1} of {categoryCards.length}
      </p>
      <div className="flashcard-page-nav-buttons">
        <Link to="/study" className="button back-button">
          Back to Categories
        </Link>
      </div>
    </div>
  );
}

export default FlashcardPage; 