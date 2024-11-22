export default function InputSelect({
    options,
    selectText,
    selectedValueID,
    onChange,
}) {
    /*
	in parent component change the selectedValueID to the value
	of the selected option via the onChange function and set the state
	of the selectedValueID to the value of the selected option
	*/

    const firstValueInSelect = { id: 99, value: "", label: selectText } // This is the first value in the select dropdown, ID 99 fails the validation check in form validation

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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500">
            {selectOptions.map((option) => (
                <option
                    key={option.id}
                    value={option.id}
                    label={option.label}
                />
            ))}
        </select>
    )
}
