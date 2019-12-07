import React from 'react'
import './normalize.css'
import './App.css'
import { CardPreview } from './components/CardPreview'

function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    fetch('/api/card')
      .then(res => res.json())
      .then(setCards)
  }, [])
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
            {cards.map(({ id, definition, term }) => (
              <CardPreview key={id} definition={definition} term={term} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
