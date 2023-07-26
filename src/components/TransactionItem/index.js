import './index.css'

const TransactionItem = props => {
  const {onDelete, transactionDetails} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    onDelete(id)
  }

  return (
    <li className="transaction-container">
      <p className="transaction-item">{title}</p>
      <p className="transaction-item">{amount}</p>
      <p className="transaction-item">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
