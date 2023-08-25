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


  const downloadBtn = document.querySelector(".myway-btn");
  const fileLink = "https://drive.google.com/uc?export=download&id=1q4j9ctbSu1hO3Go889fbLQzGYnMRK9hZ";
  const initTimer = () => {
      if(downloadBtn.classList.contains("disable-timer")) {
          return location.href = fileLink;
      }
      let timer = downloadBtn.dataset.timer;
      downloadBtn.classList.add("timer");
      downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
      const initCounter = setInterval(() => {
          if(timer > 0) {
              timer--;
              return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
          }
          clearInterval(initCounter);
          location.href = fileLink;
          downloadBtn.innerText = "Your file is downloading...";
          setTimeout(() => {
              downloadBtn.classList.replace("timer", "disable-timer");
              downloadBtn.innerHTML = `<span class="text">Download Again</span>`;
          }, 3000);
      }, 1000);
  }
  downloadBtn.addEventListener("click", initTimer);