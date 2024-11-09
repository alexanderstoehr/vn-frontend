import benefitsData from "../../data/content/homepage/benefitsData.json"

export default function Benefits() {
	return (
		<section className="bg-gray-50 dark:bg-gray-900" id="benefits">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{benefitsData.title}</h2>
					<p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">{benefitsData.subtitle}</p>
				</div>
				<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
					{
						benefitsData.benefits.map((benefit, index) => (
							<div key={index} className="p-6 bg-white rounded shadow dark:bg-gray-800">
								<div
									className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
									<img className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
										 src={benefit.icon} alt={benefit.title}/>
								</div>
								<h3 className="mb-2 text-xl font-bold dark:text-white">{benefit.title}</h3>
								<p className="font-light text-gray-500 dark:text-gray-400">{benefit.description}</p>
							</div>

						))}

				</div>
			</div>
		</section>
	)
}