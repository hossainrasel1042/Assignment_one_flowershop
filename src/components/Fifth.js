import React from "react";
import img1 from '../Asset/Rectangle 4.png'
import img2 from '../Asset/Rectangle 5.png'
import img3 from '../Asset/Rectangle 6.png'
import img4 from '../Asset/Flower 01.png'

class Fifth extends React.Component{
render(){
    return(
        <div className="max-w-[1600px] min-w-[400px] px-[50px] sm:px-[70px] md:px-[100px] lg:px-[120px] mt-10 w-full mx-auto flex flex-col items-center">
            <h1 className="text-[#272727] font-lato font-extrabold text-[30px]">Instagram</h1>
            <p className="font-lato hidden  smplus-max:block text-[16px] text-[#272727] opacity-60 mt-8">It is a long established fact that a reader will be distracted by the readable </p>
            <p className="font-lato hidden  smplus-max:block  text-[16px] text-[#272727] opacity-60">content of a page when looking at its layout.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                <img className="w-[342px] h-auto" src={img1} alt="image-one"/>
                <img className="w-[342px] h-auto" src={img2} alt="image-two"/>
                <img className="w-[342px] h-auto" src={img3} alt="image-three"/>
                <img className="w-[342px] h-auto" src={img4} alt="image-four"/>
            </div>
        </div>
    )
}
}
export default Fifth