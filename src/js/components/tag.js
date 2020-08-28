export default class UFOTag extends HTMLElement {
    constructor() {
        super();
        this.open = false;
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        const text = this.getAttribute('text')
        const type = this.getAttribute('type')
        this.classList.add(type)
        const tagText = document.createElement('span')
        tagText.textContent = text
        this.appendChild(tagText)
        this.classList.add('ufo-tag')
        this.open = true;
    }
}