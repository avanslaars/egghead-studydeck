import React from 'react'

export function CardForm(props) {
  const [term, setTerm] = React.useState('')
  const [def, setDef] = React.useState('')

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
      <form>
        <div>
          <label htmlFor="card_term">term</label>
          <textarea id="card_term" value={term} onChange={handleTermChange} />
        </div>
        <div>
          <label htmlFor="card_definition">definition</label>
          <textarea
            id="card_definition"
            value={def}
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
