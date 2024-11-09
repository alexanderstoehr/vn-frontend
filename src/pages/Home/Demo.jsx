import demoContent from "../../data/content/homepage/demoData.json";

export default function Demo() {

	// console.log(demoContent.demoSection.paragraphs)

	return (
		<section className="bg-white dark:bg-gray-900" id="demo">
			<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
				<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{demoContent.demoSection.title}</h2>
					{demoContent.demoSection.paragraphs.map((paragraph, index) => (
						<p key={index} className="mb-4">{paragraph}</p>
					))
					}
					<a href="#"
					   className="inline-flex justify-center items-center mt-6 py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-primary-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
						{demoContent.demoSection.ctaButton.text}
						<svg className="mr-2 ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								  d="M19 12H5m14 0-4 4m4-4-4-4"/>
						</svg>

					</a>
				</div>
				<div className="gap-4 mt-8">
					<img className="w-full rounded-lg" src={demoContent.demoSection.image}
						 alt="office content 1"/>
				</div>
			</div>
		</section>
	);
}