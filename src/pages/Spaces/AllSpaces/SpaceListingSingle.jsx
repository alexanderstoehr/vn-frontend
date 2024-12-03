import { useEffect, useRef, useState } from "react"
import SpaceListingSingleVideo from "./SpaceListingSingleVideo.jsx"
import Button from "../../../components/primitives/Button.jsx"
import { HiArrowRight, HiPlay } from "react-icons/hi"
import classNames from "classnames"

export default function SpaceListingSingle({ space }) {
    const [scrollStatus, setScrollStatus] = useState("right")
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        const maxScrollableWidth =
            scrollContainer.scrollWidth - scrollContainer.clientWidth

        const handleScroll = () => {
            if (
                scrollContainer.scrollLeft > 0 &&
                scrollContainer.scrollLeft < maxScrollableWidth - 10
            ) {
                setScrollStatus("both")
            } else if (scrollContainer.scrollLeft === 0) {
                setScrollStatus("right")
            } else if (scrollContainer.scrollLeft >= maxScrollableWidth - 10) {
                setScrollStatus("left")
            }
        }

        const handleMouseDown = (e) => {
            setIsDragging(true)
            setStartX(e.pageX - scrollContainer.offsetLeft)
            setScrollLeft(scrollContainer.scrollLeft)
            scrollContainer.style.userSelect = "none" // Disable text selection
        }

        const handleMouseMove = (e) => {
            if (!isDragging) return
            e.preventDefault()
            const x = e.pageX - scrollContainer.offsetLeft
            const walk = (x - startX) * 2 // Adjust the scroll speed
            scrollContainer.scrollLeft = scrollLeft - walk
        }

        const handleMouseUp = () => {
            setIsDragging(false)
            scrollContainer.style.userSelect = "" // Re-enable text selection
        }

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll)
            scrollContainer.addEventListener("mousedown", handleMouseDown)
            scrollContainer.addEventListener("mousemove", handleMouseMove)
            scrollContainer.addEventListener("mouseup", handleMouseUp)
            scrollContainer.addEventListener("mouseleave", handleMouseUp)
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll)
                scrollContainer.removeEventListener(
                    "mousedown",
                    handleMouseDown
                )
                scrollContainer.removeEventListener(
                    "mousemove",
                    handleMouseMove
                )
                scrollContainer.removeEventListener("mouseup", handleMouseUp)
                scrollContainer.removeEventListener("mouseleave", handleMouseUp)
            }
        }
    }, [isDragging, startX, scrollLeft])

    return (
        <div className="z-10 mx-auto flex max-w-screen-xl flex-col gap-2 pt-8">
            <div className="flex justify-between">
                <div className="mb-2 flex w-1/2 flex-col">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-semibold text-gray-800">
                            {space.name}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-gray-400">
                            {<HiPlay />} {space.videos.length} Videos
                        </div>
                    </div>
                    <div className="text-gray-500">{space.description}</div>
                </div>

                <Button
                    className="ml-auto"
                    type="secondary"
                    text="View Space"
                    iconEnd={<HiArrowRight />}
                />
            </div>
            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="no-scrollbar flex cursor-grab gap-8 overflow-x-scroll p-4 active:cursor-grabbing">
                    {space.videos.map((video, index) => (
                        <SpaceListingSingleVideo
                            key={index}
                            video={video}
                        />
                    ))}
                </div>
                <div
                    className={classNames(
                        "pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent",
                        {
                            hidden:
                                scrollStatus !== "left" &&
                                scrollStatus !== "both",
                        }
                    )}
                />
                <div
                    className={classNames(
                        "pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent",
                        {
                            hidden:
                                scrollStatus !== "right" &&
                                scrollStatus !== "both",
                        }
                    )}
                />
            </div>
            <div className="border-b-1 mb-4 mt-8 border border-gray-300"></div>
        </div>
    )
}
