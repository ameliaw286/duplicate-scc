import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDz1s2vbkTFz4pU8edXCaBY6asLnhIUfac",
  authDomain: "summer-code-camp-f1743.firebaseapp.com",
  databaseURL: "https://summer-code-camp-f1743-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summer-code-camp-f1743",
  storageBucket: "summer-code-camp-f1743.appspot.com",
  messagingSenderId: "984643563959",
  appId: "1:984643563959:web:6faaccd0acfc694f7db832",
  measurementId: "G-YN3LEBQ9LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference your database
const summerCodeCampDB = getDatabase(app);

document.getElementById('summer-code-camp').addEventListener('submit', submitForm);

// Reference your database
function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var experience = getElementVal("experience");
  var years = getElementVal("years")
  var phone = getElementVal("phone")
  var allergy = getElementVal("allergy")
  var emergencyName = getElementVal("emergencyName")
  var emergencyNumber = getElementVal("emergencyNumber")
  var emergencyRelation = getElementVal("emergencyRelation")
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, experience, years, phone, allergy, emergencyName, emergencyNumber, emergencyRelation, msgContent);

  var alertElement = document.querySelector(".alert");
    if (alertElement) {
      alertElement.style.display = "block";
    } else {
      console.error("Alert element not found in the HTML.");
    }

  //   reset the form
  document.getElementById("summer-code-camp").reset();
}

const saveMessages = (name, emailid, experience, years, phone, allergy, emergencyName, emergencyNumber, emergencyRelation, msgContent) => {
  const newContactFormRef = push(ref(summerCodeCampDB, 'summer-code-camp'));

  set(newContactFormRef, {
    name: name,
    emailid: emailid,
    experience: experience,
    years: years,
    phone: phone,
    allergy: allergy,
    emergencyName: emergencyName,
    emergencyNumber: emergencyNumber,
    emergencyRelation: emergencyRelation,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};