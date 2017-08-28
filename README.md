# ConnectingFirebaseToContactForm
Back-end for Contact form: <br/><br/>Mobile first responsive contact form is connected to firebase to store the submission from front-end to a firebase database.
<hr>
Firebase is a cloud service for database, authentication, etc.
<br/>
<hr>
<li>Create a firebase account</li>
<li>Go to console </li>
<li>Add a project </li>
<li>Select option => Add firebase to your web app</li>
<li>Copy and paste the snippet at the bottom of your HTML, before other script tags.</li>
<hr>
<b>Firebase Authentication: </b><br/>
For submitting the form, no authentication is required. Anyone can submit this form.
<br/>
To meet the above condition, 
<li>Go to database</li>
<li> Go to Rules tab, and change the value of .write to true </li>
<br/>

<img src ="https://github.com/patilankita79/ConnectingFirebaseToContactForm/blob/master/Screenshots/AuthenticationSetting.png" />
<hr>
<h3>Input </h3>
<img src="https://github.com/patilankita79/ConnectingFirebaseToContactForm/blob/master/Screenshots/InputValues.png" />
<hr>
<h3>Output: Message gets stored to Firebase database (Type of database: NoSQL)</h3>
<img src= "https://github.com/patilankita79/ConnectingFirebaseToContactForm/blob/master/Screenshots/MessagesInDatabase.png" />
<img src="https://github.com/patilankita79/ConnectingFirebaseToContactForm/blob/master/Screenshots/Messages.png" />


