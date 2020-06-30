import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/page/Header";
import Container from "./components/page/Container";
import Main from "./components/page/Main";
import Footer from "./components/page/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Container />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
