class UFOTipText extends HTMLElement {
    static get observedAttributes() {
        ['show']
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
        `
        this.classList.add('ufo-tip-text')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {}
    }
}
customElements.define('ufo-tip-text', UFOTipText);

export default class UFOTip extends HTMLElement {
    static get observedAttributes() {
        ['tip']
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
        const tip = this.getAttribute('tip')
        shadowRoot.innerHTML = `
            <slot name="tip"></slot>
        `
        this.classList.add('ufo-tooltip')
        this.addEventListener('mouseenter', function () {
            this.setAttribute('show', '')
        })
        this.addEventListener('mouseleave', function () {
            this.removeAttribute('show')
        })
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {}
    }
}