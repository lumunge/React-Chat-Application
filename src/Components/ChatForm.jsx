import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const ChatForm = (props) => {
	const [msg, setMsg] = useState("");

    const { chatId, creds } = props;

	const sendMsg = (e) => {
		e.preventDefault();
		const text = msg.trim();
		if (text.length > 0) sendMessage(creds, chatId, { text });
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
