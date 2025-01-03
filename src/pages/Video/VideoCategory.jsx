import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputSelect from "../../components/primitives/InputSelect.jsx"
import { useGetAllCategories } from "../../hooks/useGetAllCategories.jsx"
import { useEffect, useState } from "react"
import { useEditVideoMutation } from "../../hooks/useEditVideoMutation.jsx"
import { useParams } from "react-router-dom"

export default function VideoCategory({ videoCategory }) {
    const [categoryOptions, setCategoryOptions] = useState([]) // Array of category objects
    const [selectedCategory, setSelectedCategory] = useState(videoCategory) // Object of selected category

    const { videoId } = useParams()

    const allCategories = useGetAllCategories()
    const patchVideoCategory = useEditVideoMutation()

    useEffect(() => {
        console.log("All Categories: ", allCategories.data)
        console.log("Video category: ", videoCategory)
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

    console.log("video id: ", videoId)
    console.log("category selected: ", selectedCategory)
    console.log("video category: ", videoCategory)
    console.log("categoryOptions", categoryOptions)

    const categoryPayload = {
        id: videoId,
        video_id: videoId,
        category_id: selectedCategory.id,
    }

    const onChange = (e) => {
        // setSelectedCategory(
        //     categoryOptions.find((option) => option.id === e.target.value)
        // )
        console.log("onchange", selectedCategory, "video id: ", videoId)
        console.log(e)
        //patchVideoCategory.mutate(categoryPayload)
    }

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
