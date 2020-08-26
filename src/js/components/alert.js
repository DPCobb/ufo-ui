export default class UFOAlert extends HTMLElement {
    static get observedAttributes() {
        ['msg', 'type', 'dark']
    }
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
    }

    closeAlert() {
        const states = ['success', 'error', 'warning', 'system']
        states.forEach(s => {
            this.classList.contains(s) ? this.classList.remove(s) : null
        })
        this.setAttribute('msg', '')
        this.setAttribute('type', '')
    }

    darkMode() {
        return this.hasAttribute('dark')
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        const body = this.getAttribute('msg');
        const type = this.getAttribute('type');
        shadowRoot.innerHTML = `
            <style>
            .ufo-icon {
                position: absolute;
                top: 25px;
                right: 20px;
                padding: 2px;
                display: block;
                transition: all .3s ease-out;
            }
            [icon-btn]:hover {
                cursor: pointer;
                transform: scale(1.3);
            }
            p {
                padding: 0;
                margin: 0
            }
            </style>
            <p>${body}</p>
            <ufo-icon name="close" icon-btn></ufo-icon>
        `

        this.classList.add('ufo-alert')
        if (this.hasAttribute('dark')) {
            this.dark == true;
        }
        if (this.darkMode() == false) {
            this.classList.add(type)
        } else {
            this.classList.add(type + '--dark')
        }
        shadowRoot.querySelector('ufo-icon').addEventListener('click', this.closeAlert.bind(this))
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.darkMode() == false) {
            name == 'msg' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'type' ? this.classList.remove(oldValue).add(newValue) : null;
        } else {
            name == 'msg' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'type' ? this.classList.remove(oldValue + '--dark').add(newValue + '--dark') : null;
        }
    }
}