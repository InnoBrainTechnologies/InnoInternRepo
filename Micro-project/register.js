
document.addEventListener("DOMContentLoaded", function()
 {
  const registerButtons = document.querySelectorAll(".register-btn");
  const bookingModal = document.getElementById("booking-modal");
  const castTypeInput = document.getElementById("cast-type");
  const bookingForm = document.getElementById("booking-form");

  const roomPrices = 
  {
    "Prajapati cast": "₹36000",
    "Other cast": "₹48000"
    
  };

  // Open the booking modal when a book button is clicked
   registerButtons.forEach(button => {
    button.addEventListener("click", function() {
      const castType = this.getAttribute("data-cast-type");
      castTypeInput.value = castType;
      bookingForm.elements["roomPrice"].value = roomPrices[castType]; // Set the room price
      bookingModal.style.display = "block";
    });
  });

  
});
document.addEventListener("DOMContentLoaded", function() {
  const registerButtons = document.querySelectorAll(".register-btn");
  const bookingModal = document.getElementById("booking-modal");
  const castTypeInput = document.getElementById("cast-type");
  const bookingForm = document.getElementById("booking-form");

  // Open the booking modal when a book button is clicked
  registerButtons.forEach(button => {
    button.addEventListener("click", function() {
      const castType = this.getAttribute("data-cast-type");
      castTypeInput.value = castType;
      bookingModal.style.display = "block";
    });
  });

  // Close the booking modal when the close button is clicked
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function() {
    bookingModal.style.display = "none";
  });

  // Submit the booking form
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const castType = castTypeInput.value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // You can perform further validation and submission logic here

    // For now, let's display an alert
    alert(`Booking details:\ncast-Type: ${castType}\nName: ${name}\nEmail: ${email}`);
    bookingModal.style.display = "none";
    bookingForm.reset();
  });
});
