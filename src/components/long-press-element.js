import { html, LitElement } from "lit";

export class LongPressEvent extends PointerEvent {
  #startTimeStamp;

  get startTimeStamp() {
    return this.#startTimeStamp;
  }

  constructor(eventName, init) {
    super(eventName, { ...init, bubbles: true, composed: true });
    this.#startTimeStamp = init.startTimeStamp;
  }
}

const DEFAULT_LONG_PRESS_DELAY = 500;

/**
 * A long press event generator.
 *
 * @slot - This element has a slot
 */
export class LongPressElement extends LitElement {
  static properties = {
    delay: { type: Number },
    eventPrefix: { type: String, attribute: "event-name" },
  };

  /**
   * The delay for waiting for long press
   */
  delay = DEFAULT_LONG_PRESS_DELAY;
  eventPrefix = "hot-tub-icon";

  connectedCallback() {
    // console.log("long-press-element: connectedCallback() called.");
    super.connectedCallback();
    this.addEventListener("pointerdown", this.#pointerDownHandler);
    this.addEventListener("pointerup", this.#longPressAbortHandler);
    this.addEventListener("pointerleave", this.#longPressAbortHandler);
  }

  disconnectedCallback() {
    // console.log("long-press-element: disconnectedCallback() called.");
    super.disconnectedCallback();
    this.removeEventListener("pointerdown", this.#pointerDownHandler);
    this.removeEventListener("pointerup", this.#longPressAbortHandler);
    this.removeEventListener("pointerleave", this.#longPressAbortHandler);
  }

  render() {
    // console.log("long-press-element: render() called.");
    return html`<slot></slot>`;
  }

  #pointerDownTimeout = {};

  #pointerDownHandler(event) {
    // console.log("long-press-element: #pointerDownHandler() called.");
    const { target, pointerId } = event;
    const init = {
      ...event,
      startTimeStamp: event.timeStamp,
    };
    this.#pointerDownTimeout[pointerId] =
      this.ownerDocument.defaultView.setTimeout(() => {
        delete this.#pointerDownTimeout[pointerId];
        const longPress = new LongPressEvent(
          `${this.eventPrefix}-long-press`,
          init
        );
        target.dispatchEvent(longPress);
      }, this.delay || DEFAULT_LONG_PRESS_DELAY);
  }

  #longPressAbortHandler(event) {
    let pointerId = event.pointerId;
    // console.log("long-press-element: #longPressAbortHandler() called.", event);
    // console.log(
    //   "long-press-element: #pointerDownTimeout[pointerId] ",
    //   this.#pointerDownTimeout[pointerId]
    // );
    // If already timed out, this will do nothing
    if (this.#pointerDownTimeout[pointerId]) {
      // console.log("This is a click");
      const longPress = new LongPressEvent(`${this.eventPrefix}-click`, {
        ...event,
        startTimeStamp: event.timeStamp,
      });
      event.target.dispatchEvent(longPress);
      this.ownerDocument.defaultView.clearTimeout(
        this.#pointerDownTimeout[pointerId]
      );
      delete this.#pointerDownTimeout[pointerId];
    } else {
      // console.log("This is a long press");
    }
  }

  constructor() {
    super();
    // console.log("long-press-element: constructor() called.");
  }
}
