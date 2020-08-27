export default class UFOGrid extends HTMLElement {
    static get observedAttributes() {
        []
    }
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        shadowRoot.innerHTML = `
            <slot name="item-1"></slot>
            <slot name="item-2"></slot>
            <slot name="item-3"></slot>
        `

        this.classList.add('ufo-grid-of-equals')
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }
}