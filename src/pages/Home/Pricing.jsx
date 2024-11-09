export default function Pricing() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="pricing">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="bg-white rounded-lg shadow lg:grid lg:grid-cols-3 dark:bg-gray-800">
						<div className="col-span-2 p-6 lg:p-8">
							<h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
								Veenote is free for individuals
							</h2>
							<p className="text-lg font-light text-gray-500 dark:text-gray-400">
								Effective Learning has to be accessible for everyone.<br></br>
							</p>
							<div className="grid gap-4 mt-4 lg:mt-6 sm:grid-cols-2 md:grid-cols-3">
								<div className="flex items-center space-x-2">
									<svg
										className="w-6 h-6 text-primary-600 dark:text-primary-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
											clipRule="evenodd"
										></path>
									</svg>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											Unlimited Videos
										</h3>
										<p className="text-sm font-light text-gray-500 dark:text-gray-400">
											Add as many YouTube videos as you want. (More Hosts coming)
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<svg
										className="w-6 h-6 text-primary-600 dark:text-primary-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
											clipRule="evenodd"
										></path>
									</svg>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											Unlimited Notes
										</h3>
										<p className="text-sm font-light text-gray-500 dark:text-gray-400">
											Add as many notes to your videos as you want.
										</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4 mt-4 lg:mt-6 sm:grid-cols-2 md:grid-cols-3">
								<div className="flex items-center space-x-2">
									<svg
										className="w-6 h-6 text-primary-600 dark:text-primary-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
											clipRule="evenodd"
										></path>
									</svg>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											Unlimited Spaces
										</h3>
										<p className="text-sm font-light text-gray-500 dark:text-gray-400">
											Create as many spaces as you want to organize your videos.
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<svg
										className="w-6 h-6 text-primary-600 dark:text-primary-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
											clipRule="evenodd"
										></path>
									</svg>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											Forever Free
										</h3>
										<p className="text-sm font-light text-gray-500 dark:text-gray-400">
											Veenotes will always be free for individuals.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex p-6 text-center bg-gray-50 lg:p-8 dark:bg-gray-700">
							<div className="self-center w-full">
								<div className="text-5xl font-extrabold text-gray-900 dark:text-white">$0</div>
								<div className="mt-1 mb-4 text-gray-500 text-light dark:text-gray-400">per month</div>
								<a
									href="#"
									className="flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-bue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									Start now
								</a>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}