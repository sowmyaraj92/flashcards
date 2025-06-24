import { useState } from "react";
import "./Flashcard.css";
import type { Flashcard as FlashcardType } from "../types";

interface FlashcardProps {
  card: Pick<FlashcardType, "norwegian" | "english">;
}

function Flashcard({ card }: FlashcardProps) {
  // State to manage whether the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flashcard-container"
      // Toggle the flip state when the card is clicked
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flashcard-front">{card.norwegian}</div>
        <div className="flashcard-back">{card.english}</div>
      </div>
    </div>
  );
}

export default Flashcard; 