/**
 * Determines if the passed elelement is a DOM element
 * @param  { HTMLElement } element
 * @return { Boolean }
 */
export function isElement(element)
{
  let isElem;

  if ( typeof HTMLElement === 'object' )
  {
    isElem = element instanceof HTMLElement;
  }
  else
  {
    isElem = !!element && ( typeof element === 'object' ) && element.nodeType === 1 && typeof element.nodeName === 'string';
  }
  return isElem;
}