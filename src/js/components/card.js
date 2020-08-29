class UFOCardTitle extends HTMLElement {
    constructor() {
        super();
        this.open = false
    }

    connectedCallback() {
        const titleBody = this.getAttribute('title')
        const title = document.createElement('h2')
        title.textContent = titleBody
        this.classList.add('ufo-card-title')
        this.appendChild(title)
        this.setAttribute('tabindex', 0)
    }
}
customElements.define('ufo-card-title', UFOCardTitle);

class UFOCardBody extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add('ufo-card-body')
    }
}
customElements.define('ufo-card-body', UFOCardBody);

class UFOCardFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add('ufo-card-footer')
    }
}
customElements.define('ufo-card-footer', UFOCardFooter);

class UFOCardImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (this.getAttribute('img')) {
            const img = this.getAttribute('img')
            const imgW = document.createElement('div')
            imgW.setAttribute('class', 'img')
            imgW.setAttribute('style', `background-image:url("${img}")`)
            this.appendChild(imgW)
        }
        this.classList.add('ufo-card-image')
    }
}
customElements.define('ufo-card-image', UFOCardImage);

export default class UFOCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add('ufo-card')
    }
}