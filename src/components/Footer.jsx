export default function Footer() {
    return (
        <footer className="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">
                <a
                    href="#"
                    className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        src="/assets/logos/veenotes-logo-lightmode.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    Veenote is an open-source platform designed to help people
                    learn more effectively.{" "}
                </p>
                <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
                    <li>
                        <a
                            href="#"
                            className="mr-4 hover:underline md:mr-6">
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#pricing"
                            className="mr-4 hover:underline md:mr-6">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#faq"
                            className="mr-4 hover:underline md:mr-6">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/alexanderstoehr/Veenotes"
                            target="_blank"
                            className="mr-4 hover:underline md:mr-6">
                            Github
                        </a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                    🥳
                </span>
            </div>
        </footer>
    )
}
