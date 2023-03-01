let btnContainer = document.querySelector('.btnContainer');
let btn = document.querySelectorAll('span');
let value = document.querySelector('#value');
let audio = new Audio('./click.mp3');

Array.from(btn).forEach((button) => {
  button.addEventListener("click", function () {
    audio.currentTime = 0.15;
    audio.playbackRate = 1.12;
    audio.play();

    if (value.innerText == "0") {
      value.innerText = '';
    }

    if (this.getAttribute('data-value') == "=") {
      let lastChar = value.innerText[value.innerText.length - 1];
      if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        value.innerText = value.innerText.slice(0, value.innerText.length - 1)
      }
      if (value.innerText) {
        value.innerText = eval(value.innerText)
      }
    }


    else if (this.getAttribute('data-value').toUpperCase() == 'C') {
      value.innerText = '';
    }

    else if (this.getAttribute('data-value').toUpperCase() == 'X') {
      value.innerText = value.innerText.slice(0, value.innerText.length - 1)
    }

    else if (this.getAttribute('data-value') == "+" || this.getAttribute('data-value') == "-" || this.getAttribute('data-value') == "*" || this.getAttribute('data-value') == "/") {

      if (value.innerText[value.innerText.length - 1] == "+" || value.innerText[value.innerText.length - 1] == "-" || value.innerText[value.innerText.length - 1] == "*" || value.innerText[value.innerText.length - 1] == "/") {
        value.innerText = value.innerText.slice(0, value.innerText.length - 1) + this.getAttribute('data-value')
      }

      else if (value.innerText.length == 0 && this.getAttribute('data-value') == "-") {
        value.innerText += this.getAttribute('data-value');
      }

      else if (value.innerText.length == 0) {
        // No Change	
      }

      else {
        value.innerText += this.getAttribute('data-value');
      }

    }

    else if (this.getAttribute('data-value').includes("0") && value.innerText == "") {
      // Nothing to do at this.getAttribute('data-value') Point	
    }

    else if (this.getAttribute('data-value') == "." && value.innerText == "") {
      value.innerText = "0" + this.getAttribute('data-value');
    }

    else if (this.getAttribute('data-value') == "." && value.innerText[value.innerText.length - 1] == ".") {
      // Again don't do Anything	
    }

    else if (this.getAttribute('data-value') == "." && (value.innerText[value.innerText.length - 1] == "+" || value.innerText[value.innerText.length - 1] == "-" || value.innerText[value.innerText.length - 1] == "*" || value.innerText[value.innerText.length - 1] == "/")) {
      value.innerText = value.innerText.slice(0, value.innerText.length) + "0" + "."
    }

    else if (this.getAttribute('data-value') == 'switch') {
      // Just Chill
    }

    else {
      value.innerText += this.getAttribute('data-value')
    }

    if (value.innerText == '+' || value.innerText == '*' || value.innerText == '/') {
      value.innerText = '';
    }

    if (value.innerText.length == 0) {
      value.innerText = "0";
    }

  })
})



