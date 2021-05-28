const OtherMsg = ({message, lastMessage}) => {

    // const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
    if (message?.attachments?.length > 0) {
		return (
			<img
                src={message.attachments[0].file}
				alt="img-attachment"
				className="msg-img-usr"
                styles={{float: "left"}}
			/>
		);
	}
    return(
        <div className="msg-row">
        <div className="message user-msg">
            {message.text}
        </div>
        </div>
    )
}

export default OtherMsg;