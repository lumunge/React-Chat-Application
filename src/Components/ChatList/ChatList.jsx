import ChatCard from './ChatCard';
import NewChatForm from './NewChatForm';
import './ChatListStyles.css';

const ChatList = (props) => {
    if(!props) return <p>Loading list</p>
    const list = Object.values(props.chats);
    // console.log(list);


    return(
        <div className="chat-list">
            <div className="chat-card-container">
                <ChatCard
                    chats={list}
                />
            </div>
            <div className="new-chat-form">
                <NewChatForm/>
            </div>
        </div>
    )
}

export default ChatList;