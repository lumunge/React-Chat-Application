import ChatForm from "./ChatForm";
import MyMsg from "./MyMsg";
import OtherMsg from "./OtherMsg";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
            const keys = Object.keys(messages);
            return keys.map((key, index) => {
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

    if (!chat) return "No Chats Yet, Create New";

    return (
            <div className="chat-feed">
                    <div className="chat-title-container">
                            <div className="chat-title">{chat?.title}</div>
                            <div className="chat-subtitle">
                                Members: 
                                    {chat.people.map((person) => (
                                        <span className="users">{person.person.username}, </span>
                                    ))}
                            </div>
                    </div>
                    {renderMessages()}
                    <br />
                    <div className="message-form-container">
                            <ChatForm {...props} chatId={activeChat} />
                    </div>
            </div>
    );
};

export default ChatFeed;
