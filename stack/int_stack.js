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

IntStack.prototype.push = function (item) {
  if (this.isInt(item.toString())) {
    this.items.push(item);
  } else {
    console.error(
      `Invalid item: ${item} entered. This stack accepts integers only`
    );
  }
}

export default IntStack;
