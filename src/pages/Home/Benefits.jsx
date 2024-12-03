import benefitsData from "../../data/content/homepage/benefitsData.json"

export default function Benefits() {
    return (
        <section
            className="bg-gray-50 dark:bg-gray-900"
            id="benefits">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {benefitsData.title}
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        {benefitsData.subtitle}
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {benefitsData.benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded bg-white p-6 shadow dark:bg-gray-800">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <img
                                    className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                                    src={benefit.icon}
                                    alt={benefit.title}
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {benefit.title}
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
