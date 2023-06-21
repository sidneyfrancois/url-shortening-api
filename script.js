const navbar = document.getElementById("navbar")
const btnToggleMenu = document.getElementById("nav-toggle")

const inputURL = document.getElementById('url-input')
const btnSubmitURL = document.getElementById('submit-url')
const errorMessage = document.getElementById('error-label')
const resultContainer = document.getElementById('result')

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

function createURLResultContainer(originalURL, tinyURL) {
  let resultBox = document.createElement('div')
  let originalURLSpan = document.createElement('span')
  let tinyURLSpan = document.createElement('span')
  let buttonCopy = document.createElement('button')
  
  buttonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(tinyURLSpan.textContent)
  })
  
  originalURLSpan.textContent = originalURL 
  tinyURLSpan.textContent = tinyURL 
  buttonCopy.textContent = 'copy'
  
  resultBox.appendChild(originalURLSpan)
  resultBox.appendChild(tinyURLSpan)
  resultBox.appendChild(buttonCopy)
  resultBox.className = 'result-box'
  
  resultContainer.appendChild(resultBox) 
}

function validateURL(url) {
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}

async function createTinyURL(url) {
  const res = await fetch("https://api.shrtco.de/v2/shorten?url=" + url)
  const tinyURl = await res.json()
  return tinyURl["result"].full_short_link
}

async function createTinyLink() {
  if (!validateURL(inputURL.value)) {
    addErrorInputStyle()
    addErrorMessage()
  } else {
    removeErrorInputStyle()
    removeErrorMessage()
    const tinyURL = await createTinyURL(inputURL.value);
    createURLResultContainer(inputURL.value, tinyURL)
  }
}



btnToggleMenu.addEventListener("click", toggleMenu);
btnSubmitURL.addEventListener('click', createTinyLink)
