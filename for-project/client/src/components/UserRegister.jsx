import React, { useState } from "react";

const UserRegister = () => {
    const [userId, setUserId] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [message, setMessage] = React.useState("")

    const handleForm = (event) => {
        event.preventDefault()

        let userData = {
            userId: userId,
            password: password
        }

        fetch("/register/", {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setMessage(data.message)
            })
    }
    
    return (
        <>
            <h1>User Register</h1>
            <form onSubmit={handleForm}>
                <label>User ID</label>
                <input type="text" name="userId" onChange={e => setUserId(e.target.value)} /><br />
                <label>Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} /><br />
                <input type="submit" value="Login Form" />
            </form>
            {message}
        </>
    )
}

export default UserRegister