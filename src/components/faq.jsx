import Question from "./question";

function Faq () {

    return (
        <>
        <section className="px-4 md:px-14 flex flex-col gap-10">
            <h3 className="text-2xl font-semibold text-vbrown text-center font-lora">FAQ's</h3>
            <div className="flex flex-col gap-2 text-vblack">
                <Question question="Why are you Gay?" answer="Who says I'm Gay"/>
                <Question question="Why are you Gay?" answer="Who says I'm Gay"/>
                <Question question="Why are you Gay?" answer="Who says I'm Gay"/>
                <Question question="Why are you Gay?" answer="Who says I'm Gay"/>
            </div>
        </section>
        </>
    )

};

export default Faq;