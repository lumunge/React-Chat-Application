import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const ChatForm = (props) => {
	const { chatId, creds } = props;

	const [msg, setMsg] = useState("");

	const sendMsg = (e) => {
		e.preventDefault();
		const message = msg.trim();
		if (message.length > 0) sendMessage(creds, chatId, { message });
		setMsg("");
	};
    
    const handleChange = (e) => {
        setMsg(e.target.value);
        isTyping(props, chatId)
    }

	return (
        <div className="msgForm">
		<form onSubmit={sendMsg}>
				<input
					value={msg}
					onChange={handleChange}
					placeholder="Your Message Here..."
                    className="input"
                    onSubmit={handleChange}
				/>
				<input className="button" type="submit" value="Submit" />
		</form>
        </div>
	);
};

export default ChatForm;
