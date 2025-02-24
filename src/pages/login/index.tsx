import { useContext, useState } from "react";
import { UserContext } from "../../content/userContent";

    function Login(){
        const {handleLogin} = useContext(UserContext)
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        return (
            <>
            <div>Login</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => handleLogin(email, password)}>Login</button>
            </>
        )
    }

export default Login;