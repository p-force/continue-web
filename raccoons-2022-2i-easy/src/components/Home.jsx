import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Home({ cards, userId, user }) {
  const [allCards, setAllCards] = useState(cards || []);
  const [count, setCount] = useState({ have: 0, havent: 0 });
  const [upd, setCardUpdate] = useState();

  useEffect(() => {
    fetch('/api/v1/cards')
      .then((res) => res.json())
      .then((data) => {
        setCount(data); setAllCards(data.cards);
      });
  }, [upd]);
  return (
    <div className="container px-4 text-center">
      {user
        ? (cards.map((el) => (
          <div className="row gx-5">
            <Card key={el.id} el={el} setCardUpdate={setCardUpdate} />
          </div>
        )))
        : (
          <>
            <div>
              Всего сотрудников:
              {count.have}
              {' '}
              { }
            </div>
            <div>
              Ожидающих собеседование:
              {' '}
              {count.havent}
            </div>
          </>
        )}
    </div>

  );
}
