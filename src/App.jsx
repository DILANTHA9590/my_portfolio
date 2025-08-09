import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./home_main/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DarkContext } from "./utillls/context";
import { h1 } from "framer-motion/client";

function App() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("darkmode" || true)
  );

  return (
    <>
      <DarkContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Toaster />

          <Routes>
            <Route path="/*" element={<HomeLayout />} />
          </Routes>
        </BrowserRouter>
      </DarkContext.Provider>
    </>
  );
}

export default App;
