import { html, LitElement, nothing, css } from "lit";
import {
  mdiFan,
  mdiChartBubble,
  mdiArrowUpThick,
  mdiArrowDownThick,
  mdiNumeric0,
  mdiNumeric1,
  mdiNumeric2,
  mdiHeatingCoil,
  mdiAirFilter,
} from "@mdi/js";
import styles from "./card.styles";

export class HotTubCard extends LitElement {
  // private property
  _hass;

  // internal reactive states
  static get properties() {
    return {
      //- LEDs
      light_entity: { state: true },
      light_entity_state: { state: true },
      light_state: { state: true },
      //- Pump
      pump_entity: { state: true },
      pump_entity_state: { state: true },
      pump_state: { state: true },
      //- Blower
      blower_entity: { state: true },
      blower_entity_state: { state: true },
      blower_state: { state: true },
      //- Current Water Temps
      current_temp_entity: { state: true },
      current_temp_entity_state: { state: true },
      current_temp_state: { state: true },
      //- Desired Water Temps
      desired_temp_entity: { state: true },
      desired_temp_entity_state: { state: true },
      desired_temp_state: { state: true },
      //- Outdoor Temps
      outdoor_temp_entity: { state: true },
      outdoor_temp_entity_state: { state: true },
      outdoor_temp_state: { state: true },
      //- Heater
      heater_entity: { state: true },
      heater_entity_state: { state: true },
      heater_state: { state: true },
      //- Filter 1
      filter1_entity: { state: true },
      filter1_entity_state: { state: true },
      filter1_state: { state: true },
      //- Filter 2
      filter2_entity: { state: true },
      filter2_entity_state: { state: true },
      filter2_state: { state: true },
    };
  }

