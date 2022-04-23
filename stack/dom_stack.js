import IntStack from './int_stack';

function DomStack() {
  function domContentLoaded(e) {
    const inputElem = document.getElementById('stack-input');
    const pushButton = document.getElementById('push-button');
    const stackElem = document.getElementById('stack');
    const parser = new DOMParser();
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

    pushButton.addEventListener('click', () => {
      const valueToInsert = inputElem.value;
      if (!valueToInsert) {
        pushButton.setAttribute('disabled', 'disabled');
        return;
      }
      const newElem = `<li class="stack-item">${valueToInsert}</li>;`
      const newStackElem = parser.parseFromString(newElem, 'text/html').body.firstChild;
      stackElem.appendChild(newStackElem);
      intStack.push(parseInt(valueToInsert, 10));
      inputElem.value = '';
    });

    stackElem.addEventListener('click', (e) => {
      const clickedElem = e.target;

      if (stackElem.lastChild === clickedElem) {
        stackElem.lastChild.remove();
        intStack.pop();
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
