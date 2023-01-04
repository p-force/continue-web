import React from 'react';

export default function AllLinks({ links }) {
  links.map((el) => console.log(el.url));
  return (
    <div className="container">
      {links.map((el) => (<div>{el.url}</div>))}
    </div>
  );
}
