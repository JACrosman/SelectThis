import {
  isNull
} from '../helpers';

/**
* Returns the class of the element
* @param   { HTMLElement } element
* @return  { String }
*/
export function getClasses(element: HTMLElement) {
  if (!element.hasAttribute('class')) {
      return [];
  }

  try {
      return Array.prototype.slice.call(element.classList);
  } catch (e) {
      let className = element.getAttribute('class');

      // remove duplicate and leading/trailing whitespaces
      className = className.trim().replace(/\s+/g, ' ');

      // split into separate classnames
      return className.split(' ');
  }
}

/**
* Returns the class of the element
* @param   { HTMLElement } element
* @return  { Array }
*/
export function getClassSelectors(element): string[] {
  const classes = getClasses(element);
  return classes.map(className => `.${className}`);
}

/**
* Reteurns the classes as a string of the element
* @param   { HTMLElement } element
* @return  { Array }
*/
export function getClassName(element): string[] {
  const classes = getClasses(element);
  return classes.join('.');
}
