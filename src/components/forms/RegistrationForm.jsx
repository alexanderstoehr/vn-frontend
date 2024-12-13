import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import {
    patchRegistrationVerifyEndpoint,
    postRegistrationEndpoint,
} from "../../api/endpoints.js"
import { apiVeenotes } from "../../api/axios.js"

export default function RegistrationForm({ onClose }) {
    let buttonText, introText
    const stateArray = ["getCode", "createUser", "registrationSuccessful"]
    const [formState, setFormState] = useState(stateArray[0])

    const [email, setEmail] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClose = () => {
        onClose()
    }

    const forwardStepStateArray = () => {
        const index = stateArray.indexOf(formState)
        if (index < stateArray.length - 1) {
            setFormState(stateArray[index + 1])
        }
    }

    const getRegCode = useMutation({
        mutationKey: "getRegCode",
        mutationFn: (email) => {
            console.log("Sending request to:", postRegistrationEndpoint)
            return apiVeenotes.post(postRegistrationEndpoint, email)
        },
        onSuccess: (data) => {
            console.log("Registration request successful:", data.data)
        },
        onError: (error) => {
            console.error("Registration request failed:", error)
        },
    })

    const postRegistration = useMutation({
        mutationKey: "postRegistration",
        mutationFn: ({ email, verificationCode, username, password }) => {
            console.log("Sending request to:", patchRegistrationVerifyEndpoint)
            return apiVeenotes.patch(patchRegistrationVerifyEndpoint, {
                email,
                code: verificationCode,
                username,
                password,
                password_repeat: password,
                first_name: "-",
                last_name: "-",
            })
        },
        onSuccess: (data) => {
            console.log("Registration request successful:", data.data)
        },
        onError: (error) => {
            console.error("Registration request failed:", error)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        if (formState === stateArray[0]) {
            getRegCode.mutate(
                { email },
                {
                    onSuccess: () => {
                        forwardStepStateArray()
                    },
                    onError: () => {
                        console.log("Error")
                    },
                }
            )
        } else if (formState === stateArray[1]) {
            postRegistration.mutate({
                email,
                verificationCode,
                username,
                password,
            })
        }
    }

    if (formState === stateArray[0]) {
        buttonText = "Get Code"
        introText =
            "Please enter your email and receive your registration code."
    } else if (formState === stateArray[1]) {
        buttonText = "Create Account"
        introText =
            "Please check your email for the registration code and enter it along with your profile information."
    } else if (formState === stateArray[2]) {
        buttonText = "Go to your Space"
        introText = "Registration successful!"
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

                {formState === stateArray[0] && (
                    <>
                        {getRegCode.isLoading && <div>Loading...</div>}
                        {getRegCode.isError && getRegCode.error && (
                            <div className="text-red-400">
                                Error: {getRegCode.error.message}
                            </div>
                        )}
                        {getRegCode.data && (
                            <div className="text-green-400">Code sent</div>
                        )}
                    </>
                )}
                {formState === stateArray[1] && (
                    <>
                        {postRegistration.isLoading && <div>Loading...</div>}
                        {postRegistration.isError && postRegistration.error && (
                            <div className="text-red-400">
                                Error: {postRegistration.error.message}
                            </div>
                        )}
                        {postRegistration.data && (
                            <div className="text-green-400">Code sent</div>
                        )}
                    </>
                )}
            </form>
        </div>
    )
}