import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class NewElement extends PolymerElement {

  static get properties() {
    return {
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template() {
    return html`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <h2>:)</h2>
      <input type="button" value="add another element" on-click="addStartPolymer3" class="btn btn-primary">
      <div id="startPolymerContainer"></div>
    `;
  }

  addStartPolymer3() {
    import('./start-polymer3.js').then((StartPolymer3) => {
      const startPolymer3 = document.createElement('start-polymer3');
      startPolymer3.innerHTML = '<p>Loading...</p>';
      this.shadowRoot.getElementById('startPolymerContainer').appendChild(startPolymer3);
    })
  }
}

customElements.define("new-element", NewElement);
