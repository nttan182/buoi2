import { useState } from "react";
function Login(){
    const [inputUsername, setInputUsername]=useState("");
    const [inputPassword, setInputPassword]=useState("");
    const [inputIsAdmin, setInputIsAdmin]=useState(false);
    const handleDangNhap=(e)=>{
        e.preventDefault();
        console.log("username: " + inputUsername)
        console.log("password: " + inputPassword)
        console.log("isAdmin: " + inputIsAdmin)
    }
    return <form>
        <label>Username</label>
        <input type="text" name="username" value={inputUsername} onInput={e=>{setInputUsername(e.target.value)}}/>
        <label>Password</label>
        <input type="password" name="password" value={inputPassword} onInput={e=>{setInputPassword(e.target.value)}}/>
        <input type="checkbox" name="isAdmin" value={inputIsAdmin} onInput={e=>{setInputIsAdmin(!inputIsAdmin)}}/>
        <label>Is Admin</label>
        <button onClick={handleDangNhap}>Đăng nhập</button>
    </form>
}
export default Login;