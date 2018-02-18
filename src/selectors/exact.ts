import { getIdSelector, getClassSelectors, getTagSelector, getNthChildSelector } from '../accessors';
import { isUnique, isUniqueChild, isUniqueSibling } from '../helpers';

/**
 * Return a high precision selector for an element
 * @param { HTMLElement } element 
 */
export function getExactSelector(element) {
    // Check to see if the element has a unique id
    const id = getIdSelector(element);
    if (id && isUnique(element, id)) {
        return id;
    }

    const selectors = [generateDefaultSelector(element)];
    let { parentElement } = element;

    // Iterate through parent tree until a selector with an id 
    // is found or we reach the body element
    do {
        // Check to see if we've reached the body (stopping point)
        const parentTag = getTagSelector(parentElement);
        if (getTagSelector(parentElement) === 'body') {
            selectors.push(parentTag);
            break;
        }

        // Check for a parent id (stopping point)
        const parentId = getIdSelector(parentElement);
        if (parentId && isUnique(parentElement, parentId)) {
            selectors.push(parentId);
            break;
        }

        // Generate a selector for this element since it's not a stopping point
        selectors.push(generateDefaultSelector(parentElement));

        // Move to the next parent element
        parentElement = parentElement.parentElement;
    } while(parentElement);
    
    // generate the final selector
    selectors.reverse();
    const selector = selectors.length === 1 ? selectors[0] : selectors.join(' > ');

    return selector;
}

/**
 * Returns the default selector strategy
 * @param { HTMLElement } element 
 */
function generateDefaultSelector(element) {
    const tagSelector = getTagSelector(element);
    const classSelector = getClassSelectors(element).join('');
    const selector = `${tagSelector}${classSelector}`;
    
    if (isUniqueSibling(element, selector)) {
        return selector;
    } else {
        return `${selector}${getNthChildSelector(element)}`;
    }
}

