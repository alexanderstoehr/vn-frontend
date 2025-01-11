import { useEffect, useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"

export default function ResetPasswordForm({ onClose }) {
    const formSteps = ["getCode", "resetPassword", "resetSuccessful"]
    const [formState, setFormState] = useState(formSteps[0])

    const [resetCode, setResetCode] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const passwordResetObject = {
        code: resetCode,
        email,
        password,
        password_repeat: password,
    }

    let buttonText, introText

    //
    console.log(passwordResetObject, formState)

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted.")
        setFormState(formSteps[formSteps.indexOf(formState) + 1])
    }

    if (formState === formSteps[0]) {
        buttonText = "Get code"
        introText =
            "Please enter your email to receive your password reset code."
    } else if (formState === formSteps[1]) {
        buttonText = "Reset Password"
        introText = "Enter your new password."
    } else {
        buttonText = "Alrightey!"
        introText = "Awesome, password is reset, you can now log in again."
    }

    return (
        <>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}>
                {introText}
                {formState === formSteps[0] && (
                    <InputTextLine
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoFocus
                    />
                )}
                {formState === formSteps[1] && (
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
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            autoFocus
                        />

                        <InputTextLine
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </>
                )}
                <div className="flex justify-end gap-2">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text={buttonText}
                        onClick={
                            formState === formSteps[2]
                                ? handleClose
                                : handleSubmit
                        }
                    />
                </div>
            </form>
        </>
    )
}
