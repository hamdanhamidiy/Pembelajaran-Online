// Contact form submission (Example with console output)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert("Pesan Anda telah terkirim!");
  e.target.reset();
});
