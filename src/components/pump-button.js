import {
  mdiFan,
  mdiFanOff,
  mdiNumeric0,
  mdiNumeric1,
  mdiNumeric2,
} from "@mdi/js";
import { html, css, LitElement } from "lit";

export class PumpButton extends LitElement {
  pump_speed_icons = [mdiNumeric0, mdiNumeric1, mdiNumeric2];

  static get properties() {
    return {
      pumpState: { type: Number, attribute: "pump-state" },
    };
  }

  static styles = css`
    .pump-speed {
      width: 2.5em;
      height: 2.5em;

      position: absolute;
      top: 1.2em;
      right: 1.2em;
    }
  `;

  constructor() {
    console.info("pump-button: contructor() called.");
    super();
    this.pumpState = -1;
  }

  render() {
    return html`
      <div>
        <mdi-icon
          style="display:block;height:0"
          icon-name="${this.pumpState < 0 ? mdiFanOff : mdiFan}"
          ?rotate="${this.pumpState > 0 ? true : false}"
          background-color="${this.pumpState > 0
            ? "var(--primary-color)"
            : "transparent"}"
        ></mdi-icon>
        <div class="pump-speed">
          <mdi-icon
            style="display:${this.pumpState <= 0 ? "none" : "block"};height:0"
            icon-name="${this.pump_speed_icons[this.pumpState]}"
            border="none"
            padding="0.2em"
            background-color="var(--primary-color)"
          ></mdi-icon>
        </div>
      </div>
    `;
  }
}
