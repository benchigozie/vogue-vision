function ProcessBox (processProp) {


    return (
        <>
        <div className="rounded-xl shadow-card-1 bg-vwhite px-6 py-12 flex flex-col items-center">
            <img src={processProp.img} alt="" className="w-1/3 py-3" />
            <div className="">
                <p className="text-lg font-medium py-3 text-center">{processProp.head}</p>
                <p className="text-vblack text-opacity-90">{processProp.text}</p>
            </div>
        </div>
        </>
    )
};

export default ProcessBox;