import React from 'react';
import { Link } from 'react-router-dom';

export default function EntryItem({ entry }) {
  return (
    <li className="entry-item pad-b-4">
      <Link to={`/entries/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</Link>
      <p className="entry-stub">{entry.body}</p>
    </li>
  );
}
