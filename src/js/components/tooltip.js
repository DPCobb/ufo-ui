class UFOTipText extends HTMLElement {
    constructor() {
        super();
        this.open = false
    }

    connectedCallback() {
        this.classList.add('ufo-tip-text')
        this.open = true;
    }
}
customElements.define('ufo-tip-text', UFOTipText);

export default class UFOTip extends HTMLElement {
    static get observedAttributes() {
        return ['tip']
    }
    constructor() {
        super();
    }

    connectedCallback() {
        const tip = this.getAttribute('tip')
        const tipT = document.createElement('ufo-tip-text')
        tipT.textContent = tip
        this.classList.add('ufo-tooltip')
        this.addEventListener('mouseenter', function () {
            this.setAttribute('show', '')
        })
        this.addEventListener('mouseleave', function () {
            this.removeAttribute('show')
        })
        this.setAttribute('tabindex', 0)
        this.open = true
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.open && oldValue !== newValue) {
            this.querySelector('ufo-tip-text').textContent = newValue
        }
    }
}