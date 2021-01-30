import React, { lazy, Suspense } from "react";

import Loading from "./Components/Loading";
import resumeData from "./utils/resumeData";
import "./App.css";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));
const Portfolio = lazy(() => import("./Components/Portfolio"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  </Suspense>
);

export default App;
