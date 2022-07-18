function add(a,b){
    return a+b;
}
console.log(add(4,6))

function multiply(a,b){
    return a*b;
}

multiply(4,7);

const myHeading = document.querySelector('h1'); // grabs a reference to your heading, and then stores
                                                //    it in a variable called myHeading
myHeading.textContent = 'Hello world!'; // set the value of the myHeading variable's textContent property
                                        // (which represents the content of the heading) to Hello world!

let myFirstVariable; // declare a variable using the 'let' keyword
myFirstVariable = 5;

//we select the <html> element. We then call its addEventListener() function,
//passing in the name of the event to listen to ('click') and a function to run when the event happens
document.querySelector('html').addEventListener('click',
    function(){
        alert('Ouch! Stop poking me!');
    });

/* equivalent to above, just shorthand code
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function(0){
    alert('Ouch! Stop poking')
});
*/

// functions passed to 'addEventListener' above are called anonymous because they don't have a name
// an alternative way to write them is using an arrow funtion '() =>' instead of function

document.querySelector('html').addEventListener('click',
()=> {
    alert('Ouch! Stop poking me!');
});

