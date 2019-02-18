import { isNull } from '../helpers';

/**
 * Checks if the selector is unique
 * @param  { Object } element
 * @param  { String } selector
 * @return { Array }
 */
export function isUnique(element: HTMLElement, selector: string) {
  if (isNull(selector)) {
    return false;
  }

  const elements = element.ownerDocument.querySelectorAll(selector);
  return elements.length === 1 && elements[0] === element;
}

/**
 * Tests uniqueNess of the element inside its parent
 * @param  { Object } element
 * @param { String } Selectors
 * @return { Boolean }
 */
export function isUniqueChild(element: HTMLElement, selector: string) {
  const parentNode = element.parentElement;
  const elements = parentNode.querySelectorAll(selector);
  return elements.length === 1 && elements[0] === element;
}

/**
 * Tests uniqueNess of the element inside its parent
 * @param  { Object } element
 * @param { String } Selectors
 * @return { Boolean }
 */
export function isUniqueSibling(element: HTMLElement, selector: string) {
  const parentNode = element.parentElement;
  const elements = parentNode.querySelectorAll(selector);

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.parentElement === element.parentElement && el !== element) {
      return false;
    }
  }

  return true;
}
