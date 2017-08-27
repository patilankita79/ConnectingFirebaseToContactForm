// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDs-xqRVBqgTPHNScB4lAGcGWn1GR5AdIk",
    authDomain: "contact-form-b51ae.firebaseapp.com",
    databaseURL: "https://contact-form-b51ae.firebaseio.com",
    projectId: "contact-form-b51ae",
    storageBucket: "contact-form-b51ae.appspot.com",
    messagingSenderId: "964638469549"
  };
  firebase.initializeApp(config);

//In NoSQL database, we have collection which is similar to tables in Relational databases.
//Reference a collection named messages
var messagesRef = firebase.database().ref('messages');


/*Create an event listener to listen submission of the form*/

//Listen for the form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit the form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputValues('name');
  var company = getInputValues('company');
  var email = getInputValues('email');
  var phone = getInputValues('phone');
  var message = getInputValues('message');

  //console.log(name);

  //Sending the values to firebase to save message
  saveMessages(name, company, email, phone, message);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    //Set display property back to none.
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //clear the form
  document.getElementById('contactForm').reset();

}

//function to get form values which takes id
function getInputValues(id) {
  return document.getElementById(id).value;
}

//function to save the message to firebase
function saveMessages(name, company, email, phone, message) {

  var newMessageRef = messagesRef.push();

  //Sending an object to 'messages' collection
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
