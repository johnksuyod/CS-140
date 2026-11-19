document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const age = document.getElementById("birth-date").value;
  const location = document.getElementById("region").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const termsAndConditions = document.getElementById("conditions").checked;
  const suggestion = document.getElementById("suggestion").value;

  if (!firstName || !lastName) {
    alert("You need a name.");
    return;
  }

  if (!age || age < 18) {
    alert("You need to be 18.");
    return;
  }

  if (!email) {
    alert("You need an email.");
    return;
  }

  if (!password || password !== confirmPassword) {
    alert("Password do not match.");
    return;
  }

  const formData = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    location: location,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    termsAndConditions: termsAndConditions,
    suggestion: suggestion,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "submit.json", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      document.getElementById("message").innerHTML = response.message;
      document.getElementById("myForm").innerHTML = "";
    } else if (xhr.readyState === 4) {
      alert("Error submitting form.");
    }
  };

  xhr.send(JSON.stringify(formData));
  alert("Form Submitted");
  console.log(formData);
});
