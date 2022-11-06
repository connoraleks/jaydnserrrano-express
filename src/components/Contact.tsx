import { useState } from "react";
const Contact = ({width, height}: {width: number, height: number}) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    return (
        <section className="w-full max-w-xl mx-auto h-screen sm:h-auto flex justify-center items-center max-h-[750px]">
            <div>
                <h1 className="font-bold text-4xl mb-2">Contact</h1>
                <p className="text-base text-zinc-700 mb-8">
                    If you would like to get in touch with me, please send me an email at <a href="mailto:connoraleks@gmail.com">connoraleks@gmail.com</a> or fill out the form below.
                </p>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Name" className="border border-zinc-700 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" className="border border-zinc-700 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea placeholder="Message" className="border border-zinc-700 rounded-md p-2" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className="border rounded-md p-2 text-lg hover:bg-gray-100 duration-700">Send</button>
                </form>
            </div>
        </section>
    );
}
export default Contact;