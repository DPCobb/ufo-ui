export default class UFOButton extends HTMLElement {
    static get observedAttributes() {
        ['text', 'type', 'dark']
    }
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
    }

    darkMode() {
        return this.hasAttribute('dark')
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        const body = this.getAttribute('text');
        const type = this.getAttribute('type');
        shadowRoot.innerHTML = `${body}`

        this.classList.add('ufo-button')
        if (this.hasAttribute('dark')) {
            this.dark == true;
        }
        if (this.darkMode() == false) {
            this.classList.add(type)
        } else {
            this.classList.add(type + '--dark')
        }
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.darkMode() == false) {
            name == 'text' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'type' ? this.classList.remove(oldValue).add(newValue) : null;
        } else {
            name == 'text' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'type' ? this.classList.remove(oldValue + '--dark').add(newValue + '--dark') : null;
        }
    }
}