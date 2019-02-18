/**
 * Gets the tag name of the element
 * @param { HTMLElement } element
 */
export function getTagSelector(element: Element) {
  return element.tagName.toLowerCase().replace(/:/g, '\\:');
}
