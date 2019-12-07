import React from 'react'
import './normalize.css'
import './App.css'
import { CardPreview } from './components/CardPreview'

function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    fetch('https://adaptive-basilisk.glitch.me/api/card')
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
          <pre>{JSON.stringify(cards, null, 2)}</pre>
          <div className="gridContainer">
            <CardPreview definition="quack" term="What does a duck say?" />
            <CardPreview definition="woof" term="What does a dog say?" />
            <CardPreview definition="moo" term="What does a cow say?" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
