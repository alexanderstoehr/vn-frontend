import demoData from "../../data/content/homepage/demoData.json"
import SingleDemoVideo from "../../components/SingleDemoVideo.jsx"

export default function Demo() {
    // console.log(demoContent.demoSection.paragraphs)

    return (
        <section
            className="bg-gray-50 dark:bg-gray-900"
            id="benefits">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {demoData.demoSection.title}
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        {demoData.demoSection.subtitle}
                    </p>
                </div>
                <div className="flex justify-center">
                    <SingleDemoVideo />
                </div>
            </div>
        </section>
    )
}
