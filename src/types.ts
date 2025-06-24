export interface Flashcard {
  category: string;
  norwegian: string;
  english: string;
  quiz: {
    type: "multiple-choice";
    options: string[];
  };
} 