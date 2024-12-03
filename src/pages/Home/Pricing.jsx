import pricingData from "../../data/content/homepage/pricingData.json"

export default function Pricing() {
    // console.log(pricingData.features)

    return (
        <>
            <section
                className="bg-white dark:bg-gray-900"
                id="pricing">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                    <div className="rounded-lg bg-white shadow dark:bg-gray-800 lg:grid lg:grid-cols-3">
                        <div className="col-span-2 p-6 lg:p-8">
                            <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                                {pricingData.title}
                            </h2>
                            <p className="text-lg font-light text-gray-500 dark:text-gray-400">
                                {pricingData.subtitle}
                            </p>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-6">
                                {pricingData.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2">
                                        <img
                                            className="h-6 w-6 text-primary-600 dark:text-primary-500"
                                            src={feature.icon}
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex bg-gray-50 p-6 text-center dark:bg-gray-700 lg:p-8">
                            <div className="w-full self-center">
                                <div className="text-5xl font-extrabold text-gray-900 dark:text-white">
                                    ${pricingData.pricingIndividual}
                                </div>
                                <div className="text-light mb-4 mt-1 text-gray-500 dark:text-gray-400">
                                    {pricingData.billingCycle}
                                </div>
                                <a
                                    href="#"
                                    className="focus:ring-bue-200 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4">
                                    {pricingData.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
