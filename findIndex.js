//here we use the .findIndex() method to find the index of the elements of an array. 

var array = [
    {value : 1},
    {value : 2},
    {value : 3},
    {value : 4}
];
var index = array.findIndex(function(item){// callback function used here
    return item.value===3;
});
console.log(index);
//here we use the .findIndex() method to find the index of the elements of an array.
var array = [
    {value : 1},
    {value : 2},
    {value : 3},
    {value : 4}
];
var index = array.findIndex(item => item.value===3);
console.log(index);