import React from 'react'
import './normalize.css'
import './App.css'
import { CardPreview } from './components/CardPreview'
import { getCards } from './services/cardService'
import { CardForm } from './components/CardForm'

function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    getCards().then(setCards)
  }, [])

  function handleRemove(id) {
    setCards(existing => existing.filter(c => c.id !== id))
  }

  function handleAdd(card) {
    setCards(existing => [...existing, card])
  }

  return (
    <div>
      <div>
        <header>
          <h1>
            Study<span className="titleHighlight">Deck</span>
          </h1>
          <h2>Retention through repitition</h2>
        </header>
        <main>
          <h3>Your Cards</h3>
          <div className="gridContainer">
            <CardForm onSave={handleAdd} />
            {cards.map(({ id, definition, term }) => (
              <CardPreview
                key={id}
                id={id}
                onRemove={handleRemove}
                definition={definition}
                term={term}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
