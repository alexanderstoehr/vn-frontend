import { Checkbox, Label, Sidebar } from "flowbite-react"
import { HiOutlineFolder, HiOutlineTag } from "react-icons/hi"
import spaceTax from "../../data/dummyData/allSpaceTax.json"
import { useState } from "react"

export default function SpacesSidebar() {
    const [showAllCategories, setShowAllCategories] = useState(false)
    const [showAllTags, setShowAllTags] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(true)
    const [isTagOpen, setIsTagOpen] = useState(true)

    return (
        <Sidebar className="w-1/4">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <div className="mb-4 flex flex-row justify-between">
                        <div>Filters</div>
                        <div className="text-primary-800">Clear all</div>
                    </div>
                    <div className="">
                        <form className="mx-auto max-w-md">
                            <label
                                htmlFor="default-search"
                                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="Search Videos"
                                    required
                                />
                            </div>
                        </form>

                        <Sidebar.Collapse
                            className="gap-2 pl-2"
                            icon={HiOutlineFolder}
                            label="Category"
                            open={isCategoryOpen}
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                            {spaceTax.categories
                                .slice(
                                    0,
                                    showAllCategories
                                        ? spaceTax.categories.length
                                        : 3
                                )
                                .map((category, index) => (
                                    <div
                                        key={index}
                                        className="align-center gap-2 pl-3">
                                        <Checkbox
                                            key={index}
                                            id={category.name}
                                            className="text-primary-800"
                                        />
                                        <Label
                                            className="text-md pl-2"
                                            htmlFor={category.name}>
                                            {category.name}
                                        </Label>
                                    </div>
                                ))}
                            {spaceTax.categories.length > 3 &&
                                !showAllCategories && (
                                    <Sidebar.Item
                                        className="cursor-pointer text-sm font-bold text-primary-800"
                                        onClick={() =>
                                            setShowAllCategories(true)
                                        }>
                                        View All
                                    </Sidebar.Item>
                                )}
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            className="gap-2 pl-2"
                            icon={HiOutlineTag}
                            label="Tag"
                            open={isTagOpen}
                            onClick={() => setIsTagOpen(!isTagOpen)}>
                            {spaceTax.tags
                                .slice(
                                    0,
                                    showAllTags ? spaceTax.tags.length : 3
                                )
                                .map((tag, index) => (
                                    <div
                                        key={index}
                                        className="align-center gap-2 pl-3">
                                        <Checkbox
                                            key={index}
                                            id={tag.name}
                                            className="text-primary-800"
                                        />
                                        <Label
                                            className="text-md pl-2"
                                            htmlFor={tag.name}>
                                            {tag.name}
                                        </Label>
                                    </div>
                                ))}
                            {spaceTax.tags.length > 3 && !showAllTags && (
                                <Sidebar.Item
                                    className="cursor-pointer text-sm font-bold text-primary-800"
                                    onClick={() => setShowAllTags(true)}>
                                    View All
                                </Sidebar.Item>
                            )}
                        </Sidebar.Collapse>
                    </div>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
