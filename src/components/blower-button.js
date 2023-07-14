import { html, css, LitElement } from "lit";
import { mdiChartBubble } from "@mdi/js";

export class BlowerButton extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      height: 100%;
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      outline: 0.2em solid white;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
    }
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
    .bubbles {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .bubble {
      position: absolute;
      height: 1em;
      width: 1em;
      border-radius: 50px;
      background-color: white;
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
  `;

  render() {
    return html`
      <div class="container">
        <div class="wrapper">
          <div class="bubbles">
            <div class="bubble bubble-anim"></div>
            <div class="bubble bubble-anim"></div>
            <div class="bubble bubble-anim"></div>
          </div>
        </div>
      </div>
    `;
  }
}
