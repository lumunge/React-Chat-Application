import { useState } from "react";
import axios from "axios";
import "../App.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");


    // login function
	const handleSubmit = async (e) => {
        e.preventDefault();
        const Auth = {
            "Project-ID": "eb281dc6-eb04-4563-87b1-6500d82f2c79",
            "User-Name": username,
            "User-Secret": password
        };

        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: Auth,
            })
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            // reload to chat page
            window.location.reload();
            setError('');
        } catch (error) {
            setError("An Error Occured Consult Admin")
        }
    };

	return (
		<div className="login-form">
			<form onSubmit={handleSubmit}>
			<h4>Enter details to start Chat</h4>
				<div className="input-container">
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username..."
					/>
				</div>
				<div className="input-container">
                <input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password..."
					/>
                </div>
                    <button type="submit">Start Chat</button>
			</form>
            <p className="error">{error}</p>
		</div>
	);
};

export default LoginForm;