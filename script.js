"use strict";
let createAccount = document.querySelector("#create-account");
let col2 = document.querySelector(".col2");
function verifyPassword(event) {
  event.preventDefault();
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;
  let existingIndicator = document.querySelector(".indicator");
  if (existingIndicator) {
    existingIndicator.remove();
  }

  if (password !== confirmPassword) {
    let indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.textContent = "Passwords do not match";
    indicator.style.color = "red";
    col2.appendChild(indicator);
    return;
  }
  document.querySelector("form").submit();
}
createAccount.addEventListener("click", verifyPassword);
