document.addEventListener('DOMContentLoaded', () => {

  const targetDate = new Date(); // Get the current date and time
  targetDate.setDate(targetDate.getDate() + 14); // Add 14 days

  const daysElement = document.querySelector('.days-card');
  const hoursElement = document.querySelector('.hours-card');
  const minutesElement = document.querySelector('.mins-card');
  const secondsElement = document.querySelector('.secs-card');

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }

  // Initial update.
  updateCountdown();

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
});
