import { HotTubCard, HotTubIcon } from "./card";
// Components
import { HotTubIcon } from "./components/hot-tub-icon";

import { BlowerButton } from "./components/blower-button";

import { ActionButton } from "./components/action-button";
import { TemperatureValueButton } from "./components/temperature-value-button";
// Tooling
import { LongPressElement } from "./components/long-press-element";

// Editor
import { HotTubCardEditor } from "./editor";

// Lit Framework Config
customElements.define("hot-tub-card", HotTubCard);
//- Editor Card
// customElements.define(
//     "hot-tub-card-editor",
//     HotTubCardEditor
// );

customElements.define("hot-tub-icon", HotTubIcon);

customElements.define("blower-button", BlowerButton);

customElements.define("action-button", ActionButton);
customElements.define("temperature-value-button", TemperatureValueButton);

// Tooling
customElements.define("long-press-element", LongPressElement);

// HA Config
window.customCards = window.customCards || [];
window.customCards.push({
  type: "hot-tub-card",
  name: "Hot Tub Card",
  description: "A nice card to display your hot tub state",
});

console.info("Hot Tub Card loaded... (custom:hot-tub-card)");
