import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props

  return (
    <>
      <div className="balance-container money-container">
        <img
          className="money-type-img"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="text-container">
          <p className="amount-type-text">Your Balance</p>
          <p className="amount-text" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container money-container">
        <img
          className="money-type-img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="text-container">
          <p className="amount-type-text">Your Income</p>
          <p className="amount-text" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container  money-container">
        <img
          className="money-type-img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="text-container">
          <p className="amount-type-text">Your Expenses</p>
          <p className="amount-text" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
