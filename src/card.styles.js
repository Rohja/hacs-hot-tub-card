import { css } from "lit";

export default css`
  .card-content {
    position: relative;
    /* width: 100%; */
    aspect-ratio: 1 / 1;
  }

  .card-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .baclground {
    z-index: -1;
  }

  .grid {
    z-index: 0;

    aspect-ratio: 1 / 1;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    justify-content: center;
    align-content: center;
    justify-items: stretch;
    align-items: stretch;
    grid-template-areas:
      "header header header action1"
      "icon icon icon action2"
      "icon icon icon action3"
      "icon icon icon action4";
  }

  .header {
    grid-area: header;
    padding-left: 1em;
  }
  .header > h1 {
    color: var(--primary-color);
  }

  .icon {
    grid-area: icon;
    padding: 2em;
  }

  .action1 {
    grid-area: action1;
  }

  .action2 {
    grid-area: action2;
  }

  .action3 {
    grid-area: action3;
  }

  .action4 {
    grid-area: action4;
  }

  action-button {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
