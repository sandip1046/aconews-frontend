

const Footer = () => {
    return (
        
            <div className={"flex flex-col lg:flex-row items-center justify-between w-full h-[2/10] shadow-md border  border-gray-200   p-5"}>

                <div className="flex flex-col items-center justify-between ">
                    <div className="flex items-center justify-between gap-3">
                        <img src="newsfav.png" alt="" width={40} height={40} className="cursor-pointer  rounded-full"></img>
                        <h1 className="text-3xl font-bold text-center cursor-pointer hover:text-gray-700">ACONEWS - Latest News</h1>
                    </div>

                    {/* <div>
                        <img src="avatar.png" width={40} height={40} className="cursor-pointer  rounded-full"></img>
                    </div> */}
                </div >

                <div className={"flex flex-col items-center justify-center "}>
                    <h2 className="font-bold text-lg">About us</h2>
                    <p className="m-2 items-center">We provide the latest news from all over the world. <br />We are here to provide you with the latest news. <br /> We are here to provide you with the latest news. <br /> We are here to provide you with the latest news.</p>
                    <p className="m-1 items-center">Any query please contact us 
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">aconews_support@gmail.com</span></p>
                <p className=" items-center">All rigth are reserved &#169;2024</p>
                    </div>
                <div className="mx-6">
                    <h2 className="font-bold text-lg">Contact us</h2>
                    <h4 className="text-blue-500 cursor-pointer">Twiter</h4>
                    <h4 className="text-blue-500 cursor-pointer">Facebook</h4>
                    <h4 className="text-pink-500 cursor-pointer">Instagram</h4>
                </div>
            </div>
            
        
    )
}

export default Footer