import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputTextLine from "../../components/primitives/InputTextLine.jsx"
import Tag from "../../components/primitives/Tag.jsx"
import { useEffect, useState } from "react"
import { useAddTagMutation } from "../../hooks/useAddTagMutation.jsx"
import { useParams } from "react-router-dom"
import Button from "../../components/primitives/Button.jsx"

export default function VideoTags({ videoTags }) {
    const [newTag, setNewTag] = useState("")
    const { videoId } = useParams()

    const addTag = useAddTagMutation()

    const tagData = {
        tag_name: newTag,
    }

    const handleAddTag = (tag) => {
        console.log("add tag:", tag, "video id ", videoId)
        addTag.mutate({ tagData, videoId })
        setNewTag("")
    }

    const onChange = (e) => {
        //console.log(e)
        setNewTag(e.target.value)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                handleAddTag(newTag)
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [newTag])

    const handleAddTagClick = () => {
        handleAddTag(newTag)
    }
    return (
        <div className="video-tags">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="mr-4 text-lg font-semibold">Video Tags</div>
                    <HelpLabel text="Add up to 3 tags to help categorize your videos" />
                </div>
                <div className="flex items-center gap-2">
                    <InputTextLine
                        onChange={onChange}
                        value={
                            videoTags.length >= 3
                                ? "Delete a tag to add a new one"
                                : newTag.toLowerCase()
                        }
                        placeholder="Add Tag"
                        disabled={videoTags.length >= 3}
                    />
                    <Button
                        type="primary"
                        text="Add"
                        onClick={handleAddTagClick}
                        className="my-1"
                    />
                </div>
                <div className="mt-4 flex flex-wrap">
                    {videoTags.map((tag) => (
                        <Tag
                            text={tag.tag_name}
                            key={tag.id}
                            close="true"
                            tag={tag}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
