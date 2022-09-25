import Links from './Links';
import Navbar from './Navbar';
const Header = ({width, height}: {width: number, height: number}) => {
    return (
        <header id='header' className="w-full max-w-xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-8 justify-center items-center">                   
                <div id='text' className="flex flex-col justify-start items-center md:items-start w-full h-full whitespace-nowrap text-center md:text-left gap-4">
                    <div id='headertext'>
                        <h1 className="font-bold text-4xl mb-2">Connor<br/>Aleksandrowicz</h1>
                        <h2 className="font-semibold text-zinc-600 text-base">Computer Science &#38; Cognitive Science</h2>
                        <h2 className="font-semibold text-zinc-600 text-base">Rutgers University</h2>
                    </div>
                    <code className="text-zinc-600 text-xs">connoraleks@gmail.com</code>
                    <Links wrapperStyle={'flex justify-center md:justify-start w-full text-xl gap-8'} linkStyle={'hover:text-blue-700'}/>
                    <Navbar wrapperStyle={'flex justify-center md:justify-start w-full text-xs gap-2'} linkStyle={'underline hover:text-blue-700'}/>
                </div>
                <div id='image' className="w-full h-full flex justify-center items-center">
                    <div className="w-[12rem] h-[12rem] rounded-full border-2 border-black overflow-hidden bg-slate-800 flex justify-center items-center">
                        <img className={'translate-y-1'} alt="Waving Connor Animoji" src="/wavingAnimoji.PNG" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                    </div> 
                </div>
            </div>
        </header>
    );
    }
export default Header;