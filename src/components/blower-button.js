import { html, css, LitElement } from "lit";
import { mdiChartBubble } from "@mdi/js";

export class BlowerButton extends LitElement {
  static get properties() {
    return {
      blowerState: { type: String, attribute: "blower-state" },
    };
  }

  static styles = css`
    @keyframes bubble {
      0% {
        transform: scale(0) translateY(0);
      }
      40% {
        opacity: 100%;
      }
      80% {
        opacity: 100%;
      }
      100% {
        opacity: 0%;
        transform: scale(1.3) translateY(-2.2em);
      }
    }

    .content {
      border: 0.2em solid black;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    .bubble {
      height: 1em;
      width: 1em;
      background-color: black;
      border-radius: 50px;

      position: absolute;
    }

    /* FRST BUBBLE */
    .bubble:nth-child(1) {
      top: 70%;
      left: 45%;
    }
    .bubble-anim:nth-child(1) {
      animation: bubble 2s linear infinite;
    }
    /* SECOND BUBBLE */
    .bubble:nth-child(2) {
      top: 65%;
      left: 30%;
    }
    .bubble-anim:nth-child(2) {
      animation: bubble 2s linear infinite;
      animation-delay: 1s;
    }
    /* THIRD BUBBLE */
    .bubble:nth-child(3) {
      top: 60%;
      left: 60%;
    }
    .bubble-anim:nth-child(3) {
      animation: bubble 2.5s linear infinite;
      animation-delay: 2s;
    }
    .bubble-static {
      display: none;
    }
  `;

  constructor() {
    // console.info("blower-button: contructor() called.");
    super();
    this.blowerState = "off";
  }

  render() {
    // console.log("blowerState:", this.blowerState);
    return html`
      <div
        class="content"
        style="background-color:${this.blowerState == "on"
          ? "var(--primary-color)"
          : "transparent"}"
      >
        <div
          class="bubble bubble-${this.blowerState == "on" ? "anim" : "static"}"
        ></div>
        <div
          class="bubble bubble-${this.blowerState == "on" ? "anim" : "static"}"
        ></div>
        <div
          class="bubble bubble-${this.blowerState == "on" ? "anim" : "static"}"
        ></div>
        <div style="display:${this.blowerState == "on" ? "none" : "block"}">
          <mdi-icon
            style="display:block;height:0"
            icon-name="${mdiChartBubble}"
            border=""
            padding="0.2em"
          >
          </mdi-icon>
        </div>
      </div>
    `;
  }
}
