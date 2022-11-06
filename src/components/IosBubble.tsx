/* text is a list of <p>Elements</p> */
import { useState, useEffect } from 'react';
const IosBubble = ({text, className, backgroundColor, tailSide} : {text: string[], className: string, backgroundColor: string, tailSide: number}) => {
    const beforestyle = "before:content-[''] before:bottom-0 before:-right-4 before:w-[1.25rem] before:h-[1.5rem] before:absolute before:rounded-br-[10%] before:bg-blue-500";
    const afterstyle = backgroundColor === "black" ? "after:content-[''] after:bottom-0 after:-right-[1.65rem] after:w-[1.625rem] after:h-[1.5625rem] after:absolute after:rounded-bl-[90%] after:bg-black" : "after:content-[''] after:bottom-0 after:-right-[1.65rem] after:w-[1.625rem] after:h-[1.5625rem] after:absolute after:rounded-bl-[90%] after:bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/denim.png')] after:bg-repeat";
    const bubblestyle = "relative h-fit w-fit bg-blue-500 grow-0 p-4 text-white rounded-[1.5625rem] rounded-br-none font-semibold";
    const [fullstyle, setfullstyle] = useState(`${bubblestyle} ${beforestyle} ${afterstyle} ${(tailSide === 0 ? 'scale-x-[-1]': '')} `);

    useEffect(() => {
        setfullstyle(`${bubblestyle} ${beforestyle} ${afterstyle} ${(tailSide === 0 ? 'scale-x-[-1] ml-4': 'mr-4')} `);
    }, [tailSide, backgroundColor, afterstyle]);
    return (
        <div className={className}>
            <div className={ fullstyle} >
                {text.map((p, i) => <p className={"flex justify-center items-center h-full w-full font-semibold " + (tailSide === 0 ? 'scale-x-[-1]': '')} key={i}>{p}</p>)}
            </div>
        </div>
    );
}
export default IosBubble;