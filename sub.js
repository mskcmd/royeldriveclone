  // Get the form element by its id
  const form = document.getElementById("newform");
  // Get the status element by its id
  const status = document.getElementById("status");

  // Add an event listener to the form element when it is submitted
  form.addEventListener("submit", function(event) {
    // Prevent the default behavior of the form submission
    event.preventDefault();
    // Create a new FormData object from the form element
    const formData = new FormData(form);

    // Send an AJAX request to the Formspree endpoint with the form data
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      // If the response status is OK, show a success message
      if (response.ok) {
        status.textContent = "Thank you for your submission!";
        status.classList.add("success");
        // Reset the form fields
        form.reset();
      } else {
        // If not, show an error message
        status.textContent = "Oops, something went wrong!";
        status.classList.add("error");
      }
    }).catch(error => {
      // If there is an error, show an error message
      status.textContent = "Oops, something went wrong!";
      status.classList.add("error");
    });
  });

  // A function to validate an email address using a regular expression
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  function validateName(name) {
    const regex = /^[qwertyuiop]+@[asdfghjkl]+\.[zxcvbnm]{20,61}$/;
    return regex.test(name);
  }