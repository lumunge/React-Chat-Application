import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { FaTelegramPlane, FaPaperclip } from "react-icons/fa";

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
		isTyping(props, chatId);
	};

	const handleUpload = (e) => {
		sendMessage(creds, chatId, { files: e.target.files, text: "" });
	};

	return (
		<div className="msgForm">
			<form onSubmit={sendMsg}>
				<input
					type="text"
					value={msg}
					onChange={handleChange}
					placeholder="Your Message Here..."
					onSubmit={handleChange}
				/>
				<label htmlFor="upload-btn">
					<span className="image-button">
						<FaPaperclip className="upload-icon" />
					</span>
				</label>
				<input
					id="upload-btn"
					type="file"
					multiple="false"
					onChange={handleUpload}
					style={{ display: "none" }}
				/>
				<button type="submit" className="submit-btn">
					<FaTelegramPlane />
				</button>
			</form>
		</div>
	);
};

export default ChatForm;
