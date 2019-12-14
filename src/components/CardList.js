import React from 'react'
import { Link } from '@reach/router'
import { CardForm } from './CardForm'
import { CardPreview } from './CardPreview'

export function CardList({ cards, onAdd, onRemove, onUpdate }) {
  return (
    <div>
      <h3>Your Cards</h3>
      <div className="practiceCTA">
        <Link to="/practice">practice deck</Link>
      </div>
      <div className="gridContainer">
        <CardForm onSave={onAdd} />
        {cards.map(card => (
          <CardPreview
            key={card.id}
            {...card}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}
