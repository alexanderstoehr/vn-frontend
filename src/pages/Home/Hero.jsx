import heroData from '../../data/content/homepage/heroData.json';


export default function Hero() {

	const {heroSection} = heroData;

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
				<div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
					<div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
						<a href="#"
						   className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
						   role="alert">
						</a>
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">{heroSection.title}</h1>
						<p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">{heroSection.subtitle}</p>

						<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
							<a href={heroSection.ctaButtons[0].link}
							   className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
								{heroSection.ctaButtons[0].text}
								<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd"
										  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										  clipRule="evenodd"></path>
								</svg>
							</a>
							<a href={heroSection.ctaButtons[1].link}
							   className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-primary-400  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
								<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
								</svg>
								{heroSection.ctaButtons[1].text}
							</a>
						</div>

					</div>
					<div className="col-span-6">
						<img src={heroSection.image} className="dark:hidden" alt="mockup"/>
						<img src={heroSection.image} className="hidden dark:block" alt="mockup dark"/>
					</div>
				</div>
				<div className="grid gap-8 sm:gap-12 md:grid-cols-3">
					{heroSection.features.map((feature, index) => (
						<div key={index} className="flex justify-center">
							<img src={feature.icon}
								 className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"/>
							<div>
								<h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">{feature.title}</h3>
								<p className="font-light text-gray-500 dark:text-gray-400">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}