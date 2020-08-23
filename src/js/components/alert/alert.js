export default class UFOAlert extends HTMLElement {
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
        this.setAttribute('data-msg', '')
        this.setAttribute('data-type', '')
    }

    darkMode() {
        return this.hasAttribute('dark')
    }

    connectedCallback() {
        const {
            shadowRoot
        } = this
        const body = this.getAttribute('data-msg');
        const type = this.getAttribute('data-type');
        shadowRoot.innerHTML = `
            <style>
            span {
                font-size: 1rem;
                position: absolute;
                top: 20px;
                right: 20px;
            }
            span:hover{
                cursor:pointer;
            }
            p {
                padding: 0;
                margin: 0
            }
            </style>
            <p>${body}</p>
            <span class='close'>X</span>
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
        shadowRoot.querySelector('.close').addEventListener('click', this.closeAlert.bind(this))
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.darkMode() == false) {
            name == 'data-msg' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'data-type' ? this.classList.remove(oldValue).add(newValue) : null;
        } else {
            name == 'data-msg' ? this.shadowRoot.innerHTML = newValue : null;
            name == 'data-type' ? this.classList.remove(oldValue + '--dark').add(newValue + '--dark') : null;
        }
    }
}