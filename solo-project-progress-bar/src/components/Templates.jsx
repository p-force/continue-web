import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export default function Templates({ checklists, setChecklists }) {
  const [allChecklists, setMyChecklists] = useState(checklists || null);
  useEffect(() => {
    fetch('/api/v1/allCheckLists')
      .then((res) => res.json())
      .then((data) => { setMyChecklists(data); setChecklists(data); });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {allChecklists ? allChecklists.map((el) => <TemplateCard template={el} key={el.id} />) : 'Никаких листков адаптации еще нет.'}
      </div>
    </div>
  );
}
