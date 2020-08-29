export default class UFOPill extends HTMLElement {
    static get observedAttributes() {
        return ['text', 'type']
    }
    constructor() {
        super();
        this.open = false
    }

    darkMode() {
        return this.hasAttribute('dark')
    }

    change(name, value) {
        this.setAttribute(name, value)
    }

    connectedCallback() {
        const body = this.getAttribute('text');
        const type = this.getAttribute('type');
        this.textContent = body
        this.classList.add('ufo-pill')
        if (this.hasAttribute('dark')) {
            this.dark == true;
        }
        if (this.darkMode() == false) {
            this.classList.add(type)
        } else {
            this.classList.add(type + '--dark')
        }
        this.setAttribute('tabindex', 0)
        this.open = true
    }

    adjustPill(name, value, old, dark) {
        if (dark == false) {
            name == 'text' ? this.textContent = value : null;
            if (name == "type") {
                this.classList.remove(old)
                this.classList.add(value)
            }
        } else {
            name == 'text' ? this.textContent = value : null;
            if (name == "type") {
                this.classList.remove(old + '--dark')
                this.classList.add(value + '--dark')
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.open) {
            if (newValue != oldValue) {
                this.adjustPill(name, newValue, oldValue, this.darkMode())
            }
        }
    }
}