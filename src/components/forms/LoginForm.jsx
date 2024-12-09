import { useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useMutation } from "@tanstack/react-query"
import { apiVeenotes } from "../../api/axios.js"
import { postTokenEndpoint } from "../../api/endpoints.js"

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const mutation = useMutation({
        mutationFn: (credentials) => {
            console.log("Sending request to:", postTokenEndpoint)
            return apiVeenotes.post(postTokenEndpoint, credentials)
        },
        onSuccess: (data) => {
            console.log("Login successful:", data.data)
        },
        onError: (error) => {
            console.error("Login failed:", error)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({ email, password })
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px-2 pb-4 pt-2 text-sm">
                Please enter your email or username and password to log in.
            </div>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}>
                <InputTextLine
                    placeholder="Email or Username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputTextLine
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-end gap-2">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Log in"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            {mutation.isLoading && <div>Loading...</div>}
            {mutation.isError && (
                <div className="text-red-400">
                    Error: {mutation.error.message}
                </div>
            )}
            {mutation.data && <div className="text-green-400">Logged in</div>}
        </div>
    )
}
