import React from 'react';
import useLocalStorage from 'use-local-storage';
import Main from './Main';
import Navbar from './Navbar';
import Tools from './Tools';
import Projects from './Projects';
import ToTop from './ToTop';

function App() {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className="App" data-theme={theme}>
            <div className="Components">
                <Navbar />
                <Main />
                <div id="tools">
                    <Tools />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <ToTop />
                <div className="ModeToggle">
                    <label className="ToggleSwitch">
                        <input type="checkbox" />
                        <span className="Slider" onClick={() => {switchTheme()}} />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;