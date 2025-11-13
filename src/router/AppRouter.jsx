import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Favorites from "../pages/Favorites";
import RootLayout from "../layout/RootLayout";
import ForHim from "../pages/ForHim";
import ForHer from "../pages/ForHer";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/favorites" element={<Favorites />} />
         <Route path="forHim" element={<ForHim />} />
        <Route path="forHer" element={<ForHer />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;


