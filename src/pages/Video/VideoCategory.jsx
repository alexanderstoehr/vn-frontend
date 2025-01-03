import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputSelect from "../../components/primitives/InputSelect.jsx"
import { useGetAllCategories } from "../../hooks/useGetAllCategories.jsx"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAddCategoryMutation } from "../../hooks/useAddCategoryMutation.jsx"

export default function VideoCategory({ videoCategory }) {
    const [categoryOptions, setCategoryOptions] = useState([]) // Array of category objects
    const [selectedCategory, setSelectedCategory] = useState(videoCategory) // Object of selected category

    const { videoId } = useParams()

    const allCategories = useGetAllCategories()
    const patchVideoCategory = useAddCategoryMutation()

    useEffect(() => {
        if (allCategories.data) {
            const catObj = allCategories.data.map((category) => ({
                id: category.id,
                label: category.category_name,
                value: category.id,
                key: category.id,
            }))
            setCategoryOptions(catObj)
            setSelectedCategory(videoCategory)
            console.log("selected category: ", selectedCategory)
        }
    }, [allCategories.data, videoCategory])

    const onChange = (e) => {
        const selectedValue = Number(e.target.value)
        const selCat = categoryOptions.find(
            (option) => option.id === selectedValue
        )

        if (selCat) {
            setSelectedCategory(selCat)

            const categoryPayload = {
                video_id: videoId,
                category_id: selCat.id,
            }

            console.log("onchange", selCat, "------video id: ", videoId)
            console.log("payload", categoryPayload)
            patchVideoCategory.mutate({
                categoryData: categoryPayload,
                videoId,
            })
        } else {
            console.error("Selected category not found")
        }
    }

    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory])

    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="mr-4 text-lg font-semibold">Video Category</div>
                <HelpLabel text="Add a category to help categorize your videos" />
            </div>
            {videoCategory && allCategories.data && (
                <InputSelect
                    options={categoryOptions}
                    onChange={onChange}
                    selectedValueID={selectedCategory.id}
                />
            )}
        </div>
    )
}
