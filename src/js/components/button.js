export default class UFOButton extends HTMLElement {
    static get observedAttributes() {
        return ['text', 'type', 'dark']
    }
    constructor() {
        super();
        this.open = false
    }

    darkMode() {
        return this.hasAttribute('dark')
    }

    connectedCallback() {
        const body = this.getAttribute('text');
        const type = this.getAttribute('type');
        this.textContent = body

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
        this.open = true
    }

    adjustAttributes(name, old, newV, dark) {
        name == 'text' ? this.textContent = newV : null;
        if (dark) {
            if (name == "type") {
                this.classList.remove(old + '--dark')
                this.classList.add(newV + '--dark')
            }
        } else {
            if (name == "type") {
                this.classList.remove(old)
                this.classList.add(newV)
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.open) {
            this.adjustAttributes(name, oldValue, newValue, this.darkMode())
        }
    }
}