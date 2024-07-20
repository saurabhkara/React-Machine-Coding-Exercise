import Card from "./Card";
import { useState } from "react";

export default function FAQComp() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = (id) => {
    setSelectedCard(id);
  };

  const fcqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <div>
      {fcqs.map((faq, index) => {
        return (
          <Card
            id={index}
            faq={faq}
            key={faq.question}
            selectedCard={selectedCard}
            handleSelectedCard={handleSelectedCard}
          />
        );
      })}
    </div>
  );
}
