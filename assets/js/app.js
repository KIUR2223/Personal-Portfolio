document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactMessage = document.getElementById("contact-message")
  
    emailjs.init("01p3TuyY4jDH7U8Bk"); // Replace with your User ID from EmailJS
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Collect form data
      const formData = new FormData(contactForm);
  
      // Send email
      emailjs.sendForm("service_et1qean", "template_r67smws", "#contact-form")
        .then(() =>{
          contactMessage.textContent = "Message sent succesfully"
          
            setTimeout(() =>{
                contactMessage.textContent = ""
            }, 5000)
        })

        contactForm.reset()

        .catch(function(error) {
          console.error("Email failed to send:", error);
          // Add code to show an error message to the user
        });
    });
    contactForm.reset()
  });