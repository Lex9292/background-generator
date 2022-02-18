
// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];


// for (var i=0; i < todos.length; i++) {
//     console.log(i);
// }

// // todos.forEach(function(todos, i) {
// //     console.log(todos, i);
// // })

// function logTodos(todo , i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);




// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--
// }

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);











// // function saySomething(word) {
// //     var loops= (word + " welcome to JavaScript")
// //     alert(loops)
// // }

// // saySomething("Hahahahahahahahaha");

// // function add2Numbers(x, y) {
// //     var result= x+y;
// //     console.log(result);
// // }
// // // alert(add2Numbers(2,2));
// // // add2Numbers("4", 3.333333);
// // // add2Numbers(2,2);
// // // console.log(add2Numbers(2,4));

// // function divide2Numbers(x,z) {
// //     var answer= x/z;
// //     return answer;
// // }

// // var answer = add2Numbers(2,5) * divide2Numbers(4,2);

// // alert(answer)


// function welcomeMessage(username) {
//     var message = "Welcome to this website " + username;
//     return message
// }

// document.getElementById("welcome-message").innerHTML = welcomeMessage("wolexx9");





var database = [
    {
        username: "Lexy92",
        password: "Oluwole1"   
    },
    {
        username: "Abood",
        password: "1234"   
    },
    {
        username: "Shev",
        password: "2222"   
    }
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];



function isUserValid(username, password) {
    for (var i=o; i< database.length;i++) {
        if(database[i].username===username &&
            database[i].password === password) {
                return true;
            } 
    }
    return false;
}

function signIn(username,password) {
   
   if (user===database[0].username && 
        pass===database[0].password)  {
        console.log(newsfeed);
}   else {
     alert("Sorry, wrong username and password")
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);