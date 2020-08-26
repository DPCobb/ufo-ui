export default class UFOIcon extends HTMLElement {
    static get observedAttributes() {
        ['name', 'size']
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
        const icon = this.getAttribute('name')
        let size = this.getAttribute('size')
        if (size == null) {
            size = 16
        }
        shadowRoot.innerHTML = `
            <img src="/src/icons/${icon}.svg" width="${size}px" height="${size}px"/>
        `
        this.classList.add('ufo-icon')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.shadowRoot.innerHTML = `
            <img src="/icons/${newValue}.svg"/>
            `
        }
    }
}