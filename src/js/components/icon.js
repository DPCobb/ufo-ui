export default class UFOIcon extends HTMLElement {
    static get observedAttributes() {
        return ['name']
    }
    constructor() {
        super();
        this.open = false;
    }

    connectedCallback() {
        const icon = this.getAttribute('name')
        this.classList.add('ufo-icon')
        const ic = document.createElement('img')
        ic.setAttribute("src", `/src/icons/${icon}.svg`)
        this.appendChild(ic)
        this.setAttribute('tabindex', 0)
        this.open = true
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && this.open) {
            const ic = this.querySelector('img')
            ic.setAttribute("src", `/src/icons/${newValue}.svg`)
        }
    }
}