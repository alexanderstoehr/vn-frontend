//
//
// ToDo: Login form validations (form fields, request status notification)
//
//

import { useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useMutation } from "@tanstack/react-query"
import { apiVeenotes } from "../../api/axios.js"
import { postTokenEndpoint } from "../../api/endpoints.js"
import { useUser } from "../../context/UserContext.jsx"
import { useNavigate } from "react-router-dom"

export default function LoginForm({ onClose }) {
    const { setSessionUser } = useUser()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getToken = useMutation({
        mutationFn: (credentials) => {
            console.log("Sending request to:", postTokenEndpoint)
            return apiVeenotes.post(postTokenEndpoint, credentials)
        },
        onSuccess: (data) => {
            console.log(
                data.data.user.id,
                data.data.user.username,
                data.data.access
            )
            setSessionUser(
                data.data.user.id,
                data.data.user.username,
                data.data.access
            )
            navigate("/spaces")
        },
        onError: (error) => {
            console.error("Login failed:", error)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        getToken.mutate({ email, password })
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
            {getToken.isLoading && <div>Loading...</div>}
            {getToken.isError && (
                <div className="text-red-400">
                    Error: {getToken.error.message}
                </div>
            )}
            {getToken.data && <div className="text-green-400">Logged in</div>}
        </div>
    )
}
