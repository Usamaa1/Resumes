
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCjfA9W4_jDEyk_DgkIgoFudFtdxxoFcwY",
    authDomain: "shakeel-13825.firebaseapp.com",
    databaseURL: "https://shakeel-13825.firebaseio.com",
    projectId: "shakeel-13825",
    storageBucket: "shakeel-13825.appspot.com",
    messagingSenderId: "817476314138",
    appId: "1:817476314138:web:b4a7fc7f4adc869e6f9da3",
    measurementId: "G-D70531KH07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  // Refrence contactInfo collections
  
  let contactInfo = firebase.database().ref("infos");
  
  // listen for a submit
  
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e){
      e.preventDefault();
      
  
      // Get input values
  
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
    //   let subject = document.querySelector(".subject").value;
      let message = document.querySelector(".message").value;
      console.log(name, email, message);
      
      saveContactInfo(name, email, message);
  
  
      // document.querySelector(".contact-form").reset();
      
          document.getElementById("contact-form").reset();
  }
  
  
  
      
  
  
  
  // Save Infos to firebase
  
  function saveContactInfo(name, email, message){
      let newContactInfo = contactInfo.push();
  
      newContactInfo.set({
          name: name,
          email: email,
          message: message,
      });
  }