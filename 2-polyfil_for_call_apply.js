let person1 = {
  firstName: "Sourav",
  lastName: "Ghosh",
};

let person2 = {
  firstName: "Soumita",
  lastName: "Ghosh",
};

let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + "," + state
  );
};

//printFullName.call(person1, "Siliguri");
//printFullName.apply(person2, ["Shillong"]);

//? call polyfil--------------------------------

Function.prototype.customCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

printFullName.customCall(person1, "Siliguri", "WB");

//? apply polyfil--------------------------------

Function.prototype.customApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
};
printFullName.customApply(person2, ["Shillong", "Meghalaya"]);
