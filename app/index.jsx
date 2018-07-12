import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Shell from './Shell';

function seeSpotRun(doc) {
  const mountElement = doc.createElement('div');
  mountElement.innerHTML = 'This is the mount element.  Hooray!  Mount yer React code here.';

  doc.body.appendChild(mountElement);

  ReactDOM.render(<Shell></Shell>, mountElement);
}

seeSpotRun(document);

require('./index.scss');
