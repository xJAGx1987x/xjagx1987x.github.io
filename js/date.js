function getCurrentDateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  // Add a space after AM/PM for better spacing
  return `${hours}:${minutes} ${amPm}   ${month}-${day}-${year}`;
}

function updateDateTime() {
  document.getElementById("current-date").textContent = getCurrentDateTime();
}

updateDateTime();
setInterval(updateDateTime, 10000);
