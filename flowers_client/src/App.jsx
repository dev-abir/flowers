import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { createBrowserRouter, BrowserRouter, RouterProvider, Routes, Route, } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
