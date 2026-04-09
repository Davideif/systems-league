'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function LoginForm() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false
            })

            if (!res || res.error) {
                setError(res?.error || "Invalid credentials")
                setLoading(false)
                return
            }

            router.push("/")
        } catch (err) {
            console.error(err)
            setError("Something went wrong")
            setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        setError("")
        try {
            await signIn("google", { redirect: false }, )
        } catch (err) {
            console.error(err)
            setError("Google login failed")
            setLoading(false)
        }  
    } 

    return (
        <>
        <button onClick={handleGoogleLogin} disabled={loading}>
            {loading ? "Logging in with Google..." : "Login with Google"}

        </button>
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
        </>
    )
}