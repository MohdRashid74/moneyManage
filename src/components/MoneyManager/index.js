import {Component} from 'react'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="image-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="pargraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="small-container">
          <div className="first-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="image-balance"
            />
            <div className="heading-container">
              <p className="paragraph1">
                Your Balance <br />
                <span className="span1">Rs 0</span>
              </p>
            </div>
          </div>
          <div className="second-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="Income"
              className="image-balance"
            />
            <p className="paragraph1">
              Your Income <br />
              <span className="span1">Rs 0</span>
            </p>
          </div>
          <div className="third-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="image-balance"
            />
            <p className="paragraph1">
              Your Expenses <br />
              <span className="span1">Rs 0</span>
            </p>
          </div>
        </div>

        <div className="input-result-container">
          <div className="input-container">
            <h1 className="heading2">Add Transaction</h1>
            <form className="form">
              <label className="label-title" htmlFor="input-title">
                TiTLE
              </label>
              <input
                type="search"
                className="input"
                id="input-title"
                onChange={this.inputChangeTitle}
              />
              <label className="label-Amount" htmlFor="input-Amount">
                AMOUNT
              </label>
              <input
                type="search"
                className="input"
                id="input-Amount"
                onChange={this.inputAmount}
              />
              <label className="label-Type" htmlFor="input-Type">
                TYPE
              </label>
              <select
                className="select"
                id="input-Type"
                onChange={this.selectItem}
              >
                <option>Income</option>
                <option>Expenses</option>
              </select>
              <button className="button">Add</button>
            </form>
          </div>
          <div className="result-container">
            <h1 className="heading2">History</h1>
            <ul className="un-list"></ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
