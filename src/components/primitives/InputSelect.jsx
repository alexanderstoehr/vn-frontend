export default function InputSelect({options, selectText, selectedValueID, onChange}) {

	/*
	in parent component change the selectedValueID to the value
	of the selected option via the onChange function and set the state
	of the selectedValueID to the value of the selected option
	*/

	const firstValueInSelect = {id: 99, value: "", label: selectText} // This is the first value in the select dropdown, ID 99 fails the validation check in form validation

	let selectOptions


	if (selectText) {
		selectOptions = [firstValueInSelect].concat(options)
	} else {
		selectOptions = options
	}

	return (
		<select
			onChange={onChange}
			value={selectedValueID || selectOptions[0].id}
			className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
		>
			{selectOptions.map(option => (
				<option
					key={option.id}
					value={option.id}
					label={option.label}
				/>

			))}
		</select>
	);
}