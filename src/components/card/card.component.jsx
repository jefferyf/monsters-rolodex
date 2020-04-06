import React from 'react';
import './card.styles.css';

export const Card = props => {
  const { monster: { id, name, email } } = props;

  return (
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h3 key={id}>{name}</h3>
      <p>{email}</p>
    </div>
  )
}