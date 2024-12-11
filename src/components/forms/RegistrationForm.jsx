import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useState } from "react"

export default function RegistrationForm({ onClose }) {
    let buttonText, introText
    const stateArray = ["getCode", "createUser", "registrationSuccessful"]
    const [formState, setFormState] = useState(stateArray[0])

    const [email, setEmail] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    if (formState === stateArray[0]) {
        buttonText = "Get Code"
        introText =
            "Please enter your email and receive your registration code."
    } else if (formState === stateArray[1]) {
        buttonText = "Create Account"
        introText = "Please enter your registration code."
    } else if (formState === stateArray[2]) {
        buttonText = "Go to your Space"
        introText = "Registration successful!"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit: ", verificationCode)
        console.log("event: ", e)
        setFormState(stateArray[1])
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px-2 pb-4 pt-2 text-sm">{introText}</div>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}>
                {formState === stateArray[0] && (
                    <InputTextLine
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                )}
                {formState === stateArray[1] && (
                    <>
                        <InputTextLine
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pointer-events-none bg-gray-300"
                        />
                        <InputTextLine
                            placeholder="Code"
                            type="number"
                            value={verificationCode}
                            onChange={(e) =>
                                setVerificationCode(e.target.value)
                            }
                        />
                        <InputTextLine
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputTextLine
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </>
                )}
                {formState === stateArray[2] && <div>Yeah, ready!</div>}
                <div className="flex items-center justify-end gap-2">
                    {formState !== stateArray[2] && (
                        <Button
                            type="button"
                            text="Cancel"
                            onClick={handleClose}
                            disabled={formState === stateArray[2]}
                        />
                    )}
                    <Button
                        type="primary"
                        text={buttonText}
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
