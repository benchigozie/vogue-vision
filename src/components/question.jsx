import { useState } from "react"

function Question (prop) {

    const [question, setQuestionState]= useState(false);
    
    const updateQuestionState = () => setQuestionState(!question);
    return (
        <>
            <div onClick={updateQuestionState} className="bg-vwhite rounded-lg font-inter">
                <div className="flex justify-between px-5 py-4">
                    <p>{prop.question}</p>
                    <span className="flex items-center">
                        {
                            question ? <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> : <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0369a1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        }
                        
                    </span>
                </div>
                <div className={`px-6 grid ${question ? "grid-rows-[1fr] opacity-100 py-3": "grid-rows-[0fr] opacity-0"} ease-in-out duration-500 transition-all overflow-hidden`}>
                    <p className="overflow-hidden">{prop.answer}</p>
                </div>
            </div>
        </>
    )
}
export default Question