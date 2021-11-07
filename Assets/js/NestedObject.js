/***
 * create an object
 */
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

for (let val in obj) {
  if (isObject(obj[val])) {
    console.log("welcome");
  } else {
  }
}

/*
function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
        for (const key in obj) {
            let value = obj[key];
            if(value != undefined) {
                if (value && typeof value === 'object') {
                    recurse(value, key);
                } else {
                  	// Do your stuff here to var value
                    res[key] = value;
                }
            }
        }
    }
    recurse(obj);
    return res;
}*/
/*step 1. Create a nested object.
step 2. Create one function for  iterate the Nested object 
      step2.2 convert the object into array 
      step2.3 run loop til the length of the object 

step 3 . inside the loop create another for-in loop for iterating object 
       step 3.1 check the object key and value 
               -if condition if the true value is not undefined of type of value is equal to the object 
                return key and value 
        step 3.2 if the condition is not satisfied then return undefined.*/
