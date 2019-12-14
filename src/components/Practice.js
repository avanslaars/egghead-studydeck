import React from 'react'

export class Practice extends React.Component {
  state = {
    currentIndex: 0,
    isFront: true
  }

  handleCardFlip = () => {
    this.setState(state => ({ isFront: !state.isFront }))
  }

  handleNextCard = () => {
    const { cards } = this.props
    this.setState(state => ({
      currentIndex: (state.currentIndex + 1) % cards.length
    }))
  }

  handlePrevCard = () => {
    const { cards } = this.props
    this.setState(state => ({
      currentIndex: (state.currentIndex - 1 + cards.length) % cards.length
    }))
  }

  render() {
    const { cards } = this.props
    const { currentIndex, isFront } = this.state
    const { term = '', definition = '' } =
      cards && cards.length && cards[currentIndex]
    return (
      <div className="practiceContainer">
        <h3>Practice</h3>
        <div className="progress">
          {currentIndex + 1}/{cards.length}
        </div>
        <div className="card">
          <div className="practiceTerm">{isFront ? term : definition}</div>
          <div className="practiceButtons">
            <button
              type="button"
              className="tertiary"
              onClick={this.handleCardFlip}
            >
              {isFront ? 'show back' : 'show front'}
            </button>
            <div>
              <button
                type="button"
                className="secondary"
                onClick={this.handlePrevCard}
              >
                previous
              </button>
              <button
                type="button"
                className="primary"
                onClick={this.handleNextCard}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
