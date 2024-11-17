export default function InputSelect({options, selectText, onChange}) {
	const firstValueInSelect = {id: 99, value: "", label: selectText} // This is the first value in the select dropdown, ID 99 fails the validation check in form validation

	const selectOptions = [firstValueInSelect].concat(options);

	return (
		<select
			onChange={onChange}
			className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
		>
			{selectOptions.map(option => (
				<option
					key={option.id}
					value={option.value}
					label={option.label}
				/>

			))}
		</select>
	);
}