import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Shell from './Shell';
import AppStore from './stores/app-store';

function shouldCreateNewContainer(doc) {
  return doc.querySelectorAll('#awesome').length === 0;
}

function seeSpotRun(doc) {
  let mountElement;
  if (shouldCreateNewContainer(doc)) {
    mountElement = doc.createElement('div');
    mountElement.setAttribute('id', 'awesome');

    doc.body.appendChild(mountElement);
  } else {
    mountElement = document.querySelector('#awesome');
  }

  ReactDOM.render(<Shell></Shell>, mountElement);
}

let isLoggedIn = false;
AppStore.subscribe((() => {
  if (AppStore.getState().logged_in && !isLoggedIn) {
    seeSpotRun(document);
    isLoggedIn = true;
  } else if (!AppStore.getState().logged_in && isLoggedIn) {
    seeSpotRun(document);
    isLoggedIn = false;
  }
}));

seeSpotRun(document);

require('./index.scss');
