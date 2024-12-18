export default function Button({
    onClick,
    text,
    type,
    iconEnd,
    iconStart,
    disabled,
}) {
    const styling =
        type === "primary"
            ? "flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            : type === "secondary"
              ? "flex items-center gap-1 text-gray-900 bg-white border-2 border-primary-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              : type === "danger"
                ? "flex items-center gap-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                : type === "danger-secondary"
                  ? "flex items-center gap-1 text-red-700 bg-white border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  : "flex items-center gap-1 text-gray-600 bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white "

    return (
        <button
            onClick={onClick}
            className={styling}
            type={type}
            disabled={disabled}
            style={{ height: "auto", alignSelf: "flex-start" }}>
            {iconStart && <span className="icon-class">{iconStart}</span>}
            {text}
            {iconEnd && <span className="icon-class">{iconEnd}</span>}
        </button>
    )
}