  // lifecycle interface
  setConfig(config) {
    //- LEDs
    this.light_entity =
      config.light_entity === "" ? nothing : config.light_entity;
    //- Pumps
    this.pump_entity = config.pump_entity === "" ? nothing : config.pump_entity;
    //- Blower
    this.blower_entity =
      config.blower_entity === "" ? nothing : config.blower_entity;
    //- Temps
    this.current_temp_entity =
      config.current_temp_entity === "" ? nothing : config.current_temp_entity;
    this.desired_temp_entity =
      config.desired_temp_entity === "" ? nothing : config.desired_temp_entity;
    this.outdoor_temp_entity =
      config.outdoor_temp_entity === "" ? nothing : config.outdoor_temp_entity;
    //- Heater
    this.heater_entity =
      config.heater_entity === "" ? nothing : config.heater_entity;
    //- Filter 1
    this.filter1_entity =
      config.filter1_entity === "" ? nothing : config.filter1_entity;
    //- Filter 2
    this.filter2_entity =
      config.filter2_entity === "" ? nothing : config.filter2_entity;

    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      // Use setter bellow
      this.hass = this._hass;
    }
  }

  set hass(hass) {
    this._hass = hass;
    // Update LEDs status
    this.light_entity_state = hass.states[this.light_entity];
    if (this.light_entity_state) {
      this.light_state = this.light_entity_state.state;
    }
    // Update the Pump status
    this.pump_entity_state = hass.states[this.pump_entity];
    if (this.pump_entity_state) {
      this.pump_state = Number(this.pump_entity_state.state);
    }
    // Update the Blower status
    this.blower_entity_state = hass.states[this.blower_entity];
    if (this.blower_entity_state) {
      this.blower_state = this.blower_entity_state.state;
    }
    // Update the Current Water Temp status
    this.current_temp_entity_state = hass.states[this.current_temp_entity];
    if (this.current_temp_entity_state) {
      this.current_temp_state = Number(this.current_temp_entity_state.state);
    }
    // Update the Desired Water Temp status
    this.desired_temp_entity_state = hass.states[this.desired_temp_entity];
    if (this.desired_temp_entity_state) {
      this.desired_temp_state = Number(this.desired_temp_entity_state.state);
    }
    // Update the Outdoor Temp status
    this.outdoor_temp_entity_state = hass.states[this.outdoor_temp_entity];
    if (this.outdoor_temp_entity_state) {
      this.outdoor_temp_state = Number(this.outdoor_temp_entity_state.state);
    }
    // Update the Heater status
    this.heater_entity_state = hass.states[this.heater_entity];
    if (this.heater_entity_state) {
      this.heater_state = this.heater_entity_state.state;
    }
    // Update the Filter 1 status
    this.filter1_entity_state = hass.states[this.filter1_entity];
    if (this.filter1_entity_state) {
      this.filter1_state = this.filter1_entity_state.state;
    }
    // Update the Filter 2 status
    this.filter2_entity_state = hass.states[this.filter2_entity];
    if (this.filter2_entity_state) {
      this.filter2_state = this.filter2_entity_state.state;
    }
  }

  // declarative part
  static styles = styles;

  pumpSpeed = [
    [mdiNumeric0, 999],
    [mdiNumeric1, 2],
    [mdiNumeric2, 1],
  ];

  rgbToHex(hex) {
    let [r, g, b] = hex || [0, 0, 0];
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }

  render() {
    return html`
      <style></style>
      <ha-card>
        <div class="card-content">
          <div class="card-layer background"></div>
          <div class="card-layer grid">
            <div class="header">
              <h1>Jacuzzi</h1>
              <h2>
                ${this.outdoor_temp_state}°C
                <sup>Outside</sup>
              </h2>
            </div>
            <div class="icon">
              <long-press-element>
                <hot-tub-icon
                  style="display:block;height:0"
                  lights-state="${this.light_state}"
                  lights-color="${this.rgbToHex(
                    this.light_entity_state.attributes?.rgb_color
                  )}"
                  lights-brightness="${this.light_entity_state.attributes
                    .brightness}"
                ></hot-tub-icon>
              </long-press-element>
            </div>
            <div class="action action1">
              <action-button
                action1-icon="${mdiArrowUpThick}"
                action1-fill="red"
                ?action1-hide="${this.current_temp_state <=
                this.desired_temp_state
                  ? true
                  : false}"
                ?action2-hide="${true}"
                action3-icon="${mdiArrowDownThick}"
                action3-fill="blue"
                ?action3-hide="${this.current_temp_state >=
                this.desired_temp_state
                  ? true
                  : false}"
                ?action4-hide="${true}"
              >
                <temperature-value-button
                  slot="custom-button"
                  value="${this.current_temp_state}"
                ></temperature-value-button>
              </action-button>
            </div>
            <div class="action action2" @click=${this.doTogglePump}>
              <action-button
                button-icon="${mdiFan}"
                ?button-rotate="${this.pump_state}"
                button-rotate-duration="${this.pumpSpeed[this.pump_state][1]}"
                action1-icon="${this.pumpSpeed[this.pump_state][0]}"
                ?action1-hide=${!this.pump_state}
                ?action2-hide="${true}"
                ?action3-hide="${true}"
                ?action4-hide="${true}"
              ></action-button>
            </div>
            <div class="action action3" @click=${this.doToggleBlower}>
              <!-- <<blower-button
                blower-state="${this.blower_state}"
              ></blower-button>
              ></blower-button> -->
              <action-button
                ?action1-hide="${true}"
                ?action2-hide="${true}"
                ?action3-hide="${true}"
                action4-icon="${mdiFan}"
                ?action4-rotate="${this.blower_state == "on" ? true : false}"
                action4-rotate-duration="0.5"
                ><blower-button
                  state="${this.blower_state}"
                  slot="custom-button"
                ></blower-button
              ></action-button>
            </div>
            <div class="action action4">
              <action-button
                button-icon="${mdiHeatingCoil}"
                button-viewbox="-5 -5 35 35"
                button-fill="${this.heater_state == "on" ? "red" : "white"}"
                action1-icon="${mdiAirFilter}"
                action1-viewbox="-5 -5 35 35"
                ?action1-hide="${this.filter1_state == "off" ? true : false}"
                ?action2-hide="${true}"
                action3-icon="${mdiAirFilter}"
                action3-viewbox="-5 -5 35 35"
                ?action3-hide="${this.filter2_state == "off" ? true : false}"
                ?action4-hide="${true}"
              ></action-button>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  // card configuration
  // static getConfigElement() {
  //   return document.createElement("toggle-card-lit-editor");
  // }

  doToggleLights(event) {
    try {
      var light_entity_type = this.light_entity.split(".")[0];
    } catch (err) {
      console.error(error);
      return;
    }
    this._hass.callService(light_entity_type, "toggle", {
      entity_id: this.light_entity,
    });
  }

  doToggleBlower(event) {
    try {
      var blower_entity_type = this.blower_entity.split(".")[0];
    } catch (err) {
      console.error(error);
      return;
    }
    this._hass.callService(blower_entity_type, "toggle", {
      entity_id: this.blower_entity,
    });
  }

  doTogglePump(event) {
    try {
      var pump_entity_type = this.pump_entity.split(".")[0];
    } catch (error) {
      console.error(error);
      return;
    }
    let new_state = this.pump_state + 1;
    if (new_state > 2) {
      new_state = 0;
    }
    this._hass.callService(pump_entity_type, "set_value", {
      entity_id: this.pump_entity,
      value: new_state,
    });
  }

  openLightsPopup(event) {
    if (!browser_mod)
      alert("You need to install browser_mod to use this feature (popup).");
    else {
      if (this.light_state == "off") {
        this.doToggleLights();
      }
      const content = {
        hide_header: true,
        color_wheel: true,
        brightness: true,
        show_slider_percent: true,
        full_width_sliders: true,
        type: "custom:light-entity-card",
        entity: this.light_entity,
      };
      let popup = [
        undefined,
        content,
        {
          command: "popup",
          dismissable: true,
          size: "normal",
        },
      ];
      browser_mod.showPopup(...popup);
    }
  }

  constructor() {
    super();
    this.addEventListener("hot-tub-icon-long-press", (event) => {
      this.openLightsPopup(event);
    });
    this.addEventListener("hot-tub-icon-click", (event) => {
      this.doToggleLights(event);
    });
  }

  static getStubConfig() {
    return {
      light_entity: "input_boolean.spa_lights",
      pump_entity: "input_number.spa_pump_speed",
      blower_entity: "input_boolean.spa_blower",
      current_temp_entity: "input_number.spa_water_current_temp",
      desired_temp_entity: "input_number.spa_water_desired_temp",
      outdoor_temp_entity: "input_number.outdoor_temperature",
      heater_entity: "input_boolean.spa_heater",
      filter1_entity: "input_boolean.spa_filter_1",
      filter2_entity: "input_boolean.spa_filter_2",
    };
  }
}
