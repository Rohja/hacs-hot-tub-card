import { HotTubCard, HotTubIcon } from "./card";
import { LongPressElement, ActionButton } from "ha-elements";
// Components
import { HotTubIcon } from "./components/hot-tub-icon";
import { BlowerButton } from "./components/blower-button";
import { TemperatureValueButton } from "./components/temperature-value-button";

// Editor
import { HotTubCardEditor } from "./editor";

// Card
customElements.define("hot-tub-card", HotTubCard);

// Editor Card
customElements.define("hot-tub-card-editor", HotTubCardEditor);

// Tooling
customElements.define("long-press", LongPressElement);
customElements.define("action-button", ActionButton);

// Components
customElements.define("hot-tub-icon", HotTubIcon);
customElements.define("blower-button", BlowerButton);
customElements.define("temperature-value-button", TemperatureValueButton);

// HA Config
window.customCards = window.customCards || [];
window.customCards.push({
  type: "hot-tub-card",
  name: "Hot Tub Card",
  description: "A nice card to display your hot tub state",
  preview: true,
  documentationURL:
    "https://github.com/Rohja/hacs-hot-tub-card/blob/master/README.md",
});

console.info("Hot Tub Card loaded... (custom:hot-tub-card)");
