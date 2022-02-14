import React from 'react'

function LoginPage() {
    return (
        <div>
            <label htmlFor="">Login: <input type="text" /></label>
            <br />
            <label htmlFor="">Pass: <input type="password" /></label>
            <br />
            <button>Login</button>
        </div>
    );
}

export default LoginPage;