const button = document.getElementById("boton");
const finalCard = document.getElementById("tarjetaFinal");
const card = document.getElementById("tarjeta");
const emailError = document.getElementById("emailError");
const emailInput = document.getElementById("emails");

function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
button.addEventListener("click", (e) => {
  // finalCard.style.display = "flex"
  // card.style.display = "none"
  e.preventDefault();
 
  const emailInputValue = emailInput.value;
  console.log(emailInputValue);
  // esto valida si email tiene formato correcto
  if (validateEmail(emailInputValue)) {
    finalCard.style.display = "flex";
    card.style.display = "none";
  }else{
    emailError.style.display = "flex";
    emailInput.classList.remove("emails")
    emailInput.classList.add("emailsError")
  
  }
});
