import Question from "./question";

function Faq () {

    return (
        <>
        <section className="px-4 md:px-14 flex flex-col gap-10">
            <h3 className="text-2xl font-semibold text-vbrown text-center font-lora">FAQ's</h3>
            <div className="flex flex-col gap-2 text-vblack">
                <Question question="What services do you offer?" answer="We provide a full range of Interior design services, including, Interior Decoration, Renovation Project Management, Custom Furniture Building, and Interior Design Consultations."/>
                <Question question="How involved will I be?" answer="We believe in a collaborative approach to Design. Your opinion is of  high importance at every stage of the process."/>
                <Question question="How long will my project take?" answer="The timeline will depend on the size and complexity of your project. After our initial consultation, we will give you and estimated timeline for the completion of the project."/>
                <Question question="How much do you charge?" answer="Our pricing is based on the scope and scale of the project. We offer an initial consultation to understand your needs and budget, and then we create a detailed proposal. You'll receive a breakdown of design fees, material costs, and any additional services. We can work with different budgets while maintaining high design standards."/>
            </div>
        </section>
        </>
    )

};

export default Faq;