import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export default function MyTemplates({ myChecklists, setMyChecklists, user }) {
  const [checklists, setMyCheckLists] = useState(myChecklists || null);
  useEffect(() => {
    fetch(`/api/v1/${user}/myCheckLists`)
      .then((res) => res.json())
      .then((data) => { setMyChecklists(data); setMyCheckLists(data); });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {checklists ? checklists.map((el) => <TemplateCard template={el} key={el.id} />) : 'Никаких листков адаптации еще нет.'}
      </div>
    </div>
  );
}
