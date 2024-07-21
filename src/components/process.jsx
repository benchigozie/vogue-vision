import ProcessBox from "./processbox";

function Process () {

    
    return (
        <>
        <section className="flex flex-col">
            <div className="font-lora">
                <p children className="text-2xl font-semibold text-vbrown text-center">Our Process</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 alg:grid-cols-4 gap-4 px-6">
            <ProcessBox img="src/assets/images/phone-call.png" head="Book A Call" text="It all starts with a call to understand your vision and to know where we come in. This is the first to designing your dreamhome."/>
            <ProcessBox img="src/assets/images/paint-brush.png" head="Design Concept" text="It all starts with a call to understand your vision and to know where we come in. This is the first to designing your dream home." />
            <ProcessBox img="src/assets/images/support.png" head="Design Installation" text="It all starts with a call to understand your vision and to know where we come in. This is the first to designing your dream home." />
            <ProcessBox img="src/assets/images/smile (2).png" head="The Dream Day" text="It all starts with a call to understand your vision and to know where we come in. This is the first to designing your dream home." />
            </div>
        </section>
        </>
    )
};

export default Process;