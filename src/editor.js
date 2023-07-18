import { css, html, LitElement } from "lit";
import memoizeOne from "memoize-one";

export class HotTubCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: { state: true },
    };
  }

  setConfig(config) {
    this._config = config;
  }

  static styles = css``;

  _schema = memoizeOne((showSeverity) => [
    {
      label: "Name",
      name: "light_entity",
      selector: {
        entity: {
          domain: ["light"],
        },
      },
    },
    {
      name: "current_temp_entity",
      selector: {
        entity: {
          domain: ["sensor", "input_number"],
        },
      },
    },
    {
      name: "desired_temp_entity",
      selector: {
        entity: {
          domain: ["number", "input_number"],
        },
      },
    },
    {
      name: "outdoor_temp_entity",
      selector: {
        entity: {
          domain: ["number", "input_number"],
        },
      },
    },
    {
      name: "pump_entity",
      selector: {
        entity: {
          domain: ["number", "input_number"],
        },
      },
    },
    {
      name: "blower_entity",
      selector: {
        entity: {
          domain: ["switch", "binary_sensor"],
        },
      },
    },
    {
      name: "heater_entity",
      selector: {
        entity: {
          domain: ["switch", "binary_sensor"],
        },
      },
    },
    {
      name: "filter1_entity",
      selector: {
        entity: {
          domain: ["switch", "binary_sensor"],
        },
      },
    },
    {
      name: "filter2_entity",
      selector: {
        entity: {
          domain: ["switch", "binary_sensor"],
        },
      },
    },

    // {
    //   name: "",
    //   type: "grid",
    //   schema: [
    //     { name: "name", selector: { text: {} } },
    //     { name: "unit", selector: { text: {} } },
    //   ],
    // },
    // { name: "theme", selector: { theme: {} } },
    // {
    //   name: "",
    //   type: "grid",
    //   schema: [
    //     {
    //       name: "min",
    //       default: 0,
    //       selector: { number: { mode: "box", step: "any" } },
    //     },
    //     {
    //       name: "max",
    //       default: 100,
    //       selector: { number: { mode: "box", step: "any" } },
    //     },
    //   ],
    // },
    // {
    //   name: "",
    //   type: "grid",
    //   schema: [
    //     { name: "needle", selector: { boolean: {} } },
    //     { name: "show_severity", selector: { boolean: {} } },
    //   ],
    // },
    // ...(showSeverity
    //   ? [
    //       {
    //         name: "severity",
    //         type: "grid",
    //         schema: [
    //           {
    //             name: "green",
    //             selector: { number: { mode: "box", step: "any" } },
    //           },
    //           {
    //             name: "yellow",
    //             selector: { number: { mode: "box", step: "any" } },
    //           },
    //           {
    //             name: "red",
    //             selector: { number: { mode: "box", step: "any" } },
    //           },
    //         ],
    //       },
    //     ]
    //   : []),
  ]);

  render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const schema = this._schema(this._config.severity !== undefined);
    const data = {
      show_severity: this._config.severity !== undefined,
      ...this._config,
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;
  }

  _valueChanged(ev) {
    let config = ev.detail.value;

    console.log("Config:", config);
    // if (config.show_severity) {
    //   config = {
    //     ...config,
    //     severity: {
    //       green: config.green || config.severity?.green || 0,
    //       yellow: config.yellow || config.severity?.yellow || 0,
    //       red: config.red || config.severity?.red || 0,
    //     },
    //   };
    // } else if (!config.show_severity && config.severity) {
    //   delete config.severity;
    // }

    // delete config.show_severity;
    // delete config.green;
    // delete config.yellow;
    // delete config.red;

    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }

  _computeLabelCallback(schema) {
    const labels = {
      light_entity: "Light Entity",
      current_temp_entity: "Current Temperature Entity",
      desired_temp_entity: "Desired Temperature Entity",
      outdoor_temp_entity: "Outdoor Temperature Entity",
      pump_entity: "Pump Entity",
      blower_entity: "Blower Entity",
      heater_entity: "Heater Entity",
      filter1_entity: "Filter 1 Entity",
      filter2_entity: "Filter 2 Entity",
    };
    if (labels[schema.name]) return labels[schema.name];
    return schema.name;
  }
}
