import png_front from '../Asset/pngwing 10.png'
function Button(){
    return (
        <button className="w-[180px] rounded-lg h-[60px] bg-[#E55473] text-[#fff]">
            Shop Now
        </button>
    )
}
function Front() {
    return (
        <div className="bg-[#E55473] max-w-[1600px] min-w-[400px] mx-auto flex flex-col md:flex-row items-center md:justify-evenly gap-3 bg-opacity-10 w-full pt-4">
            <div className="flex flex-col gap-3 w-[100%] md:w-[634px] items-start p-5">
                <h1 className="text-[#272727] text-[32px] font-lato font-extrabold">Let's make<br></br>beautiful flowers a<br></br>part of your life.</h1>
                <p className="text-[#272727] opacity-60 text-[1.2rem] w-[80%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <img src={png_front} className="block my-5 md:my-0 md:hidden h-auto w-[50%] "/>
                <Button/>
            </div>
            <img src={png_front} className='hidden md:block h-auto w-[50%] md:w-[400px]'/>
        </div>
    )
}
export default Front