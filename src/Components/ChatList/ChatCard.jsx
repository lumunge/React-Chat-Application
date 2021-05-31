
const ChatCard = (props) => {

    const cards = props.chats;
    
    // const getChats = () => {
    //     if(!props) return <p>Loading Chat Groups</p>
    //     const chatsArr = Object.values(props);
    //     return chatsArr;
    // }

    // const chats = getChats();
    // console.log(cards);

    return(
        <div className="chat-card">
            <p>here are chats</p>
        </div>
    )
}

export default ChatCard;