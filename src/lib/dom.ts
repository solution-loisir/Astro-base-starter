/**
* @param selector the value of a `data-ref` attribute.
*/
const ref = (selector: string, context: Document | HTMLElement = document) => context.querySelector(`[data-ref="${selector}"]`) as HTMLElement;

/**
* @param selector the value of a `data-ref` attribute.
*/
const refAll = (selector: string, context: Document | HTMLElement = document): NodeListOf<HTMLElement> => context.querySelectorAll(`[data-ref="${selector}"]`);

interface InsertHTMLOptions {
  position?: InsertPosition,
  replace?: boolean
}

/**
 * Wrapper around insertAdjacentHTML.
 * @param markup a string or an array of string to be parsed as HTML or XML.
 * @param element the container element.
 * @param {InsertHTMLOptions} options an optional options object.
 * @param {InsertPosition} options.position default's to `"beforeend"`.
 * @param {boolean} options.replace default's to `false`.
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML#position
 */
const insertHTML = (markup: string, element: HTMLElement, {
  position = "beforeend",
  replace = false
}: InsertHTMLOptions = {}) => {
  let validateMarkup = Array.isArray(markup) ? markup.join("\n") : markup;

  if (typeof validateMarkup !== "string") {
    throw new Error(`The type of markup parameter is ${typeof validateMarkup}. It must be a string or an array of string.`);
  }

  if (replace) {
    while(element.hasChildNodes()) {
      element.removeChild(element.lastChild as ChildNode);
    };
  }

  element.insertAdjacentHTML(position, validateMarkup);
};

const clear = (element: Node) => {
  while(element.hasChildNodes()) {
    element.removeChild(element.lastChild as ChildNode);
  };
};

const clearFrom = (startNode: HTMLElement) => {
  while(startNode.nextElementSibling) {
    startNode.nextElementSibling.remove();
  };
};

const delegate = (element: HTMLElement, selector: string, eventName: string, delegateHandler: (event: Event, element: HTMLElement) => void) => {
  element.addEventListener(eventName, event => {
    let target = event.target as Element;
    if(target.matches(selector)) delegateHandler(event, element);
  });
};

const addClass = (target: HTMLElement, className: string) => {
  target.classList.add(className);
};

const removeClass = (target: HTMLElement, className: string) => {
  target.classList.remove(className);
};

const removeAllClasses = (allNodes: NodeListOf<Element>, className: string) => {
  allNodes.forEach(node => node.classList.remove(className));
};

const addAllClasses = (allNodes: NodeListOf<Element>, className: string) => {
  allNodes.forEach(node => node.classList.add(className));
};

export {
  ref,
  refAll,
  insertHTML,
  clearFrom,
  clear,
  delegate,
  addClass,
  removeClass,
  addAllClasses,
  removeAllClasses
};