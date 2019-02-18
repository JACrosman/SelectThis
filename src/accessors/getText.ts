/**
 * Get the text selector of the element
 * @param { HTMLElement } element
 */
export function getTextSelector(element: HTMLElement) {
  if (element.children.length > 0) {
      return null;
  }

  return element.textContent.trim();
}
