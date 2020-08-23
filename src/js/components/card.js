class UFOCardTitle extends HTMLElement {
    static get observedAttributes() {
        ['title']
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
        const title = this.getAttribute('title')
        shadowRoot.innerHTML = `
            <h2>${title}</h2>
        `
        this.classList.add('ufo-card-title')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.shadowRoot.innerHTML = `
                <h2>${newValue}</h2>
            `
        }
    }
}
customElements.define('ufo-card-title', UFOCardTitle);

class UFOCardBody extends HTMLElement {
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
            <slot></slot>
        `
        this.classList.add('ufo-card-body')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.shadowRoot.innerHTML = `
                <slot></slot>
            `
        }
    }
}
customElements.define('ufo-card-body', UFOCardBody);

class UFOCardFooter extends HTMLElement {
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
            <slot></slot>
        `
        this.classList.add('ufo-card-footer')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.shadowRoot.innerHTML = `
                <slot></slot>
            `
        }
    }
}
customElements.define('ufo-card-footer', UFOCardFooter);

export default class UFOCard extends HTMLElement {
    /*static get observedAttributes() {
        ['text']
    }*/
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
        <slot></slot>
        <slot></slot>
        <slot></slot>
        `
        this.classList.add('ufo-card')
        this.setAttribute('tabindex', 0)
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }
}