import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-mfizz/dist/font-mfizz.css"
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"


import Arrow from './components/arrow';
import SideBar from './components/sidebar';
import Footer from './components/footer';
import JumbotronPage from './components/jumbotron-page';
import ProjectSection from './components/project-section';
import cardList from './project-card-data';
import AboutMe from './components/about-me-section';
import SkillsSection from './components/skills-section';



ReactDOM.render(
  <React.StrictMode>
    <div>
      <SideBar />
      <Arrow arrowColor="#dea6af" zIndex="-1" height="620">
        <JumbotronPage />
      </Arrow>
      <Arrow arrowColor="#e6dbc9" zIndex="-2" padTop={true} height="300">
        <AboutMe />
      </Arrow>
      <Arrow arrowColor="#dea6af" zIndex="-3" padTop={true} >
        <ProjectSection>
          {cardList}
        </ProjectSection>
      </Arrow>
      <Arrow arrowColor="#e6dbc9" zIndex="-4" padTop={true}>
        <SkillsSection />
      </Arrow>
      <BrowserRouter>
        <App />
      </BrowserRouter>

      <Footer />
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
