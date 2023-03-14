import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;