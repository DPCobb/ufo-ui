export default class UFOIcon extends HTMLElement {
	static get observedAttributes() {
		return ['icon',]
	}
	constructor() {
		super();
		this.open = false;
	}

	connectedCallback() {
		const icon = this.getAttribute('icon')

		this.classList.add('ufo-icon')
		const ic = document.createElement('i')

		ic.setAttribute("class", icon)
		this.appendChild(ic)
		this.setAttribute('tabindex', 0)
		this.open = true
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue != oldValue && this.open) {
			const ic = this.querySelector(oldValue)

			ic.setAttribute("class", newValue)
		}
	}
}