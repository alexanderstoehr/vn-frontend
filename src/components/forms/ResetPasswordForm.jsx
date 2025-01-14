import { useEffect, useState } from "react"
import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useRequestPasswordResetMutation } from "../../hooks/useRequestPasswordResetMutation.jsx"
import { usePasswordResetMutation } from "../../hooks/usePasswordResetMutation.jsx"

export default function ResetPasswordForm({ onClose, setShowLoginModal }) {
    const formSteps = ["getCode", "resetPassword", "resetSuccessful"]
    const [formState, setFormState] = useState(formSteps[0])

    const [errorMessage, setErrorMessage] = useState("")
    const [resetCode, setResetCode] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getResetCode = useRequestPasswordResetMutation()
    const resetPassword = usePasswordResetMutation()

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
        if (formState === formSteps[0]) {
            console.log("send code")

            getResetCode.mutate(email, {
                onSuccess: () => {
                    stepThroughForm()
                    setErrorMessage("")
                },

                onError: (e) => {
                    console.error("Could not request reset code: ", e)
                    setErrorMessage(
                        `We could not find a user with that email address. Contact us if you need help resetting your password.`
                    )
                },
            })

            // stepThroughForm()
        } else if (formState === formSteps[1]) {
            resetPassword.mutate(passwordResetObject, {
                onSuccess: () => {
                    stepThroughForm()
                    setErrorMessage("")
                },

                onError: () =>
                    setErrorMessage(
                        "The code is not valid. Contact us if you need help resetting your password."
                    ),
            })
        } else {
            console.log("FormState error")
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
                <div className="text-sm text-red-500">{errorMessage}</div>
            </form>
        </>
    )
}
