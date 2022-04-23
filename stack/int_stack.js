import Stack from './stack';

function IntStack() {
  Stack.call(this);
}

IntStack.prototype.constructor = IntStack;
IntStack.prototype = Object.create(Stack.prototype);

IntStack.prototype.isInt = function (str) {
  const regex = new RegExp(/(-|\d)+$/);
  return regex.test(str);
}

IntStack.prototype.push = function (i) {
  if (this.isInt(i.toString())) {
    this.items.push(i);
    return i;
  } else {
    console.error(
      `Invalid item: ${i} entered. This stack accepts integers only`
    );
  }
}

export default IntStack;
