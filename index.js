//A property of Saksham Dwivedi
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});



function sendEmail(){
Email.send({
    SecureToken : "e62c2f65-e0ac-4e3e-9856-4e0cc87ab86a",
    To : "emailreceiver6969@gmail.com",
    From : document.getElementById("email").value,
    Subject : "PORTFOLIO WEBSITE QUERY",
    Body : document.getElementById("message").value
}).then(
  message => alert(message)
);
}
//A property of Saksham Dwivedi
