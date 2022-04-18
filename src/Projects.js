const Projects = () => {
    return (
        <div className="Projects">
            <h3>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>s</span>
                <span>:</span>
            </h3>
            <ul>
                <li>
                    <h2>Lia</h2>
                    <img src={require('./images/peakpx.jpg')} alt="" width="384" height="216" />
                    <h4>all in one discord.js bot</h4>
                </li>
            </ul>
        </div>
    );
}

export default Projects;