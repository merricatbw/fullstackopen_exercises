const Notification = ({msg}) => {
  return (
    <div className="notification-container">
      {msg !== '' ? <p className="notification">{msg}</p> : ''}
    </div>
  )
}

export default Notification;
