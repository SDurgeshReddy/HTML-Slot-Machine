// Sample data (replace this with your server-provided data)
const availableSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM"
];

const timeSlotsList = document.getElementById("timeSlots");
const bookButton = document.getElementById("bookBtn");

// Function to display available time slots
function displayTimeSlots() {
  availableSlots.forEach(slot => {
    const li = document.createElement("li");
    li.textContent = slot;
    li.addEventListener("click", () => selectSlot(li));
    timeSlotsList.appendChild(li);
  });
}

// Function to handle slot selection
function selectSlot(selectedSlot) {
  const slots = document.querySelectorAll("li");
  slots.forEach(slot => slot.classList.remove("selected"));
  selectedSlot.classList.add("selected");
  bookButton.removeAttribute("disabled");
}

// Initialize the time slots display
displayTimeSlots();
