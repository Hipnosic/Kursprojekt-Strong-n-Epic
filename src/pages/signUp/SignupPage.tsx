import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { signupInterface } from '../../types/UserTypes';

const defaultSignupValues: signupInterface = {
    username: "",
    password: "",
    email: "",
}

export default function SignupPage () {
    const [signupValues, setSignupValues] = useState(defaultSignupValues)
    const navigate = useNavigate()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setSignupValues({
          ...signupValues,
          [name]: value,
        });
    }

    function navigateToLogin () {
        navigate("/login")
    }
    

    async function handleSignup() {
        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupValues)
            })
            if (res.ok) {
                const newUser = await res.json();
                console.log("New User:", newUser)
                setSignupValues(defaultSignupValues)
            } else {
                console.error("Signup failed")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }
    return (
        <>
            <div className="signup-container">
                <input name="username" type="text" className="username-field" value={signupValues.username} onChange={handleChange}/>
                <input name="password" type="text" className="passsword-field" value={signupValues.password} onChange={handleChange}/>
                <button className="signup-btn" onClick={handleSignup} type="submit">Sign up</button>
                <button className="create-account" onClick={navigateToLogin}></button>
            </div>
        </>
    )
};