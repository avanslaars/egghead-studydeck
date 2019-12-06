import React from 'react'

export function CardPreview(props) {
  return (
    <div className="tile">
      <h4 className="cardTerm">{props.term}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary">
          show back
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button type="button" className="secondary danger">
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
