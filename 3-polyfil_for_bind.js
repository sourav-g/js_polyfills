let Person1 = {
  name: "Sourav",
  dob: "1991",
};

let Person2 = {
  name: "Soumita",
  dob: "1997",
};

function calculateAge(technology) {
  console.log(
    this.name +
      " is " +
      (2022 - this.dob) +
      " years old. Works in " +
      technology
  );
}

let bindedCalcAge = calculateAge.bind(Person1, "Angular");
//bindedCalcAge();

//? bind polyfil--------------------------------

Function.prototype.customBind = function (...args) {
  let context = args[0];
  fn = this;
  return function () {
    args = args.splice(1, args.length);
    fn.apply(context, args);
  };
};

/*Function.prototype.customBind = function (...args1) {
  let fn = this;
  let context = args1[0];
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};*/

let customBindedCalcAge = calculateAge.customBind(
  Person2,
  "Salesforce",
  "Bangalore"
);
customBindedCalcAge();
