import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputSelect from "../../components/primitives/InputSelect.jsx"

export default function VideoCategory({ videoCategories }) {
    const onChange = (e) => {
        console.log(e)
    }

    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="mr-4 text-lg font-semibold">Video Category</div>
                <HelpLabel text="Add a category to help categorize your videos" />
            </div>
            <InputSelect
                options={videoCategories.categories}
                selectedValueID="3"
                onChange={onChange}
            />
        </div>
    )
}
