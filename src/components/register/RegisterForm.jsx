'use client'

import { useState } from "react"


const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const  handleSubmit = (e) => {
        e.preventDefault()
        // Handle registration logic here
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return (
        <form onSubmit ={handleSubmit}>
        <label>Username:</label>
        <input
            name="username"
            type="text" 
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
        />  
        <label>Email:</label>
        <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
        />
        <label>Password:</label>
        <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
        />
        <label>Confirm Password:</label>
        <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
        />
        <button type="submit">Register</button>

    </form>
  )
}

export default RegisterForm

