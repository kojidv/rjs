import { useState } from 'react';
/* import styled from 'styled-components'; */
import Main from './Main';
import Navbar from './Navbar';
import ModeToggle from './ModeToggle';

/* let AppDiv; */

function App() {

    const [isToggled, setIsToggled] = useState(false);
    /*
    if(isToggled === false) {
        AppDiv = styled.div`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
                color: #18191c;
                overflow-y: hidden;
                font-family: 'Fira Code', monospace;
            }
            .Navbar {
                padding: 20px;
                display: flex;
                align-items: center;
                max-width: 600px;
                margin: 0 auto;
                border-bottom: 1px solid #e0e0e0;
            }
            .Navbar h1 {
                font-size: 150%;
                color: hsl(340, 100%, 50%);
            }
            .Navbar .Links {
                margin-left: auto;
            }
            .Navbar a {
                margin-left: 16px;
                text-decoration: none;
                padding: 6px;
            }
            .Navbar a:hover {
                color: hsl(340, 100%, 50%);
            }
        `
    } else {
        AppDiv = styled.div`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                background-color: #18191c;
                color: #f0f0f0;
                overflow-y: hidden;
                font-family: 'Fira Code', monospace;
            }
            .Navbar {
                padding: 20px;
                display: flex;
                align-items: center;
                max-width: 600px;
                margin: 0 auto;
                border-bottom: 1px solid #0f1012;
            }
            .Navbar h1 {
                font-size: 150%;
                color: hsl(340, 100%, 50%);
            }
            .Navbar .Links {
                margin-left: auto;
            }
            .Navbar a {
                margin-left: 16px;
                text-decoration: none;
                padding: 6px;
            }
            .Navbar a:hover {
                color: hsl(340, 100%, 50%);
            }
        `
    }
    */

    return (
        <App>
            <Navbar />
            <Main />
            <ModeToggle 
                isToggled={isToggled} 
                onToggle={() =>  {
                    setIsToggled(!isToggled)
                }}
            />
        </App>
    );
}

export default App;