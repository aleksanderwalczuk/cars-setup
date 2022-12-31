import AbstractView from './AbstractView.js'
import carSvg from './car.svg'
import flagSvg from './flag.svg'

export default class extends AbstractView {
	constructor(root) {
		super()
		this.setTitle('garage')
		this.root = root
		if (!root.children.length || !root.children[0].classList.contains('garage-main')) {
			this.renderMainGarage()
		}
	}

	renderMainGarage() {
		const garageMain = document.createElement('div')
		garageMain.classList.add('garage-main')
		this.root.appendChild(garageMain)

		const winnersMain = document.getElementsByClassName('winners-main')

		if (winnersMain.length) {
			winnersMain[0].remove()
		}

		renderSetPanel(garageMain)
		renderSectionPanel(garageMain)
		renderPagination(garageMain)
	}
}

// SETTINGS PANEL

const renderSetPanel = garageMain => {
	const setPanel = document.createElement('div')
	setPanel.classList.add('set-panel')
	garageMain.appendChild(setPanel)
	setCreate(setPanel)
	setUpdate(setPanel)
	setBtns(setPanel)
}

// SETTINGS PANEL - create

const setCreate = setPanel => {
	const formCreate = document.createElement('form')
	formCreate.classList.add('form-create')
	setPanel.appendChild(formCreate)

	const nameInput = document.createElement('input')
	nameInput.classList.add('name-input')
	nameInput.setAttribute('type', 'text')
	formCreate.appendChild(nameInput)

	const colorInput = document.createElement('input')
	colorInput.classList.add('color-input')
	colorInput.setAttribute('type', 'color')
	formCreate.appendChild(colorInput)

	const btnCreate = document.createElement('input')
	btnCreate.classList.add('button')
	btnCreate.classList.add('btn-create')
	btnCreate.setAttribute('type', 'submit')
	btnCreate.textContent = 'create'
	formCreate.appendChild(btnCreate)
}

// SETTINGS PANEL - update

const setUpdate = setPanel => {
	const formUpdate = document.createElement('form')
	formUpdate.classList.add('form-update')
	setPanel.appendChild(formUpdate)

	const nameUpdate = document.createElement('input')
	nameUpdate.classList.add('name-update')
	nameUpdate.setAttribute('type', 'text')
	formUpdate.appendChild(nameUpdate)

	const colorUpdate = document.createElement('input')
	colorUpdate.classList.add('color-update')
	colorUpdate.setAttribute('type', 'color')
	formUpdate.appendChild(colorUpdate)

	const btnUpdate = document.createElement('input')
	btnUpdate.classList.add('button')
	btnUpdate.classList.add('btn-update')
	btnUpdate.setAttribute('type', 'submit')
	btnUpdate.textContent = 'update'
	formUpdate.appendChild(btnUpdate)
}

// SETTINGS PANEL - buttons

const setBtns = setPanel => {
	const formSetBtn = document.createElement('div')
	formSetBtn.classList.add('form-set-btns')
	setPanel.appendChild(formSetBtn)

	const btnRace = document.createElement('button')
	btnRace.classList.add('button')
	btnRace.classList.add('btn-race')
	btnRace.textContent = 'race'
	formSetBtn.appendChild(btnRace)

	const btnReset = document.createElement('button')
	btnReset.classList.add('button')
	btnReset.classList.add('btn-reset')
	btnReset.textContent = 'reset'
	formSetBtn.appendChild(btnReset)

	const btnGenerate = document.createElement('button')
	btnGenerate.classList.add('button')
	btnGenerate.classList.add('btn-generate')
	btnGenerate.textContent = 'generate cars'
	formSetBtn.appendChild(btnGenerate)
}

// SECTION PANEL

const renderSectionPanel = garageMain => {
	const sectionPanel = document.createElement('div')
	sectionPanel.classList.add('section-panel')
	garageMain.appendChild(sectionPanel)
	sectionHeader(sectionPanel)
	sectionCars(sectionPanel)
}

// SECTION PANEL - heaer

