
module.exports = function towelSort (matrix = []) {
  newArray = [];
  matrix.forEach((value, index) => {
    if (index % 2 === 0){
      newArray = newArray.concat(...value);
    }
    else {
      let reverseArray = [];
      for (let i = 0; i < value.length; i++){
        reverseArray = value[value.length - 1 - i];
        newArray = newArray.concat(reverseArray);
      }
    }
  })
  return newArray;
}

/*const Array = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]

 console.log (towelSort (Array));*/
