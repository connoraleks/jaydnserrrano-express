const Navbar = ({wrapperStyle, linkStyle}: {wrapperStyle?: string, linkStyle?: string}) => {
    return (
        <nav className={wrapperStyle}>
            <a className={linkStyle} href="#about">About</a>
            <a className={linkStyle} href="#projects">Projects</a>
            <a className={linkStyle} href="#contact">Contact</a>
        </nav>
    );
}
export default Navbar;