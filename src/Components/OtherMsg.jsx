const OtherMsg = ({message, lastMessage}) => {

    // const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        <div className="msg-row">
        <div className="message user-msg">
            {message.text}
        </div>
        </div>
    )
}

export default OtherMsg;