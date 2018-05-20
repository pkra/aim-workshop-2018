const nodesSpeech = document.querySelectorAll(
  'svg [data-semantic-prefix], svg [data-semantic-speech]'
);
let id = 0;

// NOTE VO seems to ignore role=presentation
// const allNodes = document.querySelectorAll('svg *:not(title):not(use):not(desc)');
const allNodes = document.querySelectorAll('svg *');
for (let node of allNodes) {
  if (node.hasAttribute('aria-labelledby')) continue;
  // avoid image role when reading on VO with role='document' on svg
  if (node.tagName === 'use') node.setAttribute('role', 'group'); //cell
  if (node.tagName === 'g') {
    // if (node.querySelector('g')) node.setAttribute('role', 'presentation');
  }
  // else
  // node.setAttribute('role', 'presentation');
}

// VO specific

const svg = document.querySelector('svg');
// svg.setAttribute('role', 'grid');
// svg.setAttribute('aria-label',svg.getAttribute('data-semantic-speech'));
svg.setAttribute('aria-readonly', 'true'); // for grid [?]
// svg.firstElementChild.setAttribute('role','grid');
if (svg.querySelector('#MathJax-SVG-1-Title')) {
  const title = svg.querySelector('#MathJax-SVG-1-Title');
  title.parentNode.removeChild(title);
  svg.removeAttribute('aria-labelledby');
}

for (let node of nodesSpeech) {
  if (
    !node.getAttribute('data-semantic-prefix') &&
    node.querySelector('[data-semantic-speech], [data-semantic-prefix]')
  )
    continue;
  let computedText = '';
  const prefixText = node.getAttribute('data-semantic-prefix');
  const speechText = node.getAttribute('data-semantic-speech');
  // TO make VO less weird (waiting for a single char desc will lead to VO giving the group nav instructions)
  if (prefixText && !node.querySelector('data-semantic-speech'))
    computedText = prefixText + ' ' + speechText;
  else if (prefixText) computedText = prefixText;
  else computedText = speechText;
  // node.setAttribute('aria-label', computedText);
  // if (node.getAttribute('data-semantic-complexity') === '1')  node.setAttribute('role','none')
  // if (prefixText) node.setAttribute('role', 'row');
  // else;
  // node.setAttribute('role', 'gridcell');
  const title = document.createElement('title');
  title.innerHTML = computedText;
  node.insertBefore(title, node.firstChild);
  node.setAttribute('aria-labelledby', id);
  title.id = id;
  id++;
  if (prefixText && node.getAttribute('data-semantic-complexity') !== '1') {
    continue;
    const desc = document.createElement('desc');
    desc.innerHTML = speechText;
    node.insertBefore(desc, node.firstChild);
    node.setAttribute('aria-describedby', id);
    // node.setAttribute('role','row')
    desc.id = id;
    id++;
  }
}
