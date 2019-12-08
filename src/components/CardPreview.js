import React from 'react'
import { destroyCard } from '../services/cardService'

export function CardPreview(props) {
  const [isFront, setIsFront] = React.useState(true)
  function handleCardFlip() {
    setIsFront(current => !current)
  }
  function handleDelete() {
    const confirm = window.confirm(
      `Are you sure you wish to delete "${props.term}"?`
    )
    if (confirm) {
      destroyCard(props.id).then(() => {
        props.onRemove &&
          typeof props.onRemove === 'function' &&
          props.onRemove(props.id)
      })
    }
  }
  return (
    <div className={`tile ${isFront ? '' : 'back'}`}>
      <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? 'show back' : 'show front'}
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button
            type="button"
            className="secondary danger"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
