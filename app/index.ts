function seeSpotRun(doc: Document) {
  const h2: HTMLHeadingElement = doc.createElement('h2');
  h2.innerHTML = 'See spot run';
  
  doc.body.appendChild(h2);
}

seeSpotRun(document);

require('./index.scss');
