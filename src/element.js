import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class MyElement extends PolymerElement {
    static get template(){
        return html`
            <h2>Hello World</h2>
        `;
    }
}

customElements.define("my-element", MyElement);
