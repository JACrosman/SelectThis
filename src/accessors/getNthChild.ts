import { isNull, isElement } from '../helpers';

/**
 * Returns the selectors based on the position of the element relative to its siblings
 * @param  { HTMLElement } element
 * @return { Array }
 */
export function getNthChildSelector(element: HTMLElement, asSelector: boolean = true): number | string {
  let counter = 0;
  let k;
  let sibling;
  const { parentNode } = element;

  if (!isNull(parentNode)) {
    const { childNodes } = parentNode;
    const len = childNodes.length;
    for (k = 0; k < len; k++) {
      sibling = childNodes[k];
      if (isElement(sibling)) {
        counter++;
        if (sibling === element) {
          return asSelector ? `:nth-child(${counter})` : counter;
        }
      }
    }
  }

  return null;
}
