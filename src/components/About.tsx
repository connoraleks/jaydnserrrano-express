const About = ({width, height}: {width: number, height: number}) => {
    return (
        <section className="w-full max-w-xl mx-auto">
            <h1 className="font-bold text-4xl mb-2">About Me</h1>
            <p className="text-base text-zinc-700">
                I graduated with a BS in Computer Science and minor in Cognitive Science from Rutgers University. 
                I'm interested in the intersection of technology and human behavior, and I'm currently exploring the field of Human-Computer Interaction. 
                I'm also interested in the fields of Machine Learning and Data Science.
            </p>
        </section>
    );
};
export default About;