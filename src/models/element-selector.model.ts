import { ElementInfo } from './element-info.model';

export class ElementSelector {
  /**
   * All information pertaining to the element on a page
   */
  element?: ElementInfo;

  /**
   * User defined selector
   */
  selector?: string;

  /**
   * Ignore id attribute in selector generation
   */
  ignoreId?: boolean;

  /**
   * Ignore text in selector generation
   */
  ignoreText?: boolean;

  /**
   * Ignore tag name in selector generation
   */
  ignoreTagName?: boolean;

  /**
   * Ignore tag name in selector generation
   */
  ignoreClassName?: boolean;

  /**
   * Ignore tag name in selector generation
   */
  ignorePosition?: boolean;
}
