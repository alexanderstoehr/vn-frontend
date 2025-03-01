import faqData from "../../data/content/homepage/faqData.json"
import { Accordion } from "flowbite-react"

export default function () {
    return (
        <section
            className="bg-white dark:bg-gray-900"
            id="faq">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-4xl">
                    {faqData.faqSection.title}
                </h2>
                <div className="mx-auto max-w-screen-md">
                    <Accordion collapseAll>
                        {faqData.faqSection.questions.map((question, index) => (
                            <Accordion.Panel key={index}>
                                <Accordion.Title>
                                    {question.question}
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        {question.answer}
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
