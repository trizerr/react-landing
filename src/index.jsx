import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './components/Header';
import { About } from './components/About';
import { Pluses } from './components/Pluses';
import { Screenshots } from './components/Screenshots';
import { Reviews } from "./components/Reviews";
import { Buy } from "./components/Buy";
import { Contact } from "./components/Contact";
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Output = () => (
  <>
    <Header />
    <About />
    <Pluses />
    <Screenshots/>
    <Reviews/>
    <Buy/>
    <Contact/>
  </>
);

ReactDom.render(<Output />, document.getElementById('root'));
