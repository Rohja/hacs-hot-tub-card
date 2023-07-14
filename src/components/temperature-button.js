import { html, css, LitElement } from "lit";
import { mdiArrowUpBold, mdiArrowDownBold } from "@mdi/js";

export class TemnperatureButton extends LitElement {
  static get properties() {
    return {
      temperature: { type: Number, attribute: "temperature" },
    };
  }

  static styles = css`
    .temp-flex-container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: stretch;
      height: 100%;

      border: 0.2em solid white;

      /* background-color: var(--primary-color); */

      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
    }

    .temp-flex-items:nth-child(1) {
      display: block;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      order: 0;

      font-size: 2.5em;
      font-weight: bold;

      padding-left: 0.3em;
    }
  `;

  constructor() {
    // console.info("temperature-button: contructor() called.");
    super();
    this.temperature = -42;
  }

  render() {
    return html`<div class="temp-flex-container">
      <div class="temp-flex-items">
        <div class="text">${this.temperature}°</div>
      </div>
    </div>`;
  }
}
