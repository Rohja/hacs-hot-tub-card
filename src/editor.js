import { css, html, LitElement } from "lit";

export class HotTubCardEditor extends LitElement {
  static get properties() {
    return {
      // hass: {},
      _config: { state: true },
    };
  }

  setConfig(config) {
    this._config = config;
  }

  static styles = css`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;

  render() {
    return html`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="mermaid">Mermaid code:</label>
                    <textarea
                        @change="${this.handleChangedEvent}"
                        rows="10" class="value cell" id="mermaid"
                        >${this._config.mermaid}</textarea>
                </div>
            </form>
        `;
  }

  handleChangedEvent(changedEvent) {
    // this._config is readonly, copy needed
    var newConfig = Object.assign({}, this._config);
    if (changedEvent.target.id == "header") {
      newConfig.header = changedEvent.target.value;
    } else if (changedEvent.target.id == "mermaid") {
      newConfig.mermaid = changedEvent.target.value;
    }
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
