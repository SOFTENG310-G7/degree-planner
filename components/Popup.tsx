import React from "react";
import StarRating from "./StarRating";

interface PopupProps {
    openedData: any;
    closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ openedData, closePopup }) => {
    return (
        <div
            id="popup"
            className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center w-2/3 m-auto"
        >
            <div className="border-2 border-grey-300 rounded-lg mx-[200px] my-[300px] bg-white">
                <button className="text-right w-full p-2" onClick={closePopup}>
                    x
                </button>
                <div className="flex flex-col px-10 pb-10">
                    <div className="flex justify-between">
                        <div className="text-[26px] font-bold pt-9">
                            {openedData.course_code}
                        </div>
                        <StarRating openedData={openedData}/>
                    </div>
                    <div className="text-[18px] italic text-[#3d3d3d] pb-2">
                        {openedData.title}
                    </div>
                    <hr className="py-2" />
                    <div className="pb-10">{openedData.description}</div>
                    <div className="pb-10 italic text-grey-300 ">
                        {openedData.requirement_description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;