function validateForm(event) {
    event.preventDefault();
    const form = event.target;
  
    const firstName = form.elements['fname'];
    const lastName = form.elements['lname'];
    const email = form.elements['email'];
    const queryType = form.querySelector('input[name="query"]:checked');
    const message = form.elements['message'];
    const consent = form.elements['consent'];
  
    let isValid = true;
  
    if (!firstName.value.trim()) {
      firstName.previousElementSibling.classList.add('error');
      isValid = false;
    } else {
      firstName.previousElementSibling.classList.remove('error');
    }
  
    if (!lastName.value.trim()) {
      lastName.previousElementSibling.classList.add('error');
      isValid = false;
    } else {
      lastName.previousElementSibling.classList.remove('error');
    }
  
    if (!email.value.trim() || !validateEmail(email.value)) {
      email.previousElementSibling.classList.add('error');
      isValid = false;
    } else {
      email.previousElementSibling.classList.remove('error');
    }
  
    if (!queryType) {
      form.querySelector('.query-wrapper').classList.add('error');
      isValid = false;
    } else {
      form.querySelector('.query-wrapper').classList.remove('error');
    }
  
    if (!message.value.trim()) {
      message.parentElement.classList.add('error');
      isValid = false;
    } else {
      message.parentElement.classList.remove('error');
    }

    if (!consent.checked) {
      consent.parentElement.classList.add('error');
      isValid = false;
    } else {
      consent.parentElement.classList.remove('error');
    }

    successModal = document.getElementById("successModal");

    if (isValid) {
      if(successModal.style.display === "none"){
        successModal.style.display = "block";
      } else {
        successModal.style.display = "none";
      }
        form.reset();
        // Reset the background color of all buttons
        document.querySelectorAll('.query-wrapper button').forEach(btn => {
          btn.style.backgroundColor = "";
        });
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  document.querySelectorAll('.query-wrapper button').forEach(button => {
    button.addEventListener('click', () => {
      // Reset background color for all buttons
      document.querySelectorAll('.query-wrapper button').forEach(btn => {
        btn.style.backgroundColor = "";
      });
      
      // Set the background color for the clicked button
      button.querySelector('input').checked = true;
      button.style.backgroundColor = "var(--lighter-green)";
    });
  });


  closeModal = document.querySelector(".close-btn-wrapper");

  closeModal.addEventListener('click', function() {
    if(successModal.style.display === "none"){
      successModal.classList.add('success-close');
    } else {
      successModal.classList.remove('success-wrapper');
    }
    window.location.reload();
});