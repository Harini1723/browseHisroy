import './index.css'

const HistoryItem = props => {
  const {userDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-item">
      <div className="user-card-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="profile-pic" alt="domain logo" />
        <p className="para1">{title}</p>
        <p className="para2">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
