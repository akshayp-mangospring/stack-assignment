function Stack() {
  this.items = [];
}

Stack.prototype.push = function (i) {
  this.items.push(i);
  return i;
};

Stack.prototype.pop = function () {
  return this.items.pop();
};

export default Stack;
