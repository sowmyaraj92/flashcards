import { useState } from "react";
import "./Flashcard.css";

interface FlashcardProps {
  card: {
    norwegian: string;
    english: string;
  };
}

function Flashcard({ card }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flashcard-front">{card.norwegian}</div>
        <div className="flashcard-back">{card.english}</div>
      </div>
    </div>
  );
}

export default Flashcard; 