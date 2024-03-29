import React, {createContext, useEffect, useState} from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Paralax from "./components/UI/paralax/Paralax";

export const LangContext = createContext()

const App = () => {

    const [langEng, setLangEng] = useState(true)

    return (
        <>
            <LangContext.Provider value={{langEng, setLangEng}}>
                <Header />
                <Paralax />
                <Nav />
                <About />
                <Experience />
                <Portfolio />
                <Contact />
                <Footer />
            </LangContext.Provider>
        </>
    );
};

export default App;