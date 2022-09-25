import {BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {HiOutlineFolderDownload} from 'react-icons/hi';

const Links = ({wrapperStyle, linkStyle} : {wrapperStyle?: string, linkStyle?: string}) => {
    return (
        <div className={wrapperStyle}>
            <a href="https://github.com/connoraleks" target="_blank" rel="noopener noreferrer" title="Github">
                <BsGithub className={linkStyle}/>
            </a>
            <a href="https://www.linkedin.com/in/connor-aleksandrowicz-731233217/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin className={linkStyle}/>
            </a>
            <a href = '/ConnorAleks.pdf' download={'/ConnorAleks.pdf'} target="_blank" rel="noopener noreferrer" title="Resume">
                <HiOutlineFolderDownload className={linkStyle}/>
            </a>
        </div>
    )
}

export default Links;
