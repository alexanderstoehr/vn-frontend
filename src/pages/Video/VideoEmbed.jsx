export default function VideoEmbed() {
    return (
        <>
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
        </>
    )
}
