/**
 * Gets the tag name of the element
 * @param { HTMLElement } element 
 */
export function getTagSelector(element: HTMLElement) {
    return element.tagName.toLowerCase().replace(/:/g, '\\:');
}