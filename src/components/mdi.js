import { mdiFileQuestionOutline } from "@mdi/js";
import { html, css, LitElement } from "lit";

export class MDIIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String, attribute: "icon-name" },
      rotate: { type: Boolean, attribute: "rotate" },
      border: { type: String, attribute: "border" },
      borderRadius: { type: String, attribute: "border-radius" },
      backgroundColor: { type: String, attribute: "background-color" },
      padding: { type: String, attribute: "padding" },
      color: { type: String, attribute: "color" },
    };
  }

  static styles = css`
    svg {
      /* border: 0.2em solid black; */
    }
    /* ROTATION */
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }

    .rotate {
      animation: rotation 1s infinite linear;
    }
  `;

  constructor() {
    console.info("mdi-icon: contructor() called.");
    super();
    this.icon = mdiFileQuestionOutline;
    this.rotate = false;
    this.border = "0.2em solid black";
    this.borderRadius = "50%";
    this.backgroundColor = "transparent";
    this.padding = "none";
    this.color = "black";
  }

  render() {
    return html`
      <style>
        div {
          padding: ${this.padding != "" ? this.padding : "none"};
        }
        svg {
          border: ${this.border != "" ? this.border : "none"};

          border-radius: ${this.borderRadius != ""
          ? this.borderRadius
          : "100%"};
          -moz-border-radius: ${this.borderRadius != ""
          ? this.borderRadius
          : "100%"};
          -webkit-border-radius: ${this.borderRadius != ""
          ? this.borderRadius
          : "100%"};

          background-color: ${this.backgroundColor != ""
          ? this.backgroundColor
          : "transparent"};
        }
        path {
          fill: ${this.color != "" ? this.color : "black"}};
        }
      </style>
      <div>
        <svg viewBox="0 0 24 24" class="${this.rotate ? "rotate" : ""}">
          <path d="${this.icon}"></path>
        </svg>
      </div>
    `;
  }
}
