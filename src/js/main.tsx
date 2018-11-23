
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from '../components/hello';
import DemoGallery from "../components/demoGallery/demoGallery";

ReactDOM.render(
  <HelloComponent/>,
  document.getElementById('site-content')
);

var logoHeader = require('../assets/images/logo_2.png');
const img = document.createElement('img');
img.src = logoHeader;
document.getElementById('header').appendChild(img);

ReactDOM.render(
  <DemoGallery/>, 
  document.getElementById('gallery-content')
);