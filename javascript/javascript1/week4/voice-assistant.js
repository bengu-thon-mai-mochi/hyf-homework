let name;
let filteredItems;
let todo = [];
let calendar = [];
const dateToday =  new Date();
const months = ["january",
                "february",
                "march",
                "april",
                "may",
                "june",
                "july",
                "august",
                "september",
                "october",
                "november",
                "december"];
let favoriteDish = [];
let event = {} ;


function getReply(command) { 

    if(command.includes("hello my name is")) {
        command = command.split(" "); // first turn words into array;
        name = command.pop(); // second store the last item into name;
        /*    if (name ===  ) // third check if name is already in the database 
            { } // if it is return  `Welcome back ${name}` */
        return `Nice to meet you ${name}`;
    }

    if(command.includes("what is my name")) {
        if(name === undefined) {
            return "Please introduce yourself first."
        } else { 
            return `Your name is ${name}.`;
        }
    }

    if(command.includes("add" && "to my todo")) {
        command = command.split(" "); // first turn it into an array 
        command.splice(0,1); // add is always one word and first index 
        command.splice (command.length-3, 3); // to my todo is last 3 index,
        command = command.join(" "); 
        todo.push(command);
        return `${command} added to your todo`
    }   

    if(command.includes("remove" && "from my todo")) {
        command= command.split(" ");
        commandToRemove = command[1];
        todo.splice(todo.indexOf(commandToRemove),1);
        return `Removed ${commandToRemove} from your todo`;
    }

    if(command.includes("on my todo")) {
        return todo;
    } 

    if(command.includes("what" && "today")) {
        let day = dateToday.getDate();
        let currentYear = dateToday.getFullYear(); 
        let month = dateToday.getMonth(); //get month from dateToday as number
        let currentMonth = months[month-1]; //match the number to index of months array;
        return `Today is ${day} ${currentMonth}, ${currentYear}`;
    }


    if((command.includes("favorite dish")) && !command.includes("What")) {
        command = command.split(" "); // first turn it into an array 
        favoriteDish = command.pop(); 
        return favoriteDish;
    }

    if(command.includes("what" && "favorite dish")) {
        return `Your favorite dish is ${favoriteDish}`;
    }

    if(command.includes("set a timer")) {
        command = command.split(" ");
        timerNumber = command.splice(command.length-2,1);
        function setTimer(timerNumber) {
            alert('Timer done');
        }        
        setTimeout(setTimer, (timerNumber * 60000));
        return `Timer set for ${timerNumber} minutes.`;
    }

    if(command.includes("add" && "to my calendar")) {
        command = command.split(" "); // first turn it into an array 
        command.splice(command.length-3, 3);
        event.date = command.pop();
        event.activity = (command.slice(1, 3)).join(" ");
        calendar.push(event);
        return `${event.activity} is added to your calendar.`;
    }

    if(command.includes("week" && "do")) {
        let eventMonth = event.date.split("/")[1];
        eventMonth = months[eventMonth - 1];
        eventDay = event.date.split("/")[0];
        eventYear = event.date.split("/")[2];
        return `This week you have ${calendar.length} event: ${event.activity} on ${eventDay} ${eventMonth} ${eventYear}`;
    }

    if(command.includes("+")) { 
        command = command.split("+");
        let firstNumber = command[0].split(" ");
        a = parseInt(firstNumber[firstNumber.length-1]);
        let b = parseInt(command[1].split("")[0]);
        return a+b;
    } 

    if((command.includes("-")) && !command.includes("my calendar")) { 
        command = command.split("-");
        let firstNumber = command[0].split(" ");
        a = parseInt(firstNumber[firstNumber.length-1]);
        let b = parseInt(command[1].split("")[0]);
        return a-b;
    } 

    if(command.includes("*"))  { 
        command = command.split("*");
        let firstNumber = command[0].split(" ");
        a = parseInt(firstNumber[firstNumber.length-1]);
        let b = parseInt(command[1].split("")[0]);
        return a*b;
    } 

    if((command.includes("/")) && !command.includes("my calendar")) { 
        command = command.split("/");
        let firstNumber = command[0].split(" ");
        a = parseInt(firstNumber[firstNumber.length-1]);
        let b = parseInt(command[1].split("")[0]);
        return a/b;
    } 
}


console.log(getReply('hello my name is Benjamin'));
console.log(getReply('what is my name?'));
console.log(getReply('add fishing to my todo'));
console.log(getReply('add singing in the shower to my todo'));
console.log(getReply('remove fishing from my todo'));
console.log(getReply('what is on my todo?'));
console.log(getReply('what day is it today?'));

console.log(getReply('What is 3+3'));
console.log(getReply('What is 6*3'));
console.log(getReply('What is 9/3'));
console.log(getReply('What is 10-3'));

console.log(getReply('My favorite dish is lasagne'));
console.log(getReply('What is my favorite dish'));

console.log(getReply('set a timer for 4 minutes'));

console.log(getReply('Add Bike ride the 3/5/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));