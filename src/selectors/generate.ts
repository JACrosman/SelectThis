import { ElementSelector } from '../models/element-selector.model';
import { ElementInfo } from '../models/element-info.model';
import { getIdSelector, getClassName, getTagSelector, getNthChildSelector, getTextSelector } from '../accessors';
import { isUnique, isUniqueChild, isUniqueSibling, isElement, isNull } from '../helpers';

export function generateSelector(selector: ElementSelector): string {
  const element = selector.element;
  let finalSelector;

  // Ensure the selector exists
  if (!selector || !selector.element) {
    return null;
  }

  // Predefined jquery selector
  if (selector.selector) {
    finalSelector = selector.selector;
  } else if (element.cachedQuery) {
    finalSelector = element.cachedQuery;
  } else if (!selector.ignoreId && element.id && element.uid) {
    // Check to see if the element has a unique id
    finalSelector = element.id;
  } else {
    // Generate the selector dynamically
    const selectors = [generateDefaultSelector(element, selector, false)];
    if (element.parents) {
      for (let i = 0; i < element.parents.length - 1; i++) {
        const parentElement = element.parents[i];

        // Check for a unique id
        if (!selector.ignoreId && parentElement.id && parentElement.uid) {
          selectors.push(parentElement.id);
          break;
        } else {
          selectors.push(generateDefaultSelector(parentElement, selector, false));
        }
      }
    }

    selectors.reverse();
    finalSelector = selectors.length === 1 ? selectors[0] : selectors.join(' > ');
  }

  // save the query so we don't have to generate it again
  selector.element.cachedQuery = finalSelector;

  return finalSelector;
}

function generateDefaultSelector(element: ElementInfo, selector: ElementSelector, forceSkipClass: boolean) {
  let selectorBuilder = element.tag;

  if (!selector.ignoreText && element.text) {
    selectorBuilder += `:contains('${element.text}')`;
  }

  if (!forceSkipClass && !selector.ignoreClassName && element.classes) {
    selectorBuilder += `.${element.classes}`;
  }

  if (!selector.ignorePosition) {
    selectorBuilder += `:nth-child(${element.pos || 1})`;
  }

  return selectorBuilder;
}

/**
 * Extract all the necessary data from an element for selection
 * @param element
 */
export function generateElementInfo(element: HTMLElement) {
    // Get the base element information
    const elementInfo = getElementModel(element);

    // Get parent element information
    const parents = [];
    let currentElement: any = element.parentElement;
    while (isElement(currentElement) && getTagSelector(currentElement) !== 'body') {
        parents.push(getElementModel(currentElement));
        currentElement = currentElement.parentNode;
    }

    elementInfo.parents = parents;

    return elementInfo;
}

function getElementModel(element: HTMLElement): ElementInfo {
    const elementInfo: ElementInfo = { };

    // get tag name
    elementInfo.tag = getTagSelector(element);

    // get id
    const id = getIdSelector(element);
    if (!isNull(id)) {
        elementInfo.id = id;
        if (isUnique(element, id)) {
            elementInfo.uid = true;
        }
    }

    // get class
    const classes = getClassName(element);
    if (classes && classes.length) {
        elementInfo.classes = classes;
    }

    // get text
    const text = getTextSelector(element);
    if (!isNull(text)) {
        elementInfo.text = text;
    }

    // get position
    const position = Number(getNthChildSelector(element, false));
    if (position > 1) {
        elementInfo.pos = position;
    }

    return elementInfo;
}
