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
    if (command) {
        command = command.toLowerCase();
        return command;
    }

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
        let commandToRemove = command;
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

    if(command.includes("my favorite dish")) {
        command = command.split(" "); // first turn it into an array 
        command = command.pop();
        favoriteDish.push(command);
        return favoriteDish;
    }

    if(command.includes("what" && "favorite dish")) {
        return `Your favorite dish is ${favoriteDish}`;
    }

    if(command.includes("set a timer")) {
        function setTimer() {
            alert('Timer done');
        }        
        setTimeout(setTimer, 240000);
        return `Timer set for 4 minutes.`;
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
