import React from "react";
import image from '../Asset/pnwing_4.png'
function Button(){
    return (
        <button className="w-[180px] rounded-lg h-[60px] bg-[#E55473] text-[#fff]">
            Sign Up
        </button>
    )
}
class Fourth extends React.Component {
    constructor(props) {
        super(props);   
    }
    render(){
        return(
            <div className="max-w-[1600px]  w-full min-w-[400px] mt-24 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-evenly  items-center py-8 px-5 bg-opacity-5 bg-[#E55473]">
                <div className="left_section flex flex-col lg:w-[60%] w-[100%] items-center">
                    <h1 className="font-lato text-[#272727] mt-4 font-extrabold text-[30px]">
                    Hot Deal ! Sale Up To 25% <span className="text-[#E55473]">Off</span>
                    </h1>
                    <p className="font-lato text-[#272727] mt-4 opacity-60 text-[18px] font-normal">
                    It is a long established fact that a reader will be distracted by the readable 
                                        </p>
                                        <p className="font-lato mb-4 text-[#272727] opacity-60 text-[18px] font-normal">
                                        content of a page when looking at its layout.
                                        </p>
                    <Button/>
                </div>
                <img src={image} alt="image" className="w-[318px] h-auto"/>
            </div>
        )
    }
}
export default Fourth