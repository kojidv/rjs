import {
    DiGit,
    DiGithubBadge,
    DiVisualstudio,
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiNpm,
    DiTerminal
} from "react-icons/di";

const Tools = () => {

    let iconStyles = {
        color: "#fff",
        fontSize: "60px"
    }

    return (
        <div className="Tools">
            <h3>
                <span>T</span>
                <span>o</span>
                <span>o</span>
                <span>l</span>
                <span>s</span>
                <span>:</span>
            </h3>
            <br />
            <div className="ToolLinksOne">
                <ul>
                    <li>
                        <a href="https://visualstudio.microsoft.com/">
                            <DiVisualstudio style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://git-scm.com/">
                            <DiGit style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <DiGithubBadge style={iconStyles} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ToolLinksTwo">
                <ul>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
                            <DiHtml5 style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
                            <DiCss3 style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
                            <DiJavascript1 style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org/">
                            <DiReact style={iconStyles} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ToolLinksThree">
                <ul >
                    <li>
                        <a href="https://nodejs.org/">
                            <DiNodejsSmall style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/">
                            <DiNpm style={iconStyles} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <DiTerminal style={iconStyles} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Tools;