  // how check if var is array 
// isArray()

// myArray.lenght


// how delete item from array 

// delete myArray(index)

// myArray.splice(start , number: optional);

// myArray.pop();  // remove last item and return item
///////////////////             Convert Array to String  ////////////////////////////////////////

// myArray.toString()  // convert array to string

// myArray.toLocaleString()  

// myArray.join(sperator: default ,)                                        //////////


/////////////////////////////////////////////////////////////////////////////////////////////////
// how add item to array 

/*
myArray[myArray.length] = item
myArray.push("ahmed");
myArray.unshift("ahmed")
myArray.splice(index start , numbers , itmes to adding)
*/

// var birthYear = 2001;
var user = {
  firstName: 'ahmed',
  lastName: 'ali',
  birthYear: 2000,
  age: function(currentyear) {
    return currentyear - this.birthYear;
  }
}

function info(user)
{
  console.log(user.firstName);
}

info(user);