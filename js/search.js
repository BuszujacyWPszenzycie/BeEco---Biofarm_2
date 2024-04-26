import { DATABASE } from '../database/database.js'

const findTop = document.querySelector('.find__top')
const findTitle = document.querySelector('.find__title')
const findList = document.querySelector('.find__list')
const findIcon = document.querySelector('.find__icon')
const searchInput = document.querySelector('.search__input')
const searchButton = document.querySelector('.search__button')

const checkIfFindListEmptyFunction = () => {
	if (findList.children.length === 0) {
		findTitle.textContent = 'Nie znaleziono produktów'
	} else {
		findTitle.textContent = 'Lista produktów'
	}
}

const showFindListFunction = () => {
	findTop.classList.toggle('show-find')
	findIcon.classList.toggle('rotate-find-icon')
}

const filterObjectsFunction = () => {
	const filteredDatabse = DATABASE.filter(obj => {
		const title = obj.title.toLowerCase()
		const description = obj.description.toLowerCase()
		const searchTerm = searchInput.value.toLowerCase()

		return title.includes(searchTerm) || description.includes(searchTerm)
	})

	filteredDatabse.forEach(item => {
		const findItemDiv = document.createElement('div')
		findItemDiv.classList.add('find__item')
		const findItemTitle = document.createElement('h3')
		findItemTitle.classList.add('find__item--title')
		findItemTitle.textContent = item.title
		const listOfIconsDiv = document.createElement('div')
		const itemIcon = document.createElement('i')
		const listOfClasses = item.icon
		listOfClasses.forEach(classItem => {
			itemIcon.classList.add(classItem)
		})
		const descriptionP = document.createElement('p')
		descriptionP.classList.add('find__item--description')
		descriptionP.textContent = item.description

		findItemDiv.appendChild(findItemTitle)
		findItemDiv.appendChild(listOfIconsDiv)
		listOfIconsDiv.appendChild(itemIcon)
		findItemDiv.appendChild(descriptionP)

		findList.appendChild(findItemDiv)
	})
}

findIcon.addEventListener('click', showFindListFunction)
findIcon.addEventListener('click', checkIfFindListEmptyFunction)
searchButton.addEventListener('click', filterObjectsFunction)
