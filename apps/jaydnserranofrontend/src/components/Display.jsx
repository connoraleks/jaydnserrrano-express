import ContactForm from './ContactForm'
import Home from './Home'
import GallerySection from './GallerySection'
import About from './About'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Display = ({home,gallery,about,contact}) => {
    const [dirents, setDirents] = useState(null);
    const fetchDirents = async () => {
        const res = await axios('https://api.jaydnserrano.com/dirents');
        if(res.status === 200) setDirents(res.data);
    }

    useEffect(() => {
        fetchDirents();
    }, []);
    useEffect(() => {
        console.log(dirents);
    }, [dirents]);
    return (
        <div className="sm:pt-0 md:pl-48 w-full h-full">
            <div className="w-full h-full overflow-y-scroll">
                <Home home={home}></Home>
                <About about={about}></About>
                {dirents && <GallerySection galleryref={gallery} directory={dirents}></GallerySection>}
                <ContactForm contact={contact}></ContactForm>
            </div>
        </div>
    )
}
export default Display;