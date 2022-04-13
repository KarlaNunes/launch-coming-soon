const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const expectedDay = '28 Apr 2022'

function countdown() {
  const expectedDayDate = new Date(expectedDay)
  const currentDate = new Date()

  //diferença em segundos (tempo que falta em segundos)
  const totalSeconds = (expectedDayDate - currentDate) / 1000

  const daysLeft = Math.floor(totalSeconds / 3600 / 24)
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24
  const minutesLeft = Math.floor(totalSeconds / 60) % 60
  const secondsLeft = Math.floor(totalSeconds) % 60

  days.innerHTML = daysLeft
  hours.innerHTML = formatTime(hoursLeft)
  minutes.innerHTML = formatTime(minutesLeft)
  seconds.innerHTML = formatTime(secondsLeft)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)

//================= MODAL ==================
const buttonSubscribe = document.getElementById('subscribe')
const modalContainer = document.getElementById('modal-container')
const buttonCloseModal = document.getElementById('close')

buttonSubscribe.addEventListener('click', () => {
  modalContainer.classList.add('show')
})

buttonCloseModal.addEventListener('click', () => {
  modalContainer.classList.remove('show')
})
