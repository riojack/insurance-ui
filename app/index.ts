function seeSpotRun(doc: Document) {
  const h1: HTMLHeadingElement = doc.createElement('h1');
  h1.innerHTML = 'Hipster Insurance';
  
  doc.body.appendChild(h1);
}

seeSpotRun(document);

require('./index.scss');
