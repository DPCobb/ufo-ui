export default class UFOAlert extends HTMLElement {
	static get observedAttributes() {
		return ['msg', 'type', 'dark',]
	}
	constructor() {
		super();
		this.open = false;
	}
	closeAlert() {
		const states = ['success', 'error', 'warning', 'system',]

		states.forEach(s => {
			this.classList.contains(s) ? this.classList.remove(s) : null
		})
		this.setAttribute('msg', '')
		this.setAttribute('type', '')
	}

	darkMode() {
		return this.hasAttribute('dark')
	}

	setMessage(msg) {
		this.setAttribute('msg', msg)
	}

	alertType(type) {
		this.setAttribute('type', type)
	}

	connectedCallback() {
		const body = this.getAttribute('msg'),
			type = this.getAttribute('type');

		this.classList.add('ufo-alert')
		if (this.hasAttribute('dark')) {
			this.dark == true;
		}
		if (this.darkMode() == false) {
			this.classList.add(type)
		} else {
			this.classList.add(type + '--dark')
		}
		const aMsg = document.createElement('p')

		aMsg.textContent = body
		const aIcon = document.createElement('ufo-icon')

		aIcon.setAttribute('icon', 'fas fa-times')
		aIcon.setAttribute('icon-btn', '')
		aIcon.addEventListener('click', this.closeAlert.bind(this))
		this.appendChild(aMsg)
		this.appendChild(aIcon)
		this.open = true;
	}

	addMessage(msg) {
		this.querySelector('p').textContent = msg
	}

	changeType(n, o) {
		this.classList.remove(o)
		this.classList.add(n)
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue != oldValue && this.open == true) {
			if (this.darkMode() == false) {
				name == 'msg' ? this.addMessage(newValue) : null;
				name == 'type' ? this.changeType(newValue, oldValue) : null;
			} else {
				name == 'msg' ? this.addMessage(newValue) : null;
				name == 'type' ? this.changeType(newValue + '--dark', oldValue + '--dark') : null;
			}
		}
	}
}