import React, { useEffect } from 'react';
import Card from './Card';

export default function All({ cards }) {
  const [allCards, setAllCards] = useState(cards || []);

  useEffect(() => {
  fetch('api/v1/all')
  });
  return (
    <div className="container">
      {cards && (cards.map((el) => (
        <div className="row gx-5">
          <Card key={el.id} el={el} />
        </div>
      )))}
    </div>
  );
}
