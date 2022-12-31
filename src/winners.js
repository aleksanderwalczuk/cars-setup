import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(root) {
		super()
		this.setTitle('winners')
		this.root = root
		if (!root.children[0].classList.contains('winners-main') || root.children.length < 1) {
			this.renderMainWinners()
		}
	}

	async renderMainWinners() {
		const winnersMain = document.createElement('div')
		this.root.appendChild(winnersMain)
		winnersMain.classList.add('winners-main')

		const garageMain = document.getElementsByClassName('garage-main')

		if (garageMain) {
			garageMain[0].remove()
		}
	}
}
