import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"

export default function LoginForm({ onClose }) {
    const handleSubmit = (e) => {
        event.preventDefault()
        console.log("submit", e)
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
                />
                <InputTextLine
                    placeholder="Password"
                    type="password"
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
        </div>
    )
}
