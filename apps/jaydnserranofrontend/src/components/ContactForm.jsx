const ContactForm = ({contact}) => {
    return (
        <div ref={contact} className="bg-white w-full min-h-screen h-fit flex flex-col items-center justify-center p-4">
            <h1 style={{transition: "all 0.5s ease"}} className="text-4xl font-bold text-black">Contact Me</h1>
            <p style={{transition: "all 0.5s ease"}} className="text-xl my-12 text-gray-900">Use this form to tell me about you.</p>
            <form className="text-base text-gray-900 flex flex-col gap-4 items-center w-full">
                <input placeholder="Name" type="text" style={{transition: "all 0.5s ease"}} className="p-2 rounded w-3/5 bg-transparent border-black border placeholder-gray-500 focus:outline-none focus:placeholder-gray-700" id="cname" required />
                <input placeholder="Email" type="email" style={{transition: "all 0.5s ease"}} className="p-2 rounded w-3/5 bg-transparent border-black border placeholder-gray-500 focus:outline-none focus:placeholder-gray-700" id="cemail" required />
                <textarea placeholder="Message" style={{transition: "all 0.5s ease"}} className="p-2 rounded w-3/5 bg-transparent border-black border placeholder-gray-500 focus:outline-none focus:placeholder-gray-700" id="cmessage" required />
                <button type="submit" style={{transition: "all 0.5s ease"}} className="text-lg text-gray-900 rounded-2xl border-black border-2 p-3 w-fit ml-1 transition duration-500 hover:bg-gray-600 hover:text-white hover:border-gray-700">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;