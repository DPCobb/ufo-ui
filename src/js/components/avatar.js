export default class UFOAvatar extends HTMLElement {
    static get observedAttributes() {
        ['img']
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
        const img = this.getAttribute('avatar')
        let imgParse = encodeURI(img)
        shadowRoot.innerHTML = `
        `
        this.classList.add('ufo-avatar')
        this.setAttribute("style", `background-image:url(${imgParse})`)
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }
}