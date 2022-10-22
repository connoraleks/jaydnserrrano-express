import {useState, useEffect, useRef} from "react";
const Navbar = ({pages}) => {
    const closeButton = useRef(null);
    const openButton = useRef(null);
    const exit = () => { if(closeButton.current !== null){ closeButton.current.focus(); closeButton.current.click();}};
    const hideNav = () => {closeButton.current.focus(); setNav("z-20 -translate-x-full md:translate-x-0 h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center")};
    const showNav = () => {openButton.current.focus(); setNav("z-20 h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center")};
    const [button, setButton] = useState(null);
    const buttonHover = "text-white text-lg lg:text-xl hover:text-blue-500";
    const [nav, setNav] = useState("z-20 -translate-x-full md:translate-x-0 h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center sm:border-r sm:border-white");
    const scrollTo = (ref) => {
        console.log(ref);
        if(ref.current) setTimeout(() => ref.current.scrollIntoView({behavior: "smooth", block: "start"}), 250);
    }
    useEffect(() => {
        setTimeout(() => setButton(b => b === null ? true : !b), 650);
    }, [nav]);
    return (
        <>
        <nav style={{transition: "all 0.5s ease"}} className={nav}>
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {scrollTo(pages[0]); exit();}}>Home</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {scrollTo(pages[1]); exit();}}>About</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {scrollTo(pages[2]); exit();}}>Gallery</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {scrollTo(pages[3]); exit();}}>Contact</button>
            </div>
        </nav>
        <div className="absolute top-0 left-0">
        {button && 
        <div className="absolute">
        <button id="open" ref={openButton} className="relative group m-4 z-40 absolute md:hidden" style={{transition: "all 0.5s ease"}}  onClick={showNav}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-gray-300 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
            </div>
            </div>
        </button>
        </div>
        }
        {!button && 
        <div className="absolute">
        <button id="close" ref={closeButton} className="relative group m-4 z-50 absolute md:hidden" style={{transition: "all 0.5s ease"}}  onClick={hideNav}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-gray-300 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 -rotate-45 group-focus:rotate-0 -translate-x-1"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 rotate-45 group-focus:rotate-0 -translate-x-1"></div>
            </div>
            </div>
        </button>
        </div>
        }
        </div>
        </>
    )
}
export default Navbar;