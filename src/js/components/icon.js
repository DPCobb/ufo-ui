export default class UFOIcon extends HTMLElement {
	static get observedAttributes() {
		return ['name',]
	}
	constructor() {
		super();
		this.open = false;
	}

	connectedCallback() {
		const icon = this.getAttribute('name')

		this.classList.add('ufo-icon')
		const ic = document.createElement('i')

		ic.setAttribute("class", icon)
		this.appendChild(ic)
		this.setAttribute('tabindex', 0)
		this.open = true
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue && this.open) {
			const ic = this.querySelector(newValue)

			ic.setAttribute("class", newValue)
		}
	}
}