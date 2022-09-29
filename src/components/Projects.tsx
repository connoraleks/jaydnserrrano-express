import { useEffect, useState } from 'react';
import axios from 'axios';
import {BsGithub} from 'react-icons/bs'
import { IoArrowDown } from 'react-icons/io5'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
const apiurl = 'https://api.github.com/users/connoraleks/repos';
const colors = [
    "bg-red-600 w-[12rem] h-[0.25rem]",
    "bg-orange-600 w-[12rem] h-[0.25rem]",
    "bg-yellow-600 w-[12rem] h-[0.25rem]",
    "bg-green-600 w-[12rem] h-[0.25rem]",
    "bg-blue-600 w-[12rem] h-[0.25rem]",
    "bg-indigo-600 w-[12rem] h-[0.25rem]",
    "bg-purple-600 w-[12rem] h-[0.25rem]",
    "bg-pink-600 w-[12rem] h-[0.25rem]"
]
console.log(colors);
interface Project {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    pushed_at: string;
    // more fields
}
const Projects = ({width, height}: {width: number, height: number}) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [windowSize, setWindowSize] = useState<number>(6);
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get(apiurl);
            if(response.status === 200) {
                // sort projects by most recently pushed
                const sortedProjects = response.data.sort((a: Project, b: Project) => {
                    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
                });
                setProjects(sortedProjects);
            }
            else console.log(response.status);
        }
        fetchProjects();
    }, []);

    return (
        <section className="w-full max-w-xl mx-auto">
            <h1 className="font-bold text-4xl mb-2">Projects</h1>
            <p className="text-base text-zinc-700 mb-8">
                Here are some of my projects, displayed using the GitHub API. The source code for each project is provided as well as a live website if available.
            </p>
            <ul className="list-inside">
                {/* Show at most 5 projects */}
                {projects.slice(0, windowSize-1).map((project, index) => {
                    return (
                        <li key={index} className="mb-8">
                            <div className={colors[index % colors.length]}/>
                            <div className="flex flex-col sm:flex-row pt-2 gap-4">
                                <div className={"flex flex-col justify-center items-start sm:w-1/3"}>
                                    <h2 className="text-xl font-bold">{project.name.replaceAll('-', ' ').split(' ').map((word) => (word[0].toUpperCase()+word.substring(1)+' '))}</h2>
                                    {/* Last updated */}
                                    <p className="text-sm text-zinc-700 mb-2">Last Updated on {new Date(project.pushed_at).toLocaleDateString()}</p>
                                    <span className="whitespace-nowrap flex gap-2 justify-center items-center">
                                        <a href={project.html_url}><BsGithub className={"text-xl hover:text-blue-700"}/></a>
                                        {project.homepage && <a  href={project.homepage}><HiOutlineDesktopComputer className={"text-xl hover:text-blue-700"}/></a>}
                                    </span>
                                </div>
                                <p className="text-base text-zinc-700 sm:w-2/3">{project.description}</p>
                            </div>
                        </li>
                    );
                })}                
            </ul>
            {/* Show button to expand if there are more than 5 projects */}
            {projects.length > 5 && <div className="w-full flex justify-center"><button className="border rounded-full p-2 text-lg hover:bg-gray-100 duration-700" onClick={() => {
                if(windowSize < projects.length) setWindowSize(projects.length);
                else setWindowSize(6);
                }}><IoArrowDown className={windowSize < projects.length ? "" : "rotate-180"}/></button></div>}
        </section>
    );
};
export default Projects;