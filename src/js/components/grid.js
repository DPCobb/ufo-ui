export default class UFOGrid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add('ufo-grid-of-equals')
    }
}