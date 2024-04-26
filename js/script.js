import {
	plasticNo,
	plasticYes,
	glassNo,
	glassYes,
	paperNo,
	paperYes,
	bioNo,
	bioYes,
	mixedNo,
	mixedYes,
} from '../database/database.js'

const allSegregateIconsWrappers = document.querySelectorAll('.segregate__iconWrapper')
const allSegregateIcons = document.querySelectorAll('.segregate__icon')
const allFrontTables = document.querySelectorAll('.segregate__table--front')
const allBackTables = document.querySelectorAll('.segregate__table--back')
const allTableLists = document.querySelectorAll('.segregate__table--list')



const checkWhatSegregateButtonClickedFunction = e => {
	const classListValue = e.target.classList.value
	switch (classListValue) {
		case 'fa-solid fa-bottle-water segregate__icon':
			addRemoveActiveForIconFunction()
			allTableLists.forEach(table => {
				table.innerHTML = ''
			})
			createYesListFunction(plasticYes)
			createNoListFunction(plasticNo)
			allSegregateIconsWrappers[0].classList.add('icon-active')
			allSegregateIcons[0].classList.add('icon-active')
			break
		case 'fa-solid fa-newspaper segregate__icon':
			addRemoveActiveForIconFunction()
			allTableLists.forEach(table => {
				table.innerHTML = ''
			})
			createYesListFunction(paperYes)
			createNoListFunction(paperNo)
			allSegregateIconsWrappers[1].classList.add('icon-active')
			allSegregateIcons[1].classList.add('icon-active')
			break
		case 'fa-solid fa-wine-bottle segregate__icon':
			addRemoveActiveForIconFunction()
			allTableLists.forEach(table => {
				table.innerHTML = ''
			})
			createYesListFunction(glassYes)
			createNoListFunction(glassNo)
			allSegregateIconsWrappers[2].classList.add('icon-active')
			allSegregateIcons[2].classList.add('icon-active')
			break
		case 'fa-solid fa-seedling segregate__icon':
			addRemoveActiveForIconFunction()
			allTableLists.forEach(table => {
				table.innerHTML = ''
			})
			createYesListFunction(bioYes)
			createNoListFunction(bioNo)
			allSegregateIconsWrappers[3].classList.add('icon-active')
			allSegregateIcons[3].classList.add('icon-active')
			break
		case 'fa-solid fa-recycle segregate__icon':
			addRemoveActiveForIconFunction()
			allTableLists.forEach(table => {
				table.innerHTML = ''
			})
			createYesListFunction(mixedYes)
			createNoListFunction(mixedNo)
			allSegregateIconsWrappers[4].classList.add('icon-active')
			allSegregateIcons[4].classList.add('icon-active')
			break
	}
}

const addRemoveActiveForIconFunction = () => {
	allSegregateIconsWrappers.forEach(icon => {
		icon.classList.remove('icon-active')
	})

	allSegregateIcons.forEach(icon => {
		icon.classList.remove('icon-active')
	})
}

const createYesListFunction = listOfYes => {
	allFrontTables[0].classList.add('hide-front')
	allBackTables[0].classList.add('show-back')
	listOfYes.forEach(item => {
		const newItem = document.createElement('li')
		newItem.textContent = item
		newItem.classList.add('segregate__table--item')
		allTableLists[0].appendChild(newItem)
	})
}

const createNoListFunction = listOfNo => {
	allFrontTables[1].classList.add('hide-front')
	allBackTables[1].classList.add('show-back')
	listOfNo.forEach(item => {
		const newItem = document.createElement('li')
		newItem.textContent = item
		newItem.classList.add('segregate__table--item')
		allTableLists[1].appendChild(newItem)
	})
}

allSegregateIconsWrappers.forEach(icon => {
	icon.addEventListener('click', checkWhatSegregateButtonClickedFunction)
})



// const showSegregateTablesFunction = () => {
// 	allBackTables.forEach(table => {
// 		table.classList.toggle('show-back')
// 	})

// 	allFrontTables.forEach(table => {
// 		table.classList.toggle('hide-front')
// 	})
// }

// allSegregateIcons.forEach(icon => {
// 	icon.addEventListener('click', showSegregateTablesFunction)
// })
