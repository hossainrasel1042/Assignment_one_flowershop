import React from "react";
class Footer extends React.Component{
    render(){
        return (
            <div className="bg-[#111010] max-w-[1600px] min-w-[400px] gap-5 mt-[80px] mx-auto flex flex-col items-center justify-center w-full h-[300px]">
                <h1 className="text-[#fff]  text-[42px] font-lato font-extrabold"><span className="text-[#E55473]">Flower</span>Shop</h1>
                <p className="font-lato sm:block hidden text-[#fff] font-regular  text-[16px] opacity-90">It is a long established fact that a reader will be distracted by the readable </p>
                <p className="font-lato sm:block hidden text-[#fff] font-regular text-[16px] opacity-90">content of a page when looking at its layout.</p>
                <p className="text-[#fff] opacity-40 text-[14px]">@2020-2023, FlowerShop.com. All rights reserved.</p>

        </div>
        )
    }
}
export default Footer