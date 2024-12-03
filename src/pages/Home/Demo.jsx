import demoContent from "../../data/content/homepage/demoData.json"

export default function Demo() {
    // console.log(demoContent.demoSection.paragraphs)

    return (
        <section
            className="bg-white dark:bg-gray-900"
            id="demo">
            <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
                <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {demoContent.demoSection.title}
                    </h2>
                    {demoContent.demoSection.paragraphs.map(
                        (paragraph, index) => (
                            <p
                                key={index}
                                className="mb-4">
                                {paragraph}
                            </p>
                        )
                    )}
                    <a
                        href="#"
                        className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary-400 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        {demoContent.demoSection.ctaButton.text}
                        <svg
                            className="ml-2 mr-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>
                    </a>
                </div>
                <div className="mt-8 gap-4">
                    <img
                        className="w-full rounded-lg"
                        src={demoContent.demoSection.image}
                        alt="office content 1"
                    />
                </div>
            </div>
        </section>
    )
}
