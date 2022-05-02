var contactForm = document.querySelector('#contact-form');
// console.log(contactForm);

function submit(event) {
  event.preventDefault();

  var valuesObject = {};
  // console.log('bombs away');

  // var nameValue = contactForm.elements.name.value;
  // var emailValue = contactForm.elements.email.value;
  // var messageValue = contactForm.elements.message.value;

  valuesObject.name = contactForm.elements.name.value;
  valuesObject.email = contactForm.elements.email.value;
  valuesObject.message = contactForm.elements.message.value;

  console.log(valuesObject);

  contactForm.reset();
}

contactForm.addEventListener('submit', submit);
