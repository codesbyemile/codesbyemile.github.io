

// stores a reference to your <img> element in the myImage variable.
let myImage = document.querySelector('img');

// makes variable myImages onclick event handler property equal to a function with no name (an "anonymous" function)
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src'); // retrieves the value of the image's src attribute.
    if(mySrc === 'images/fast-food.jpeg'){ // a conditional to check if the src value
                                           // is equal to the path of the original image:
        myImage.setAttribute('src', 'images/back-of-menu.jpeg'); // changes the src value to the
                                                                 // path of the second image
    } else {
        myImage.setAttribute('src', 'images/fast-food.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 1st iteration
function setUserNameIncomplete(){
    /* Displays a dialog box similar to alert but expands by asking the user to enter data
        and storing it in a variable after the user clicks 'Ok' */
    let myName = prompt('Please enter your name'); // allows us to store data in the browser and retrieve it later
    /* creates and stores a data item called 'name', setting its value to the myName variable which
       contains the user's entry for the name */
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to our takeaway shop, ' + myName; // set the textContent of the heading to a
                                                                       // string + the user's newly stored name.
    }

// 2nd iteration
function setUserNameSemiComplete(){
    if(!localStorage.getItem('name')){ // checks whether the 'name' data exists
        setUserName(); // if it doesn't exist, the setUserName() function runs to create it
    } else {
        let storedName = localStorage.getItem('name'); // If it exists, we retrieve the stored name using getItem()
        myHeading.textContent = 'Welcome to our takeaway shop, ' + storedName;
    }
}

/* final iteration:
If myName has no value, run setUserName() again from the start.
If it does have a value (if the above statement is not true), then store the value in localStorage
and set it as the heading's text. */
function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to our shop, ' + myName;
    }
}

// adds an event handler to the the button. When its clicked, the setUserName() function runs
myButton.onclick = function(){
        setUserName();
}