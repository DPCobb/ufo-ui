export default class UFOIconButton extends HTMLElement {
	static get observedAttributes() {
		return ['icon',]
	}
	constructor() {
		super()
		this.open = false
	}

	connectedCallback() {
		this.classList.add('ufo-icon-button')
		const icon = this.getAttribute('icon'),
			btn = document.createElement('button'),
			ico = document.createElement('i')

		ico.setAttribute('class', icon)
		btn.appendChild(ico)
		this.appendChild(btn)
		this.open = true;
	}

	changeIcon(icon) {
		const btn = document.createElement('button'),
			ico = document.createElement('i')

		ico.setAttribute('class', icon)
		this.querySelector('button').appendChild(ico)
		this.appendChild(btn)
	}

	attributeChangedCallback(attr, oldV, newV) {
		if (this.open) {
			this.changeIcon(newV)
		}
	}
}