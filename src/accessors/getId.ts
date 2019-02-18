import { isNull } from '../helpers';

/**
 * Returns the id of the element
 * @param   { HTMLElement } element
 * @return  { String }
 */
export function getId(element: HTMLElement) {
    const id = element.getAttribute('id');

    if (isNull(id)) {
        return null;
    }

    return id;
}

/**
 * Returns the id of the element
 * @param   { HTMLElement } element
 * @return  { String }
 */
export function getIdSelector(element: HTMLElement) {
    const id = getId(element);
    return id ? `#${getId(element)}` : null;
}
