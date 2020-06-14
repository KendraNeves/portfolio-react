import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Arrow from './components/arrow';
import SideBar from './components/sidebar';
import NavBar from './components/navbar';
import Footer from './components/footer';



ReactDOM.render(
  <React.StrictMode>
    <div>
      <NavBar />
      <div>
        <SideBar />
      </div>
      <Arrow arrowColor="#dea6af" zIndex="-1" height="580">
      </Arrow>
      <Arrow arrowColor="#f3f3f3" zIndex="-2" />
      <Arrow arrowColor="#dea6af" zIndex="-3" />
      <App />
      <Footer />
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
