import React from 'react'
import './normalize.css'
import './App.css'

function App() {
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
            <div className="tile">
              <h4 className="cardTerm">Term goes here</h4>
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
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
