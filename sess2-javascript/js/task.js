
taskLooping();

function taskLooping() {
    var startNumber = Number(prompt('Please Enter Your Start Number :')),
        endNumber = Number(prompt('Please Enter Your End Number :')),
        breakNumber = Number(prompt('Please Enter Your Break Number :')),
        continueNumber = Number(prompt('Please Enter Your Continue Number :'));
    //  check if any number is not a number
    if (! isNaN(startNumber) && ! isNaN(endNumber) && ! isNaN(breakNumber) && ! isNaN(continueNumber)) {

        // Make Looping
        for (startNumber; startNumber <= endNumber; startNumber++) {
            
            if (startNumber === continueNumber) 
                continue;
            if (startNumber === breakNumber)
                break;
                
            console.log(startNumber);
        }
    } else {
        alert('Invalid Number');
    }
}
