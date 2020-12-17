import React, { lazy, Suspense } from "react";

import "./App.css";
import resumeData from "./utils/resumeData";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));
const Portfolio = lazy(() => import("./Components/Portfolio"));

const App = () => (
  <div className="App">
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </Suspense>
  </div>
);

export default App;
