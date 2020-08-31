export default class UFOIconBar extends HTMLElement {
	static get observedAttributes() {
		return ['position',]
	}

	constructor() {
		super()
		this.open = false
	}
	connectedCallback() {
		const bar = document.createElement('div'),
			wrapper = document.createElement('div'),
			icons = this.querySelectorAll('ufo-icon')


		this.classList.add('ufo-icon-bar')
		bar.classList.add('ufo-icon-bar')
		let position = this.getAttribute('position')

		this.classList.add(position)
		wrapper.classList.add(position)
		icons.forEach(ic => {
			ic.innerHTML = ''
			wrapper.appendChild(ic)
		})
		wrapper.classList.add('ufo-icon-bar-wrapper')
		bar.appendChild(wrapper)
		this.appendChild(bar)
		let w = this.clientWidth / 2,
			h = this.clientHeight / 2,
			s = window.innerWidth / 2,
			sh = window.innerHeight / 2

		if (position == "top" || position == "bottom") {
			this.style.left =  s - w
		} else {
			this.style.top = sh - h
		}

		window.addEventListener('resize', () => {
			let w = this.clientWidth / 2,
				h = this.clientHeight / 2,
				s = window.innerWidth / 2,
				sh = window.innerHeight / 2

			if (position == "top" || position == "bottom") {
				this.style.left =  s - w
			} else {
				this.style.top = sh - h
			}
		})

		this.open = true
	}

	attributeChangedCallback(name, old, newV) {
		if (newV !== old && this.open) {
			this.querySelector('.ufo-icon-bar-wrapper').classList.remove(old)
			this.querySelector('.ufo-icon-bar-wrapper').classList.remove(old)
			this.classList.add(newV)
			this.classList.add(newV)
		}
	}
}