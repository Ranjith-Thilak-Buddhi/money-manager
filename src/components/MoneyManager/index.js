import './index.css'

import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem/index'

import MoneyDetails from '../MoneyDetails/index'

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
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state

    const filteredList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: filteredList})
  }

  onTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onAmountTypeInput = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const transactionType = transactionTypeOptions.find(
      eachTransactionType => eachTransactionType.optionId === optionId,
    )

    const {displayText} = transactionType

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    let balanceAmount = 0
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, transactionsList, optionId} = this.state
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    const balanceAmount = this.getBalanceAmount()

    return (
      <div className="main-container">
        <div className="profile-container">
          <div>
            <h1 className="name-text">Hi, Richard</h1>
            <p className="greetings-text">
              Welcome back to your
              <span className="money-manager-text"> Money Manger </span>
            </p>
          </div>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transaction-section">
          <div className="section-container">
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <h1 className="form-section-heading">Add Transactions</h1>
              <div className="input-container">
                <label htmlFor="titleInput" className="label">
                  TITLE
                </label>
                <input
                  placeholder="TITLE"
                  id="titleInput"
                  type="text"
                  className="input"
                  value={titleInput}
                  onChange={this.onTitleInput}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amountInput" className="label">
                  AMOUNT
                </label>
                <input
                  placeholder="AMOUNT"
                  id="amountInput"
                  type="text"
                  className="input"
                  onChange={this.onAmountInput}
                  value={amountInput}
                />
              </div>
              <div className="input-container">
                <label htmlFor="TransactionsType" className="label">
                  TYPE
                </label>
                <select
                  id="TransactionsType"
                  onChange={this.onAmountTypeInput}
                  value={optionId}
                  className="input"
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="section-container history">
            <div className="history-section">
              <h1 className="history-section-heading">History</h1>
              <div className="transaction-details-container">
                <p className="transaction-info">Title</p>
                <p className="transaction-info">Amount</p>
                <p className="transaction-info">Type</p>
              </div>
              <ul className="transactions-list-container">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onDelete={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
