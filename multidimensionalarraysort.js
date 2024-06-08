var array = [

    ["key1", 10],
    ["key2",5],
    ["key3",20],
    ["key4",1]
];

array.sort(function(a, b){
    return a[1] - b[1];
});

console.log(array);