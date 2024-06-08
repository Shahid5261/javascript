// to convert the object into array

var object = {
    key1:1,
    key2:2,
    key3:3,
    key4:4
}

var array = [];

for(var keys in object)
    {
        array.push([keys,object[keys]]);
    }
    console.log(array);