import { HotTubCard, HotTubIcon } from "./card";
// Components
import { HotTubIcon } from "./components/hot-tub-icon";
import { PumpButton } from "./components/pump-button";
import { BlowerButton } from "./components/blower-button";
import { ExtraStatusButton } from "./components/extra-status-button";
import { TemnperatureButton } from "./components/temperature-button";
// Tooling
import { MDIIcon } from "./components/mdi";
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
customElements.define("pump-button", PumpButton);
customElements.define("blower-button", BlowerButton);
customElements.define("extra-status-button", ExtraStatusButton);
customElements.define("temperature-button", TemnperatureButton);

// Tooling
customElements.define("mdi-icon", MDIIcon);
customElements.define("long-press-element", LongPressElement);

// HA Config
window.customCards = window.customCards || [];
window.customCards.push({
  type: "hot-tub-card",
  name: "Hot Tub Card",
  description: "A nice card to display your hot tub state",
});

console.info("Hot Tub Card loaded... (custom:hot-tub-card)");
