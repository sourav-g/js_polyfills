let a = [1, false, 4, [-4, 5, [2, , "a", 6], 9], 1.23];

//polyfill for flat
Array.prototype.myFlat = function () {
  //console.log(this);           //this is input array
  //console.log(...arguments);
  //console.log(context);
  let args = [...arguments];
  let depthCounter = 0;
  let result = [];
  const depth = args[0];

  flattenArray = (array) => {
    //console.log(this);         //this is still actual array
    array.forEach((elem) => {
      if (typeof elem == "object") {
        depthCounter++;
        if (depthCounter <= depth) {
          flattenArray(elem);
        } else {
          result.push(elem);
        }
      } else {
        result.push(elem);
      }
    });
  };
  flattenArray(this);
  return result;
};

console.log(a.flat(1));
console.log(a.myFlat(1));
