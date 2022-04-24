import IntStack from './int_stack';

function DomStack() {
  const parser = new DOMParser();
  const inputElem = document.getElementById('stack-input');
  const pushButton = document.getElementById('push-button');
  const stackElem = document.getElementById('stack');

  function pushItemCallback() {
    const valueToInsert = inputElem.value;
    if (!valueToInsert) {
      pushButton.setAttribute('disabled', 'disabled');
      return;
    }

    if (intStack.push(parseInt(valueToInsert, 10))) {
      const hue = Math.floor(Math.random() * 360) + 1;
      const saturation = Math.floor(Math.random() * 250) + 1;
      const htmlStr = `<li class="stack-item" style="background-color: hsl(${hue}deg ${saturation}% 89%);">${valueToInsert}</li>;`
      const newStackElem = parser.parseFromString(htmlStr, 'text/html').body.firstChild;
      stackElem.appendChild(newStackElem);
      inputElem.value = '';
    }
  }

  function domContentLoaded(e) {
    const intStack = new IntStack();
    window.intStack = intStack;

    acceptOnlyIntegers(inputElem);

    inputElem.addEventListener('input', (e) => {
      const value = e.currentTarget.value;

      if (value.length) {
        pushButton.removeAttribute('disabled');
      } else {
        pushButton.setAttribute('disabled', 'disabled');
      }
    });

    inputElem.addEventListener('keypress', (e) => {
      if(e.key.toLowerCase() === 'enter') {
        pushItemCallback();
      }
    });

    pushButton.addEventListener('click', pushItemCallback);

    stackElem.addEventListener('click', (e) => {
      const clickedElem = e.target;

      if (stackElem.lastChild === clickedElem && intStack.pop()) {
        stackElem.lastChild.remove();
      }
    });
  }

  function acceptOnlyIntegers(inputElem) {
    inputElem.addEventListener('keypress', (e) => {
      const value = e.key;

      if (/^(-|\d)+$/.test(value)) {
        return;
      }
      e.preventDefault();
    });
  }

  document.addEventListener('DOMContentLoaded', (e) => {
    domContentLoaded(e);
  });
}

export default DomStack;
