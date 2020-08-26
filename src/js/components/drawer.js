export default class UFODrawer extends HTMLElement {
    static get observedAttributes() {
        ['title', 'state']
    }
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.open = false;
    }

    toggleState() {
        if (this.open == false) {
            this.open = true
            this.classList.toggle('open')
        } else {
            this.open == false
            this.classList.toggle('open')
            this.classList.toggle('close')
        }
    }

    toggle() {
        this.toggleState()
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        const title = this.getAttribute('title')
        shadowRoot.innerHTML = `
            
        `
        this.classList.add('ufo-drawer')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'state') {
            this.toggleState.bind(this)
        } else if (oldValue !== newValue) {
            this.shadowRoot.innerHTML = `
            `
        }
    }
}