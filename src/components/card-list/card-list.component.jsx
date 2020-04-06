import React from 'react';
import './card-list.styles.css';
import { Card } from './../card/card.component';

export const CardList = props => {
  const { monsters } = props;
  return (
    <div className='card-list'>
      {monsters.map(monster => {
        const { id } = monster;
        return (
          <Card key={id} monster={monster} />
        )
      })}
    </div>
  )
}