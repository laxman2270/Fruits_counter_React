import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count1: 0}

  ClickedMango = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  ClickedBanana = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  render() {
    const {count, count1} = this.state
    return (
      <div className="bg-container-yellow">
        <div className="bg-container-white">
          <h1>
            Bob ate <span>{count} </span> Mangoes <span>{count1} </span> Bananas{' '}
          </h1>
          <div className="img-container">
            <img
              alt="Mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <img
              alt="Banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
          </div>
          <div className="btn-container">
            <button type="button" onClick={this.ClickedMango}>
              {' '}
              Eat Mango
            </button>
            <button type="button" onClick={this.ClickedBanana}>
              {' '}
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
