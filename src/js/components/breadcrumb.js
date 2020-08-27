export default class UFOBreadcrumb extends HTMLElement {
    static get observedAttributes() {
        ['trail']
    }
    constructor() {
        super();
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        let crumbs = this.getAttribute('trail')
        crumbs = JSON.parse(crumbs)
        crumbs.forEach(c => {
            let link = document.createElement('a')
            link.setAttribute('href', c.link)
            link.textContent = c.text
            if (c.active) {
                link.classList.add('active')
            }
            this.appendChild(link)
        })
        this.classList.add('ufo-breadcrumb')
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }
}