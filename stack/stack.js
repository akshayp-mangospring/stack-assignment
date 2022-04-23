function Stack() {
  this.items = [];
}

Stack.prototype.push = function (i) {
  this.items.push(i);
};

Stack.prototype.pop = function () {
  this.items.pop();
};

export default Stack;
