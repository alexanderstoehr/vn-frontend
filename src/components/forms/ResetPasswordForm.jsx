import { useEffect, useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"

export default function ResetPasswordForm({ onClose, setShowLoginModal }) {
    const formSteps = ["getCode", "resetPassword", "resetSuccessful"]
    const [formState, setFormState] = useState(formSteps[0])

    const [resetCode, setResetCode] = useState("")
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

    const stepThroughForm = () =>
        setFormState(formSteps[formSteps.indexOf(formState) + 1])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted.")

        if (formState === formSteps[0]) {
            console.log("send code")
            stepThroughForm()
        } else if (formState === formSteps[1]) {
            console.log("update pw")
            stepThroughForm()
        } else {
            console.log("something went outta control")
            onClose()
            setShowLoginModal(true)
        }
    }

    if (formState === formSteps[0]) {
        buttonText = "Get code"
        introText =
            "Please enter your email to receive your password reset code."
    } else if (formState === formSteps[1]) {
        buttonText = "Reset Password"
        introText =
            "Please check your email for the reset code and enter it along with your new password."
    } else {
        buttonText = "Log in now"
        introText = "Your password has been reset, you can now log in again."
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
                            placeholder="New password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </>
                )}
                <div className="flex items-center justify-end gap-2">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text={buttonText}
                    />
                </div>
            </form>
        </>
    )
}
