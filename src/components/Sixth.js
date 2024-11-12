import React from "react";
import image from '../Asset/Rectangle 9.png'
function Button(){
    return (
        <button className="w-[180px] rounded-lg h-[60px] bg-[#E55473] text-[#fff]">
            Subscribe
        </button>
    )
}
class Sixth extends React.Component{

    render(){
        return(
            <div className=" max-w-[1600px] min-w-[400px] overflow-hidden sm:px-10 px-5 md:px-10 lg:px-[120px] mt-[80px] w-full  mx-auto flex items-center justify-center ">
                <div className="relative w-[100%] md:w-[1320px] h-[350px] flex items-center justify-center">
                    <img src={image} alt="images" className="absolute opacity-90 h-[100%] w-[100%]"/>
                    <div className="flex flex-col gap-6 z-10 items-center justify-center">
                        <h1 className="font-lato font-extrabold text-[#272727] text-[30px]">Get The Latest Deals</h1>
            <p className=" font-lato  text-[#272727] text-[16px] opacity-60">$30 coupon for first shopping</p>
            <div className="flex flex-col w-[100%] justify-center items-center lg:flex-row gap-3">
                <input name="myinput" type="email" placeholder="Email Here...." className=" px-10 rounded-lg w-[90%] md:w-[600px] h-[64px]"/>
                <Button/>
            </div>
                    </div>
                </div>
            
        </div>
        )
    }
}
export default Sixth