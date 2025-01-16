import { Checkbox, Label, Sidebar } from "flowbite-react"
import { HiOutlineFolder, HiOutlineTag } from "react-icons/hi"
import { useEffect, useState } from "react"
import { useGetUsersTaxonomiesQuery } from "../../hooks/useGetUsersTaxonomiesQuery.jsx"

export default function SpacesSidebar({ setFilterObject }) {
    const [showAllCategories, setShowAllCategories] = useState(false)
    const [showAllTags, setShowAllTags] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(true)
    const [isTagOpen, setIsTagOpen] = useState(true)

    const [currentFilter, setCurrentFilter] = useState()
    const [selectedTags, setSelectedTags] = useState()
    const [selectedCategories, setSelectedCategories] = useState()

    const [userTags, setUserTags] = useState()
    const [userCategories, setUserCategories] = useState()

    const { categoriesQuery, tagsQuery } = useGetUsersTaxonomiesQuery()
    const isLoading = categoriesQuery.isLoading || tagsQuery.isLoading
    const isError = categoriesQuery.isError || tagsQuery.isError

    const handleClearAll = () => {
        console.log("clear all filters")
    }

    const handleCategoryFilter = (e) => {
        const { id, checked } = e.target
        setSelectedCategories((prevFilter) => {
            const newFilter = { ...prevFilter }
            if (checked) {
                newFilter[id] = true
            } else {
                delete newFilter[id]
            }
            setCurrentFilter((prevFilter) => ({
                ...prevFilter,
                categories: newFilter,
            }))
            return newFilter
        })
    }

    const handleTagFilter = (e) => {
        const { id, checked } = e.target
        setSelectedTags((prevTags) => {
            const newFilter = { ...prevTags }
            if (checked) {
                newFilter[id] = true
            } else {
                delete newFilter[id]
            }
            setCurrentFilter((prevFilter) => ({
                ...prevFilter,
                tags: newFilter,
            }))
            return newFilter
        })
    }

    useEffect(() => {
        console.log("Updating filter object in parent:", currentFilter)
        if (setFilterObject) setFilterObject(currentFilter)
    }, [currentFilter, setFilterObject])

    useEffect(() => {
        setUserTags(tagsQuery.data)
        setUserCategories(categoriesQuery.data)
    }, [categoriesQuery, tagsQuery])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <Sidebar className="w-1/4">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <div className="mb-4 flex flex-row justify-between">
                        <div>Filters</div>
                        <div
                            className="text-primary-800"
                            onClick={() => handleClearAll()}>
                            Clear all
                        </div>
                    </div>
                    <div className="">
                        <Sidebar.Collapse
                            className="gap-2 pl-2"
                            icon={HiOutlineFolder}
                            label="Category"
                            open={isCategoryOpen}
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                            {userCategories &&
                                userCategories
                                    .slice(
                                        0,
                                        showAllCategories
                                            ? userCategories.length
                                            : 3
                                    )
                                    .map((category, index) => (
                                        <div
                                            key={index}
                                            className="align-center gap-2 pl-3">
                                            <Checkbox
                                                key={index}
                                                id={category.id}
                                                className="text-primary-800"
                                                onChange={(e) =>
                                                    handleCategoryFilter(e)
                                                }
                                                checked={
                                                    !!(
                                                        selectedCategories &&
                                                        selectedCategories[
                                                            category.id
                                                        ]
                                                    )
                                                }
                                            />
                                            <Label
                                                className="text-md pl-2"
                                                htmlFor={category.id}>
                                                {category.category_name}
                                            </Label>
                                        </div>
                                    ))}
                            {userCategories &&
                                userCategories.length > 3 &&
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
                            {userTags &&
                                userTags
                                    .slice(0, showAllTags ? userTags.length : 3)
                                    .map((tag, index) => (
                                        <div
                                            key={index}
                                            className="align-center gap-2 pl-3">
                                            <Checkbox
                                                key={index}
                                                id={tag.id}
                                                className="text-primary-800"
                                                onChange={(e) =>
                                                    handleTagFilter(e)
                                                }
                                                checked={
                                                    !!(
                                                        selectedTags &&
                                                        selectedTags[tag.id]
                                                    )
                                                }
                                            />
                                            <Label
                                                className="text-md pl-2"
                                                htmlFor={tag.id}>
                                                {tag.tag_name}
                                            </Label>
                                        </div>
                                    ))}
                            {userTags &&
                                userTags.length > 3 &&
                                !showAllTags && (
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
