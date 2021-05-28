const Msg = ({ message }) => {
	// handling attachments
	if (message?.attachments?.length > 0) {
		return (
			<img
                src={message.attachments[0].file}
				alt="img-attachment"
				className="msg-img"
			/>
		);
	}

	return <div className="message my-msg">{message.text}</div>;
};

export default Msg;
