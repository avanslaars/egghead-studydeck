import React from 'react'
import { saveCard } from '../services/cardService'

export function CardForm({ onSave }) {
  const [term, setTerm] = React.useState('')
  const [definition, setDef] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    saveCard({ term, definition }).then(card => {
      clearForm()
      onSave && typeof onSave === 'function' && onSave(card)
    })
  }

  function clearForm() {
    setTerm('')
    setDef('')
  }

  function handleTermChange(event) {
    const { value } = event.target
    setTerm(value)
  }

  function handleDefChange(event) {
    const { value } = event.target
    setDef(value)
  }
  return (
    <div className="tile">
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card_term">term</label>
          <textarea id="card_term" value={term} onChange={handleTermChange} />
        </div>
        <div>
          <label htmlFor="card_definition">definition</label>
          <textarea
            id="card_definition"
            value={definition}
            onChange={handleDefChange}
          />
        </div>
        <div className="buttons">
          <button className="primary" type="submit">
            save
          </button>
          <button className="secondary" type="reset">
            cancel
          </button>
        </div>
      </form>
    </div>
  )
}
