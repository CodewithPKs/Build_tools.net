emailjs.init("AO675p6o5BDVOOANA");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form values
  var form = this;
  var name = form.name.value;
  var email = form.email.value;
  var message = form.message.value;

  // Send the email
  emailjs.send("service_pleesqa", "template_ilttkoe", {
    from_name: name,
    from_email: email,
    message: message
  }).then(function() {
    alert("Email sent successfully!");
    form.reset();
  }, function(error) {
    alert("Error sending email: " + error);
  });
});