const sectionHeader = renderSectionPanel => {
	const headerGarage = document.createElement('div')
	headerGarage.classList.add('header-garage')
	headerGarage.textContent = `garage ${1}`
	renderSectionPanel.appendChild(headerGarage)

	const headerPage = document.createElement('div')
	headerPage.classList.add('header-page')
	headerPage.textContent = `page #${1}`
	renderSectionPanel.appendChild(headerPage)

// FIXME: example of inline svg using webpack 5
  const example = document.createElement('div');
  example.innerHTML = carSvg;
  renderSectionPanel.appendChild(example);
}

// SECTION PANEL - cars

const sectionCars = renderSectionPanel => {
	const carsUl = document.createElement('ul')
	carsUl.classList.add('cars-ul')
	renderSectionPanel.appendChild(carsUl)
}

// SECTION PANEL - cars create

// fetch('http://127.0.0.1:3000/garage')
// 	.then(res => res.json())
// 	.then(res => {
// 		for (let i = 0; i < res.length; i++) {
// 			createCar(res[i])
// 		}
// 	})

const createCar = catchDefaultCar => {
	const carsUl = document.querySelector('.cars-ul')
	const carLi = document.createElement('div')
	carLi.classList.add('car-li')
	carLi.setAttribute('id', `${catchDefaultCar.id}`)
	carsUl.appendChild(carLi)

	createCarBtns(carLi, catchDefaultCar)
	createCarRoad(carLi, catchDefaultCar)
}

const createCarBtns = (carLi, catchDefaultCarName) => {
	const carBtnsSet = document.createElement('div')
	carBtnsSet.classList.add('car-set-btns')
	carLi.appendChild(carBtnsSet)

	const btnSelect = document.createElement('button')
	btnSelect.classList.add('button')
	btnSelect.classList.add('btn-select')
	btnSelect.textContent = 'select'
	carBtnsSet.appendChild(btnSelect)

	const btnDelete = document.createElement('button')
	btnDelete.classList.add('button')
	btnDelete.classList.add('btn-delete')
	btnDelete.textContent = 'delete'
	carBtnsSet.appendChild(btnDelete)

	const carName = document.createElement('span')
	carName.classList.add('car-name')
	carName.textContent = `${catchDefaultCarName.name}`
	carBtnsSet.appendChild(carName)
}

const createCarRoad = (carLi, catchDefaultCarColor) => {
	const carMain = document.createElement('div')
	carMain.classList.add('road-main')
	carLi.appendChild(carMain)

	const carBtnsMove = document.createElement('div')
	carBtnsMove.classList.add('car-move-btns')
	carMain.appendChild(carBtnsMove)

	const startBtn = document.createElement('button')
	startBtn.classList.add('button')
	startBtn.classList.add('btn-start')
	startBtn.textContent = 'start'
	carBtnsMove.appendChild(startBtn)

	const stopBtn = document.createElement('button')
	stopBtn.classList.add('button')
	stopBtn.classList.add('btn-stop')
	stopBtn.textContent = 'stop'
	carBtnsMove.appendChild(stopBtn)

	// const imgCar = document.createElement('img')
	// imgCar.setAttribute('src', carSvg)
	// imgCar.setAttribute('fill', 'rgb(92, 124, 147)')
	// imgCar.classList.add('car-img')
	// // imgCar.style.fill = 'rgb(92, 124, 147)'
	// carBtnsMove.appendChild(imgCar)

	const imgCar = document.createElement('img')
	imgCar.setAttribute('src', carSvg)
	imgCar.classList.add('car-img')
	carBtnsMove.appendChild(imgCar)

	// const imgFlag = document.createElement('img')
	// imgFlag.setAttribute('src', flagSvg)
	// imgFlag.classList.add('flag-img')
	// carBtnsMove.appendChild(imgFlag)
}

// console.log(imgCar)
// console.log(carSvg)
// console.log(carSvg.style)
// carSvg.style.fill = `${catchDefaultCarColor.color}`
// console.log(carSvg)
// console.log(carSvg.fill)
// SECTION PANEL - pagination

const renderPagination = garageMain => {
	const pagination = document.createElement('div')
	pagination.classList.add('pagination')
	garageMain.appendChild(pagination)
}
