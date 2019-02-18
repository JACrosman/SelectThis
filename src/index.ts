import { generateSelector, generateElementInfo } from './selectors/generate';
import * as $ from 'jquery';
import { getNthChildSelector } from './accessors/getNthChild';

window.addEventListener('click', onClick, false);
window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

var shift = false;

function onClick(e) {
  if (shift) {
    e.preventDefault();

    const info = generateElementInfo(e.target);

    // const el = document.body.querySelectorAll('#gallery-0:nth-child(2)')[0] as any;
    // getNthChildSelector(el.childElements()[1]);

    const selector = generateSelector({
      element: info,
      ignoreClassName: true,
      ignoreId: true
    });

    const res = $('body').find(selector);
    console.log(info, res, res.length);
  }
}

function onKeyDown(e) {
  shift = e.shiftKey;
}

function onKeyUp(e) {
  shift = e.shiftKey;
}