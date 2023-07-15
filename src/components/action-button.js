import { html, css, LitElement } from "lit";
import { mdiHelpRhombusOutline } from "@mdi/js";

export class ActionIcon extends LitElement {
  static get properties() {
    return {
      hide: { type: Boolean, attribute: "hide" },
      scale: { type: Number, attribute: "scale" },
      backgroundColor: { type: String, attribute: "background-color" },
      outline: { type: Boolean, attribute: "outline" },
      fill: { type: String, attribute: "fill" },
      mdiIcon: { type: String, attribute: "mdi-icon" },
      rotate: { type: Boolean, attribute: "rotate" },
      rotateDuration: { type: Number, attribute: "rotate-duration" },
      viewbox: { type: String, attribute: "viewbox" },
    };
  }

  constructor() {
    super();
    this.hide = false;
    this.scale = 60;
    this.backgroundColor = "var(--primary-color)";
    this.outline = "0.2em solid white";
    this.fill = "white";
    this.mdiIcon = mdiHelpRhombusOutline;
    this.rotate = false;
    this.rotateDuration = 2;
    this.viewbox = "0 0 24 24";
  }

  static styles = css`
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }

    .container {
      width: 100%;
      height: 100%;

      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <style>
        .container {
          display: ${this.hide ? "none" : "flex"};
        }
        svg {
          width: ${this.scale}%;
          height: ${this.scale}%;
          background-color: ${this.backgroundColor};
          outline: ${this.outline};
          border-radius: 50%;
        }
        path {
          fill: ${this.fill};
        }

        .rotate {
          animation: rotation ${this.rotateDuration}s infinite linear;
        }
      </style>
      <div class="container">
        <svg viewBox="${this.viewbox}" class="${this.rotate ? "rotate" : ""}">
          <path d="${this.mdiIcon}"></path>
        </svg>
      </div>
    `;
  }
}

customElements.define("action-icon", ActionIcon);

export class ActionButton extends LitElement {
  //   pump_speed_icons = [mdiNumeric0, mdiNumeric1, mdiNumeric2];

  static get properties() {
    return {
      name: { type: String, attribute: "name" },
      // Icons (String)
      buttonIcon: { type: String, attribute: "button-icon" },
      action1Icon: { type: String, attribute: "action1-icon" },
      action2Icon: { type: String, attribute: "action2-icon" },
      action3Icon: { type: String, attribute: "action3-icon" },
      action4Icon: { type: String, attribute: "action4-icon" },
      // Hide (Boolean)
      buttonHide: { type: Boolean, attribute: "button-hide" },
      action1Hide: { type: Boolean, attribute: "action1-hide" },
      action2Hide: { type: Boolean, attribute: "action2-hide" },
      action3Hide: { type: Boolean, attribute: "action3-hide" },
      action4Hide: { type: Boolean, attribute: "action4-hide" },
      // Background color (String)
      buttonBackgroundColor: {
        type: String,
        attribute: "button-background-color",
      },
      action1BackgroundColor: {
        type: String,
        attribute: "action1-background-color",
      },
      action2BackgroundColor: {
        type: String,
        attribute: "action2-background-color",
      },
      action3BackgroundColor: {
        type: String,
        attribute: "action3-background-color",
      },
      action4BackgroundColor: {
        type: String,
        attribute: "action4-background-color",
      },
      // Fill   (String)
      buttonFill: { type: String, attribute: "button-fill" },
      action1Fill: { type: String, attribute: "action1-fill" },
      action2Fill: { type: String, attribute: "action2-fill" },
      action3Fill: { type: String, attribute: "action3-fill" },
      action4Fill: { type: String, attribute: "action4-fill" },
      // Rotate (Boolean)
      buttonRotate: { type: Boolean, attribute: "button-rotate" },
      action1Rotate: { type: Boolean, attribute: "action1-rotate" },
      action2Rotate: { type: Boolean, attribute: "action2-rotate" },
      action3Rotate: { type: Boolean, attribute: "action3-rotate" },
      action4Rotate: { type: Boolean, attribute: "action4-rotate" },
      // Rotate Duration (Number)
      buttonRotateDuration: {
        type: Number,
        attribute: "button-rotate-duration",
      },
      action1RotateDuration: {
        type: Number,
        attribute: "action1-rotate-duration",
      },
      action2RotateDuration: {
        type: Number,
        attribute: "action2-rotate-duration",
      },
      action3RotateDuration: {
        type: Number,
        attribute: "action3-rotate-duration",
      },
      action4RotateDuration: {
        type: Number,
        attribute: "action4-rotate-duration",
      },
      // viewBox (String)
      buttonViewBox: { type: String, attribute: "button-viewbox" },
      action1ViewBox: { type: String, attribute: "action1-viewbox" },
      action2ViewBox: { type: String, attribute: "action2-viewbox" },
      action3ViewBox: { type: String, attribute: "action3-viewbox" },
      action4ViewBox: { type: String, attribute: "action4-viewbox" },
    };
  }

