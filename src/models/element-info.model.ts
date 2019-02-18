/**
 * Metadata about a specific HTML element
 */
export interface ElementInfo {
  /** Tag name of the element */
  tag?: string;

  /** Id of the element */
  id?: string;

  /** Whether or not this id is the only one on the page */
  uid?: boolean;

  /** Class of the element */
  classes?: string[] | string;

  /** Text inside element */
  text?: string;

  /** Name attribute of the element */
  name?: string;

  /** Position of element relative to siblings */
  pos?: number;

  /** Whether this is the only sibling of this type */
  upos?: boolean;

  /** List in ascending order of parent elements */
  parents?: ElementInfo[];

  /** Latest known query to match element always try first for performance reasons */
  cachedQuery?: string;
}
