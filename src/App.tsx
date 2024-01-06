import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/About';
import { TechStack } from './layout/sections/TechStack';
import { Projects } from './layout/sections/Projects';
import { Contacts } from './layout/sections/Contacts';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <TechStack/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;