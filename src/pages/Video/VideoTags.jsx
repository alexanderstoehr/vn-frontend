import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputTextLine from "../../components/primitives/InputTextLine.jsx"
import Tag from "../../components/primitives/Tag.jsx"

export default function VideoTags({ videoTags }) {
    const onChange = (e) => {
        console.log(e)
    }

    return (
        <div className="video-tags">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="mr-4 text-lg font-semibold">Video Tags</div>
                    <HelpLabel text="Add up to 3 tags to help categorize your videos" />
                </div>
                <InputTextLine
                    onChange={onChange}
                    value=""
                    placeholder="Add Tag"
                />
                <div className="mt-4 flex flex-wrap">
                    {videoTags.map((tag) => (
                        <Tag
                            text={tag.tag_name}
                            key={tag.id}
                            close="true"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
