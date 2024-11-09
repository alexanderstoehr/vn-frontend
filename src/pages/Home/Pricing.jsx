import pricingData from "../../data/content/homepage/pricingData.json"

export default function Pricing() {

	// console.log(pricingData.features)

	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="pricing">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="bg-white rounded-lg shadow lg:grid lg:grid-cols-3 dark:bg-gray-800">
						<div className="col-span-2 p-6 lg:p-8">
							<h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
								{pricingData.title}
							</h2>
							<p className="text-lg font-light text-gray-500 dark:text-gray-400">
								{pricingData.subtitle}
							</p>
							<div className="grid gap-4 mt-4 lg:mt-6 sm:grid-cols-2 ">

								{pricingData.features.map((feature, index) => (

										<div key={index} className="flex items-center space-x-2">
											<img
												className="w-6 h-6 text-primary-600 dark:text-primary-500"
												src={feature.icon}/>
											<div>

												<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
													{feature.title}
												</h3>
												<p className="text-sm font-light text-gray-500 dark:text-gray-400">
													{feature.description}
												</p>
											</div>
										</div>

									)
								)}


							</div>
						</div>
						<div className="flex p-6 text-center bg-gray-50 lg:p-8 dark:bg-gray-700">
							<div className="self-center w-full">
								<div
									className="text-5xl font-extrabold text-gray-900 dark:text-white">${pricingData.pricingIndividual}</div>
								<div className="mt-1 mb-4 text-gray-500 text-light dark:text-gray-400">{pricingData.billingCycle}</div>
								<a
									href="#"
									className="flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-bue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									{pricingData.cta}
								</a>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}