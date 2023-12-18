// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    // declare a variable for an empty array
      const resultArr = [];
    // iterate through the array using a for loop
      for (let i = 0; i < array.length; i++){
    // write a conditional to determine which numbers are odd
        if (array[i] % 2 === 1){
    // push the odd numbers into the new array
          resultArr.push(array[i])
        }    
      }
    // return the new array
      return resultArr
    }
    
    console.log(returnOdds([1,2,3,4,5,6,7])); // -> [1,3,5,7])
    
    
    // this function accepts an array of numbers
    // and returns an array of only the even numbers
    // ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
    function returnEvens(array) {
    // declare a variable for an empty array
      const resultArr = [];
    // iterate through the array using a for loop
      for (let i = 0; i < array.length; i++){
    // write a conditional to determine which numbers are odd
        if (array[i] % 2 === 0){
    // push the odd numbers into the new array
          resultArr.push(array[i])
        }    
      }
    // return the new array
      return resultArr
    }
    
    console.log(returnEvens([1,2,3,4,5,6,7])); // -> ([2,4,6])
    
    // returns only the max element from the inputted array of numbers
    // ex: findMax([1,25,6,3]); -> 25
    function findMax(array) {
      // CODE HERE
    // create a variable labeled highestNum, initialized to 0
        let highestNum = 0;
    // iterate through the array using a for loop
      for (let i = 0; i < array.length; i++){
     // write a conditional that determines if the next number in the array is larger than the highestNum, then reassign highestNum to be that value
        if (array[i] > highestNum){
         highestNum = array[i]
        }
      }
    // return highestNum
      return highestNum
    }
    
    console.log(findMax([1,25,6,3]))
    
    // Alternatively, we could use the Math.max method
    
    function findMax(array){
      return Math.max(...array)
    }
    
    console.log(findMax([1,25,6,3]))
    
    
    
    
    
    /**
     * remove leading and trailing whitespace or specified characters from string
     * trim(' hello '); -> 'hello'
     */
    function trim(string) {
    // create a variable labeled updatedString
    // use a regular expression 
      const updatedString = string.replace(/\s/g,"");
            return updatedString;
    }
    
    console.log(trim(' hello ')); // -> 'hello'
    
    // under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
    // the "Array" object also contains a number of methods that give arrays their functionality.
    // the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
      // push(val) adds val to the end
      // pop() removes a value from the end and returns it
      // unshift(val) adds val to the beginning
      // shift() removes a value from the beginning and returns it
    // the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
    function createArray() {
    // we'll create 4 methods: push, pop, unshift, & shift
      
    // declare a variable labeled obj that is initialized to an empty object
      const obj = {};
    // initialize a length property for the object that is set to 0
      obj.length = 0
      
    // create a push method on the obj, function should accept a value as a parameter 
      obj.push = function(value){
        obj[obj.length] = value;
    // increment the length property
        obj.length++;
        return obj.length 
      }
      
    // create a pop method, function does not need any parameters
      obj.pop = function(){
        if (obj.length === 0){
          return undefined
        }
    // declare a variable for the last element in the array, this is the one we'll be removing
        const lastEl = obj[obj.length-1];
    // utilize the delete keyword to remove that last element
        delete obj[obj.length-1];
    // decrement the length property
        obj.length--;
    // return last el
        return lastEl
      }
      
    // create a unshift method, function will accept a value
      obj.unshift = function(value){
    // iterate through the length of the object using a for loop
        for (let i = obj.length; i > 0; i--){
          obj[i] = obj[i-1]
        }
        obj[0] = value;
        obj.length++;
        return obj.length
      }
      
      obj.shift = function(){
        if (obj.length === 0){
          return undefined
        }
        const firstEl = obj[0];
        
        for (let i = 0; i < obj.length; i++){
            obj[i] = obj[i+1];
        }
        delete obj[obj.length-1]
        obj.length--
        return firstEl
      }
      return obj
    }

    
    
    // {0:1,1:2,2:3,3:4,4:5,5:6}
    
    