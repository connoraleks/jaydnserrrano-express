import { MdBrightness1 } from "react-icons/md"
const Divider = ({id} : {id: string}) => {
    return (
        <div id={id} className="flex justify-center items-center gap-4 my-8">
            <div className="grow h-[1px] bg-gray-500"></div>
            <MdBrightness1 className="text-gray-500 text-base"/>
            <div className="grow h-[1px] bg-gray-500"></div>
        </div>
    );
}
export default Divider;