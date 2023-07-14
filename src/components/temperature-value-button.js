import { html, css, LitElement } from "lit";

export class TemperatureValueButton extends LitElement {
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
    .text {
      font-size: 2.5em;
      font-weight: bold;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="wrapper">
          <div class="text">35°</div>
        </div>
      </div>
    `;
  }
}
