export default function InputTextArea({
    type,
    placeholder,
    value,
    onChange,
    className,
    rows,
}) {
    return (
        <textarea
            type={type}
            placeholder={placeholder}
            value={value}
            rows={rows}
            onChange={onChange}
            className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500 ${className}`}
        />
    )
}
