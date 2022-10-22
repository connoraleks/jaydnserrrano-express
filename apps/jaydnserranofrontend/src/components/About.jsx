const About = ({about}) => {
    return (
        <div ref={about} className="bg-white w-full h-screen flex flex-col-reverse lg:flex-row md:px-12 justify-center items-center">
            <div className="h-4/5 flex flex-col justify-center lg:w-1/2 text-left p-4 lg:border-b-0 lg:border-r-2 border-black">
                <h1 className="text-4xl text-black font-bold mb-1">Jaydn Serrano</h1>
                <p className="text-xl text-black mb-4">22 year old Professional Photographer.</p>
                <div className="text-sm md:text-lg flex flex-col gap-1 text-gray-900">
                    <p>After receiving his first camera in high school, he quickly fell in love with the process.</p>
                    <p>This longstanding love of photography stems from a yearning to capture moments in time that he feels would normally be overlooked.</p>
                    <p>When not behind the camera you can find him playing guitar, exercising, and spending quality time with loved ones.</p>
                </div>
            </div>
            <div className="hidden lg:block w-1/2 p-8 lg:p-16">
                <img className="border-2 border-black rounded-2xl mx-auto" src={process.env.PUBLIC_URL + '/assets/headshot.png'} alt="headshot"></img>
            </div>
        </div>
    );
}

export default About;