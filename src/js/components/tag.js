export default class UFOTag extends HTMLElement {
    static get observedAttributes() {
        ["text", "type"]
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
        const text = this.getAttribute('text')
        const type = this.getAttribute('type')
        this.classList.add(type)
        shadowRoot.innerHTML = `
            ${text}
        `
        this.classList.add('ufo-tag')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue != oldValue) {
            this.shadowRoot.innerText = `
                ${newValue}
            `
        }

    }
}