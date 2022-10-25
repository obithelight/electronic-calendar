const hourEl = document.getElementById('hour')
const minsEl = document.getElementById('minutes')
const secsEl = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')
const timeOfDayEl = document.getElementById('timeOfDay')
const dayEl = document.getElementById('day')
const monthEl = document.getElementById('month')
const yearEl = document.getElementById('year')
const seasonEl = document.getElementById('season')

function updateCalendar(){
	let hr = new Date().getHours()
	let mins = new Date().getMinutes()
	let secs = new Date().getSeconds()
	let ampm = 'AM'
	let day = new Date().getDate()
	let month = new Date().getMonth() + 1
	let year = new Date().getFullYear()
	let season = 'RAINY'
	let timeOfDay = 'MORNING'

	ampm = hr < 12 ? 'AM' : 'PM'
	timeOfDay = hr < 12 ? 'morning' : 
				hr > 12 && hr < 18 ? 'afternoon' : 
				'night' 
	hr = hr > 12 ? hr - 12 : hr 
	hr = hr < 10 ? '0' + hr : hr 
	mins = mins < 10 ? '0' + mins : mins 
	secs = secs < 10 ? '0' + secs : secs
	day = day < 10 ? '0' + day : day
	season = month < 3 ? 'dry' : 
			 month > 3 && month < 6 ? 'rainy' : 
			 month > 6 && month < 9 ? 'hot'	: 
			 'cold'
	month = month < 10 ? '0' + month : month

	hourEl.innerText = hr
	minsEl.innerText = mins 
	secsEl.innerText = secs
	ampmEl.innerText = ampm
	timeOfDayEl.innerText = timeOfDay 
	dayEl.innerText = day
	monthEl.innerText = month 
	yearEl.innerText = year
	seasonEl.innerText = season 
	timeOfDay

	setTimeout(() => {
		updateCalendar()
	}, 1000)

}
updateCalendar()