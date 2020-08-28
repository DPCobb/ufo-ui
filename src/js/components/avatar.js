export default class UFOAvatar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const img = this.getAttribute('avatar')
        let imgParse = encodeURI(img)
        this.classList.add('ufo-avatar')
        this.setAttribute("style", `background-image:url(${imgParse})`)
    }
}