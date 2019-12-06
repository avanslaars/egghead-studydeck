import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div>
        <header>
          <h1>StudyDeck</h1>
          <h2>Retention through repitition</h2>
        </header>
        <main>
          <h3>Your Cards</h3>
          <div>
            <div>
              <h4>Term goes here</h4>
              <div>
                <button type="button">show back</button>
                <button type="button">edit</button>
                <button type="button">delete</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
