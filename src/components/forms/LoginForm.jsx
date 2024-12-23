//
//
// ToDo: Login form validations (form fields, request status notification)
//
//

import { useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useLoginMutation } from "../../hooks/useLoginMutation.jsx"

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const redirectToSpaces = "/spaces"
    const loginGetToken = useLoginMutation(redirectToSpaces)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginGetToken.mutate({ email, password })
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
                    autoFocus
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
            {loginGetToken.isLoading && <div>Loading...</div>}
            {loginGetToken.isError && (
                <div className="text-red-400">
                    Error: {loginGetToken.error.message}
                </div>
            )}
            {loginGetToken.data && (
                <div className="text-green-400">Logged in</div>
            )}
        </div>
    )
}
