import React from 'react'

export class Practice extends React.Component {
  state = {
    currentIndex: 0
  }
  render() {
    const { cards } = this.props
    const { currentIndex } = this.state
    const { term = '' } = cards && cards.length && cards[currentIndex]
    return (
      <div className="practiceContainer">
        <h3>Practice</h3>
        <div className="progress">
          {currentIndex + 1}/{cards.length}
        </div>
        <div className="card">
          <div className="practiceTerm">{term}</div>
          <div className="practiceButtons">
            <button type="button" className="tertiary">
              show back
            </button>
            <div>
              <button type="button" className="secondary">
                previous
              </button>
              <button type="button" className="primary">
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