  constructor() {
    super();
    this.name = "action-button";
    // Hide
    this.buttonHide = false;
    this.action1Hide = false;
    this.action2Hide = false;
    this.action3Hide = false;
    this.action4Hide = false;
    // Background color
    this.buttonBackgroundColor = "var(--primary-color)";
    this.action1BackgroundColor = "var(--primary-color)";
    this.action2BackgroundColor = "var(--primary-color)";
    this.action3BackgroundColor = "var(--primary-color)";
    this.action4BackgroundColor = "var(--primary-color)";
    // Fill
    this.buttonFill = "white";
    this.action1Fill = "white";
    this.action2Fill = "white";
    this.action3Fill = "white";
    this.action4Fill = "white";
    // Rotate
    this.buttonRotate = false;
    this.action1Rotate = false;
    this.action2Rotate = false;
    this.action3Rotate = false;
    this.action4Rotate = false;
    // Rotate Duration
    this.buttonRotateDuration = 2;
    this.action1RotateDuration = 2;
    this.action2RotateDuration = 2;
    this.action3RotateDuration = 2;
    this.action4RotateDuration = 2;
    // viewBox
    this.buttonViewBox = "0 0 24 24";
    this.action1ViewBox = "0 0 24 24";
    this.action2ViewBox = "0 0 24 24";
    this.action3ViewBox = "0 0 24 24";
    this.action4ViewBox = "0 0 24 24";
  }

  static styles = css`
    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    action-icon {
      width: 100%;
      height: 100%;
    }
    .action {
      width: 2.5em;
      height: 2.5em;

      position: absolute;
    }
    .action.top-right {
      top: 1em;
      right: 1em;
    }
    .action.top-left {
      top: 1em;
      left: 1em;
    }
    .action.bottom-right {
      bottom: 1em;
      right: 1em;
    }
    .action.bottom-left {
      bottom: 1em;
      left: 1em;
    }
  `;

  render() {
    return html`
      <div class="container">
        <long-press event-prefix="${this.name}-button">
          <slot name="custom-button"
            ><action-icon
              class="main"
              mdi-icon="${this.buttonIcon}"
              background-color="${this.buttonBackgroundColor}"
              fill="${this.buttonFill}"
              ?rotate="${this.buttonRotate}"
              rotate-duration="${this.buttonRotateDuration}"
              viewbox="${this.buttonViewBox}"
            ></action-icon
          ></slot>
        </long-press>
        <div class="action top-right">
          <action-icon
            ?hide="${this.action1Hide}"
            mdi-icon="${this.action1Icon}"
            background-color="${this.action1BackgroundColor}"
            fill="${this.action1Fill}"
            scale="80"
            ?rotate="${this.action1Rotate}"
            rotate-duration="${this.action1RotateDuration}"
            viewbox="${this.action1ViewBox}"
          ></action-icon>
        </div>
        <div class="action top-left">
          <action-icon
            ?hide="${this.action2Hide}"
            mdi-icon="${this.action2Icon}"
            background-color="${this.action2BackgroundColor}"
            fill="${this.action2Fill}"
            scale="80"
            ?rotate="${this.action2Rotate}"
            rotate-duration="${this.action2RotateDuration}"
            viewbox="${this.action2ViewBox}"
          ></action-icon>
        </div>
        <div class="action bottom-right">
          <action-icon
            ?hide="${this.action3Hide}"
            mdi-icon="${this.action3Icon}"
            background-color="${this.action3BackgroundColor}"
            fill="${this.action3Fill}"
            scale="80"
            ?rotate="${this.action3Rotate}"
            rotate-duration="${this.action3RotateDuration}"
            viewbox="${this.action3ViewBox}"
          ></action-icon>
        </div>
        <div class="action bottom-left">
          <action-icon
            ?hide="${this.action4Hide}"
            mdi-icon="${this.action4Icon}"
            background-color="${this.action4BackgroundColor}"
            fill="${this.action4Fill}"
            scale="80"
            ?rotate="${this.action4Rotate}"
            rotate-duration="${this.action4RotateDuration}"
            viewbox="${this.action4ViewBox}"
          ></action-icon>
        </div>
      </div>
    `;
  }
}
