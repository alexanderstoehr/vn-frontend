import HeaderInfo from "./HeaderInfo.jsx"
import { showHeaderInfo } from "../utils/options.js"
import useLogout from "../hooks/useLogout.jsx"

export default function AccountHeader() {
    const logout = useLogout() // Now this is the logout function

    const handleLogout = (event) => {
        event.preventDefault() // Prevent default link behavior
        logout() // Call the logout logic
    }

    return (
        <header>
            <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <div className="flex">
                        <a
                            href="/"
                            className="flex items-center">
                            <img
                                src="/assets/logos/veenotes-logo-lightmode.svg"
                                className="mr-3 h-6 sm:h-9"
                                alt="Veenotes Logo"
                            />
                        </a>
                        {showHeaderInfo && <HeaderInfo />}
                    </div>
                    <div className="flex items-center lg:order-2">
                        <div className="">
                            <img
                                src="/assets/images/avatar.png"
                                alt="Avatar"
                            />
                        </div>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden w-full items-center lg:flex lg:w-auto"
                        id="mobile-menu-2">
                        <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                            <li>
                                <a
                                    href="/spaces"
                                    className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                    aria-current="page">
                                    Your Spaces
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/spaces"
                                    onClick={handleLogout}
                                    className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                    aria-current="page">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
