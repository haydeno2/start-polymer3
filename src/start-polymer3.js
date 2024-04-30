
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    
    super();
    
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready(){
    
    super.ready();
    
    console.log(this.tagName);
    this.$.omgpie.focus();
  }
  
  togglePie(){
    if(this.pie && !this.loadComplete) {
      
      import('./lazy-element.js').then((LazyElement) => {
        console.log("LazyElement loaded");
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
  }

  static get template () {
    
    return html`
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
      </style>

      <h1>Polymer Demo</h1>
      <p>[[message]]</p>
      <paper-checkbox id="omgpie"
        toggles
        noink
        checked={{pie}}>Look at this checkbox</paper-checkbox>
      <template is="dom-if" if=[[pie]]>
        <lazy-element><p> loading...</p></lazy-element>
      </template>
    `;
  }
}


customElements.define('start-polymer3', StartPolymer3);
