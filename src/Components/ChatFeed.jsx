import ChatForm from "./ChatForm";
import MyMsg from "./MyMsg";
import OtherMsg from "./OtherMsg";

const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

	const renderMessages = () => {
		const keys = Object.keys(messages);

		return keys.map((index, key) => {
			const message = messages[key];
			const lastMessageKey = index === 0 ? null : keys[index - 1];
			const isMyMessage = userName === message.sender.username;

			return (
				<div key={`msg_${index}`}>
					<div className="message-block">
						{isMyMessage ? (
							<MyMsg message={message} />
						) : (
							<OtherMsg
								message={message}
								lastMessage={messages[lastMessageKey]}
							/>
						)}
					</div>
				</div>
			);
		});
	};

    if(!chat) return "Lodgin Chats..."

	return (
        <div className="chat-feed">
            <div className="chat-ttle">
                <h2>This is my Chat</h2>
            </div>
            {renderMessages()}
		<div className="chat-form">
			<ChatForm {...props} chatId={activeChat} />
		</div>
        </div>
	);
};

export default ChatFeed;
