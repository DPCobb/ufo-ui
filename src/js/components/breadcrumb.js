export default class UFOBreadcrumb extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
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
}