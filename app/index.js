function seeSpotRun(doc: Document) {
  const mountElement = doc.createElement('div');
  mountElement.innerHTML = 'This is the mount element.  Hooray!  Mount yer React code here.';

  doc.body.appendChild(mountElement);
}

seeSpotRun(document);

require('./index.scss');
