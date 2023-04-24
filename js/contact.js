const email_link = document.getElementById('email_link');
const origina_text = email_link.innerHTML;
const email = 'andelsonprogrammer@gmail.com'

email_link.addEventListener('mouseover', () => {

  email_link.innerHTML = email;

});

email_link.addEventListener('mouseleave', () => {
  
  email_link.innerHTML = origina_text;

});