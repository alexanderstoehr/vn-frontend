import React, { useEffect, useRef } from "react"
import { initializeEditor } from "../../utils/editor"
import video from "../../data/dummyData/demoVideo.json"
import {
    HiArrowRight,
    HiOutlineBookmark,
    HiOutlineCalendar,
    HiOutlineFolder,
    HiOutlineLightBulb,
    HiOutlineTag,
    HiPlus,
} from "react-icons/hi"
import Button from "../../components/primitives/Button.jsx"
import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputTextLine from "../../components/primitives/InputTextLine.jsx"
import InputSelect from "../../components/primitives/InputSelect.jsx"
import videoCategories from "../../data/dummyData/videoCategories.json"
import Tag from "../../components/primitives/Tag.jsx"
import Note from "./Note.jsx"

export default function Video() {
    const noteDescriptionRef = useRef(null)

    useEffect(() => {
        if (noteDescriptionRef.current) {
            const editor = initializeEditor(noteDescriptionRef.current)

            return () => {
                editor.destroy()
            }
        }
    }, [])

    return (
        <div>
            <div className="mx-auto flex max-w-screen-xl flex-col gap-4 pt-8">
                <div className="flex justify-between text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-400">
                    <div className="">
                        <div className="">{video.title}</div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-row items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                <HiOutlineCalendar className="h-4 w-4 text-gray-500" />
                                {video.created}
                            </div>
                            <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <HiOutlineBookmark className="h-4 w-4 text-gray-500" />
                                {video.notes.length} Notes
                            </div>
                            <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <HiOutlineFolder className="h-4 w-4 text-gray-500" />
                                {video.category}
                            </div>
                            <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <HiOutlineTag className="h-4 w-4 text-gray-500" />
                                {video.tags.map((tag) => tag.name).join(", ")}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Button
                            iconStart={<HiOutlineLightBulb />}
                            text="Shortkeys"
                            type="secondary"
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex w-2/3 flex-col gap-8">
                        <div className="relative h-0 w-full pb-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/SqcY0GlETPk?si=IoUeiCrkUBvlnYXI?rel=0&modestbranding=1&showinfo=0&controls=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute left-0 top-0 h-full w-full"></iframe>
                        </div>
                        <div>
                            <div className="">
                                <div className="flex flex-col">
                                    <HelpLabel text="Your current Note:" />
                                    <div className="mb-4 text-lg font-semibold">
                                        Passing Functions Via Props
                                        (Placeholder)
                                    </div>
                                </div>
                                <div className="">
                                    <textarea
                                        id="noteDescription"
                                        ref={noteDescriptionRef}
                                        className="min-h-96 w-full"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-col gap-8">
                        <div>
                            <div className="mb-4 flex items-center">
                                <Button
                                    iconStart={<HiPlus />}
                                    text="Add Note"
                                    type="primary"
                                    className="mr-4 mt-2"
                                />
                                <HelpLabel text="Add a note at the current time" />
                            </div>
                            <div className="">
                                <div className="mr-4 text-lg font-semibold">
                                    Your Notes
                                </div>
                                <div className="rounded-xl border border-gray-300">
                                    {video.notes.map((note, index) => (
                                        <Note
                                            note={note.note}
                                            key={note.id}
                                            active={note.active}
                                            time={note.time}
                                            isFirst={index === 0}
                                            isLast={
                                                index === video.notes.length - 1
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <div className="mr-4 text-lg font-semibold">
                                            Video Tags
                                        </div>
                                        <HelpLabel text="Add up to 3 tags to help categorize your videos" />
                                    </div>
                                    <InputTextLine
                                        value=""
                                        placeholder="Add Tag"
                                    />
                                    <div className="mt-4 flex flex-wrap">
                                        {video.tags.map((tag) => (
                                            <Tag
                                                text={tag.name}
                                                key={tag.id}
                                                close="true"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <div className="mr-4 text-lg font-semibold">
                                            Video Category
                                        </div>
                                        <HelpLabel text="Add a category to help categorize your videos" />
                                    </div>
                                    <InputSelect
                                        options={videoCategories.categories}
                                        selectedValueID="3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
