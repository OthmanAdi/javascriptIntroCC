//window: variable that take different superpowers(methods)
// alert(): a method that display a primitive alert in your internet browser
// window.alert("Im Hungry")

// datatypes are the basics of any PL
var student = "Shanthi"; //string datatype = sentence

var studentAge = 25; //integer|int = number

var avrgNotes = 88.15; //float

var no = "$"; //char

var doYouLoveCode = true; //boolean

var classList = ["Gimena", "Sandhya", "Rene"]; //Array

/**todo: print the first variable, with the third variable
 in the same output message, and add to it the second value
 from the array of strings**/
console.log("student name is:", student.toUpperCase(), "Average notes:", avrgNotes, "her best friend is:", classList[1])

function RandomColor() {
    document.getElementById("ColoredText").style.color = Color();
}

function Color() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// FunctionName() = parameters
// [] = Arrays | List's
// { } = Body of function algorithm | .format()
// < > = html tags only!
