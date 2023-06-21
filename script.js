const navbar = document.getElementById("navbar")
const btnToggleMenu = document.getElementById("nav-toggle")

const inputURL = document.getElementById('url-input')
const btnSubmitURL = document.getElementById('submit-url')
const errorMessage = document.getElementById('error-label')

function toggleMenu() {
  navbar.classList.toggle("nav-mobile-toggle");
}

function addErrorInputStyle() {
  inputURL.classList.add('input-error')
}

function removeErrorInputStyle() {
  inputURL.classList.remove('input-error')
}

function addErrorMessage() {
 errorMessage.classList.remove('error-msg-show') 
}

function removeErrorMessage() {
 errorMessage.classList.add('error-msg-show') 
}

function validateURL(url) {
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}

function createTinyLink() {
  if (!validateURL(inputURL.value)) {
    addErrorInputStyle()
    addErrorMessage()
  } else {
    removeErrorInputStyle()
    removeErrorMessage()
  }
}

btnToggleMenu.addEventListener("click", toggleMenu);
btnSubmitURL.addEventListener('click', createTinyLink)
