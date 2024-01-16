// Countdown timer
var daysE1 = document.getElementById('days')
var hoursE1 = document.getElementById('hours')
var minutesE1 = document.getElementById('minutes')
var secondsE1 = document.getElementById('seconds')

function countdownTimer() {
    const countDownDate = new Date('06/03/2024 09:30').getTime()

    // Convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Calculate every second
    const interval = setInterval(() => {
        // Get current date
        const now = new Date().getTime()
        const distance = countDownDate - now

        if (distance >= 0) {
            daysE1.innerText = formatNumber(Math.floor(distance / day))
            hoursE1.innerText = formatNumber(Math.floor((distance % day) / hour))
            minutesE1.innerText = formatNumber(Math.floor((distance % hour) / minute))
            secondsE1.innerText = formatNumber(Math.floor((distance % minute) / second))
        } else { // When date is reached
            clearInterval(interval)
            daysE1.innerText = '00'
            hoursE1.innerText = '00'
            minutesE1.innerText = '00'
            secondsE1.innerText = '00'
        }
    }, 1000)
}

// Add 0 if number is smaller than 10 (eg 8 --> 08)
function formatNumber(number) {
    if (number < 10) {
        return '0' + number
    }

    return number
}

// Run Function
countdownTimer()