import {ChatEngine} from 'react-chat-engine';
import {FaPowerOff} from 'react-icons/fa';
import ChatFeed from './Components/ChatFeed'
import ChatList from './Components/ChatList/ChatList';
import LoginForm from './Components/LoginForm';
import "./App.css";

const App = () => {

    const LogOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.reload();
    }

    if(!localStorage.getItem("username")) return <LoginForm/>

    return(
        <>
        <ChatEngine
			projectID="eb281dc6-eb04-4563-87b1-6500d82f2c79"
            height="99vh"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(ChatFeedProps) => <ChatFeed {...ChatFeedProps}/>}
            renderChatList={(ChatListProps) => <ChatList {...ChatListProps}/>}
		/> 
        <button className="logout" onClick={LogOut}><abbr title="log-out"><FaPowerOff/></abbr></button>
        </>
            
    )
}

export default App;