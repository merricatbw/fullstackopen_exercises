const Notification = ({ msg, isError }) => {
  const type = !isError ? "successful notification" : "error notification"
  return (
    <div className="notification-container">
      {msg !== '' ? <p className={type}>{msg}</p> : ''}
    </div>
  )
}

export default Notification;
