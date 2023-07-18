export const getUniqueElements = (arr) => {
  let outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i === self.indexOf(v);
  });

  return outputArray;
};
