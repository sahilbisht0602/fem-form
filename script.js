document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateForm() {
  let value = document.forms["emailForm"]["email"].value;
  const isEmailValid = validateEmail(value);
  const errorMsg = document.getElementById("error-msg");
  const inp = document.querySelector("input");
  const container = document.querySelector(".container");
  const thankyou = document.querySelector(".thankyou");
  const userEmail = document.getElementById("user-email");
  console.log(userEmail);
  console.log(container);
  if (!isEmailValid) {
    errorMsg.classList.add("isShown");
    errorMsg.classList.remove("notShown");
    inp.classList.add("error");
  } else {
    errorMsg.classList.remove("isShown");
    errorMsg.classList.add("notShown");
    inp.classList.remove("error");
    container.classList.add("notShown");
    thankyou.classList.remove("notShown");
    userEmail.innerHTML = value;
  }
}
