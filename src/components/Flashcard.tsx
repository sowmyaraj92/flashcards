import "./Flashcard.css";
import type { Flashcard as FlashcardType } from "../types";

interface FlashcardProps {
  card: Pick<FlashcardType, "norwegian" | "english">;
  isFlipped: boolean;
  onCardClick: () => void;
}

function Flashcard({ card, isFlipped, onCardClick }: FlashcardProps) {
  return (
    <div className="flashcard-container" onClick={onCardClick}>
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flashcard-front">{card.norwegian}</div>
        <div className="flashcard-back">{card.english}</div>
      </div>
    </div>
  );
}

export default Flashcard; 