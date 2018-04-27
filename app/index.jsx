import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginSplash from './pages/LoginSplash.jsx';

function seeSpotRun(doc) {
  const mountElement = doc.createElement('div');
  mountElement.innerHTML = 'This is the mount element.  Hooray!  Mount yer React code here.';

  doc.body.appendChild(mountElement);

  ReactDOM.render((<BrowserRouter>
    <LoginSplash></LoginSplash>
  </BrowserRouter>), mountElement);
}

seeSpotRun(document);

require('./index.scss');