const onKeyboard = (i) => {
  if (value.innerText == "0") {
    value.innerText = '';
  }

  let target = document.getElementsByClassName(`${i.key}`)[0];
  target.classList.add('active');
  setTimeout(() => {
    target.classList.remove('active')
  }, 220)

  if (i.key == '1' || i.key == '2' || i.key == '3' || i.key == '4' || i.key == '5' || i.key == '6' || i.key == '7' || i.key == '8' || i.key == '9' || i.key == '0') {
    value.innerText += i.key;
  }
  else if (i.key.toUpperCase() == 'C') {
    value.innerText = '';
  }
  else if (i.key.toUpperCase() == 'X') {
    value.innerText = value.innerText.slice(0, value.innerText.length - 1)
  }
  else if (i.key == "=") {
    let lastChar = value.innerText[value.innerText.length - 1];
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
      value.innerText = value.innerText.slice(0, value.innerText.length - 1)
    }
    if (value.innerText) {
      value.innerText = eval(value.innerText)
    }
  }

  else if (i.key == "+" || i.key == "-" || i.key == "*" || i.key == "/") {

    if (value.innerText[value.innerText.length - 1] == "+" || value.innerText[value.innerText.length - 1] == "-" || value.innerText[value.innerText.length - 1] == "*" || value.innerText[value.innerText.length - 1] == "/") {
      value.innerText = value.innerText.slice(0, value.innerText.length - 1) + i.key
    }

    else if (value.innerText.length == 0 && i.key == "-") {
      value.innerText += i.key;
    }

    else if (value.innerText.length == 0) {
      // No Change
    }

    else {
      value.innerText += i.key;
    }

  }

  else if (i.key == '0' && value.innerText == "") {
    // Nothing to do at this.getAttribute('data-value') Point
  }

  else if (i.key == "." && value.innerText == "") {
    value.innerText = "0" + i.key;
  }

  else if (i.key == "." && value.innerText[value.innerText.length - 1] == ".") {
    // Again don't do Anything
  }

  else if (i.key == "." && (value.innerText[value.innerText.length - 1] == "+" || value.innerText[value.innerText.length - 1] == "-" || value.innerText[value.innerText.length - 1] == "*" || value.innerText[value.innerText.length - 1] == "/")) {
    value.innerText = value.innerText.slice(0, value.innerText.length) + "0" + "."
  }

  else if (i.key == '.') {
    value.innerText += i.key;
  }

  else if (i.key == 'Backspace') {
    value.innerText = value.innerText.slice(0, value.innerText.length - 1)
  }

  else if (i.key == 'Enter') {
    let lastChar = value.innerText[value.innerText.length - 1];
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
      value.innerText = value.innerText.slice(0, value.innerText.length - 1)
    }
    if (value.innerText) {
      value.innerText = eval(value.innerText)
    }
  }

  else if (i.key == 'Delete') {
    value.innerText = '';
  }

  if (i.key == '1' || i.key == '2' || i.key == '3' || i.key == '4' || i.key == '5' || i.key == '6' || i.key == '7' || i.key == '8' || i.key == '9' || i.key == '0' || i.key == 'x' || i.key == 'X' || i.key == 'c' || i.key == 'C' || i.key == '+' || i.key == '-' || i.key == '*' || i.key == '/' || i.key == '=' || i.key == "." || i.key == 'Backspace' || i.key == 'Enter' || i.key == 'Delete') {
    audio.currentTime = 0;
    audio.playbackRate = 1.12;
    audio.play()
  }

  if (value.innerText.length == 0) {
    value.innerText = "0";
  }
}
document.addEventListener('keydown', onKeyboard);

const applyChanges = function (id, classes) {
  let target = document.querySelector(id)
  target.innerHTML = '';
  classes.forEach((Class) => {
    target.classList.add(Class)
  })
}

const setIcon = () => {
  let script = document.createElement('script');
  script.src = 'https://kit.fontawesome.com/4389f84d65.js';
  script.crossOrigin = 'Anonymous';
  document.body.appendChild(script);
  script.onload = () => {
    applyChanges('.Backspace', ['fa-solid', 'fa-xmark']);
    applyChanges('.clear', ['fa-solid', 'fa-c']);
    applyChanges('.divide', ['fa-solid', 'fa-divide']);
    applyChanges('.multiply', ['fa-solid', 'fa-asterisk']);
    applyChanges('.seven', ['fa-solid', 'fa-7']);
    applyChanges('.eight', ['fa-solid', 'fa-8']);
    applyChanges('.nine', ['fa-solid', 'fa-9']);
    applyChanges('.minus', ['fa-solid', 'fa-minus']);
    applyChanges('.four', ['fa-solid', 'fa-4']);
    applyChanges('.five', ['fa-solid', 'fa-5']);
    applyChanges('.six', ['fa-solid', 'fa-6']);
    applyChanges('.add', ['fa-solid', 'fa-plus']);
    applyChanges('.one', ['fa-solid', 'fa-1']);
    applyChanges('.two', ['fa-solid', 'fa-2']);
    applyChanges('.three', ['fa-solid', 'fa-3']);
    applyChanges('.equal', ['fa-solid', 'fa-equals']);
    applyChanges('.zero1', ['fa-solid', 'fa-0']);
    applyChanges('.zero2', ['fa-solid', 'fa-0']);
    applyChanges('.zero', ['fa-solid', 'fa-0']);
  }
}
setIcon();


document.window.addEventListener('beforeunload', () => {
  let digit = value.innerText;
  digit = encodeUriComponent(digit);
  localstorage.setItem('history1', digit);
})

value.innerText = localStorage.getItem('history1')