import React from 'react'

export class Practice extends React.Component {
  render() {
    return (
      <div className="practiceContainer">
        <h3>Practice</h3>
        <div className="progress">1/5</div>
        <div className="card">
          <div className="practiceTerm">What sound does a duck make?</div>
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
