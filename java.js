// var username='Guest'
// username= prompt('Please enter your name ');
// var major= prompt('Please write your major');
// var gpa= prompt('Enter your GPA')

// while(username === ''||  username ===  null) {


//     username =  prompt ('Enter your name ')
    
// }

// while (major === ''|| major === null){

//     major= prompt('Enter your major')
// }


// alert('Hello '+username+' here');
// alert('Your major is '+major+' ');

// var number = prompt('How  many experience years do you have');

// for (var i = 1 ; i <= number ; i++){

//     document.write('<img src="/images/chemical.jpg" alt="Picture"/>');
//     document.write(i);
// }


// if  (gpa>50){
//     document.write('<p>you are pass</p>')
// }else {
//     document.write('<p>you are Fail</p>')
// }


// document.write('Hello '+username+' here');

var username=getInformation(username,'Please insert your name ');

var major=getInformation(major,'Please enter your major');

var age=getInformation(age,'Please insert your age ');

displayMessage(username,major,age)


function takemessage(message){
    return prompt(message);
}

function displayMessage(uName,Umajor,Uage){

 alert ('Hello' + uName + '.Your major is ' + Umajor + ' .Your age is ' + Uage );

}

function getInformation(userInput, message){
    while (userInput === undefined || userInput=== '' || userInput=== null){
    userInput=takemessage(message);}

    return userInput



}







