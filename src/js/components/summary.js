class UFOSummaryBody extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add('ufo-summary-body')
		this.addEventListener('click', e => {
			e.stopPropagation()
		})
	}
}
customElements.define('ufo-summary-body', UFOSummaryBody)

export default class UFOSummary extends HTMLElement {
	static get observedAttributes() {
		return ['title',]
	}
	constructor() {
		super()
		this.open = false
	}

	connectedCallback() {
		const title = this.getAttribute('title'),
			header = document.createElement('div'),
			heading = document.createElement('h2'),
			arrow = document.createElement('span')

		arrow.classList.add('arrow')
		header.classList.add('ufo-summary-header')
		heading.textContent = title
		header.appendChild(heading)
		header.appendChild(arrow)
		this.prepend(header)
		this.open = true;
		this.addEventListener('click', e => {
			this.toggleAttribute('open')
		})
	}
}