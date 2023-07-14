import { mdiFire, mdiAirFilter } from "@mdi/js";
import { html, css, LitElement } from "lit";

export class ExtraStatusButton extends LitElement {
  static get properties() {
    return {
      heaterState: { type: String, attribute: "heater-state" },
      filterState1: { type: String, attribute: "filter-state-1" },
      filterState2: { type: String, attribute: "filter-state-2" },
    };
  }

  static styles = css`
    .extra-state {
      width: 2.5em;
      height: 2.5em;

      position: absolute;
      top: 1.2em;
      right: 1.2em;

      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      background-color: var(--primary-color);
    }
  `;

  constructor() {
    // console.info("extra-status-button: contructor() called.");
    super();
    this.heaterState = "off";
    this.filterState1 = "off";
    this.filterState2 = "off";
  }

  render() {
    return html`
      <div>
        <mdi-icon
          style="display:block;height:0"
          icon-name="${mdiFire}"
          background-color="${this.heaterState == "on"
            ? "var(--primary-color)"
            : "transparent"};"
        ></mdi-icon>
        <div
          class="extra-state"
          style="display:${this.filterState1 == "on" ||
          this.filterState2 == "on"
            ? "block"
            : "none"}"
        >
          <mdi-icon
            style="display:block;height:0"
            icon-name="${mdiAirFilter}"
            border="none"
            padding="0.5em"
          ></mdi-icon>
        </div>
      </div>
    `;
  }
}
