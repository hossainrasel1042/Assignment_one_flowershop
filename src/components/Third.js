import React from "react";
import group_57 from '../Asset/Group 57.png'
import group_58 from '../Asset/Group 58.png'
import group_59 from '../Asset/Group 59.png'
function Part({image,title}){
    return(
        <div className="h-[147px] flex flex-col items-center gap-5 mx-7 justify-center p-3">
            <img src={image} alt="Icons" className="h-[70px] w-[70px]"></img>
            <p className="text-[16px] text-[rgba(39, 39, 39)] opacity-80 font-lato font-semibold">{title}</p>
        </div>
    )
}
class Third extends React.Component{
    render(){
        return (
            <div className="max-w-[1660px] min-w-[400px] mx-auto mt-20  w-full flex items-center justify-center">
                <div className="w-[80%] rounded-[10px]  py-5 bg-[#272727] bg-opacity-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center">
                   <Part image={group_57} title={"Same Day Delivery. Click & Collect."} />
                   <Part image={group_58} title={"Fresh Flowers. Local Growers."}/>
                   <Part image={group_59} title={"24/7 Free Support."}/>
                </div>
            </div>
        )
    }
}

export default Third;