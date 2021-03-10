//create a class called DodgeBall Player with properties id, name, age, skills, birthplace, throw ball, dodge ball, paid, healthy, and experience 

const arrOfPeople = [];

const arrOfDodgeballPlayers = []; 

class DodgeballPlayer{

    id;
    name;
    age;
    skills;
    placeBorn; 
    canThrowBall; 
    canDodgeBall; 
    hasPaid; 
    isHealthy;
    yearsExperience; 

    constructor(inputName, inputAge, inputSkills, inputPlaceBorn, inputCanThrowBall, inputCanDodgeBall, inputHasPaid, inputIsHealthy, inputYearsExperience){ 
        let randomNumber = Math.round(Math.random() * (100 - 1) + 1); 
        this.id = randomNumber; 
        this.name = inputName;
        this.age = inputAge;
        this.skills = inputSkills;
        this.placeBorn = inputPlaceBorn; 
        this.canThrowBall = inputCanThrowBall;
        this.canDodgeBall = inputCanDodgeBall;
        this.hasPaid = inputHasPaid;
        this.isHealthy = inputIsHealthy;
        this.yearsExperience = inputYearsExperience; 
    }

    //create method that will add new dodgeball player instance to array of people 
    addToPeopleList(){
        arrOfPeople.push(this); 
    }

    addToDodgeBallPlayerList(){
        arrOfDodgeballPlayers.push(this); 
    }
}

//create redteam class that extends dodgeball player and takes property values from parent constructor 
class RedTeam extends DodgeballPlayer{

    //include 2 new properties called color and mascot with the values 'red' and 'red cougar' appropriately 
    color;
    mascot;

    constructor(inputName, inputAge, inputSkills, inputPlaceBorn){
        super(inputName, inputAge, inputSkills, inputPlaceBorn);
        this.color = 'red';
        this.mascot = 'red cougar'; 
    }
}

//create blueteam class that extends dodgeball player and takes property values from parent constructor 
class BlueTeam extends DodgeballPlayer{

    color;
    mascot; 

    constructor(inputName, inputAge, inputSkills, inputPlaceBorn){
        super(inputName, inputAge, inputSkills, inputPlaceBorn); 
        this.color = 'blue'; 
        this.mascot = 'blue whale';
    }
}

//new dodgeball player instances 

let james = new DodgeballPlayer("james messina", 35, 'bass guitar', 'Passaic, NJ', true, true, true, true, 15); 
james.addToPeopleList();

let timmy = new DodgeballPlayer("timmy grimes", 30, 'drums', 'Las Vegas, NV', true, false, true, false, 4); 
timmy.addToPeopleList();

let john = new DodgeballPlayer("john smith", 25, 'pro fisherman', 'Camden, NJ', true, true, false, false, 5);
john.addToPeopleList(); 

let sam = new DodgeballPlayer("sam garcia", 20, 'skateboards', 'Morristown, NJ', true, false, false, true, 10);
sam.addToPeopleList(); 

let tina = new DodgeballPlayer("tina frank", 45, 'house wife', 'San Diego, CA', true, true, true, false, 25);
tina.addToPeopleList(); 

let billy = new DodgeballPlayer("billy paranto", 35, 'black belt', 'Flint, MI', false, true, false, false, 7);
billy.addToPeopleList(); 

let chris = new DodgeballPlayer("chris beck", 27, 'wrestler', 'Virginia Beach, VA', true, true, false, false, 10);
chris.addToPeopleList(); 

let gary = new DodgeballPlayer("gary hanke", 37, "pro gamer", "Boston, MA", true, false, true, false, 2); 
gary.addToPeopleList(); 


console.log(arrOfPeople);
 

function listPeopleChoices(){
    
    //access listofpeople element in HTML
    const listofPeople = document.getElementById("people");
    //call map method on arrayofpeople and do following steps for each person object
    for(let i = 0; i < arrOfPeople.length; i++){
        let currentPerson = arrOfPeople[i]; 
        let currentPersonsName = currentPerson.name;
        const lineItem = document.createElement("li"); 
        lineItem.id = currentPersonsName; 
        const button = document.createElement("button"); 
        button.addEventListener('click', function () {makePlayer(currentPerson)}); 
        button.innerHTML = "Make Dodge Player"; 
        lineItem.appendChild(button); 
        lineItem.appendChild(document.createTextNode('-->'));
        lineItem.appendChild(document.createTextNode('Name: ' +currentPersonsName + ' - id: ' + currentPerson.id + ' - ' + currentPerson.skills))
        listofPeople.append(lineItem); 
    }
}

function clearList(){
    document.getElementById("people").innerHTML = ''; 
}

function makePlayer(person){

    const listOfDodgeBallPlayers = document.getElementById("players"); //access UL
    const dodgeBallPlayer = document.createElement("li"); //creates new line item 
    dodgeBallPlayer.id = person.name //assigns current person's name to new line item ID
    let newPlayer = new DodgeballPlayer(person.name, person.age, person.skills, person.placeBorn, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience); 
    let newPlayerInfo = document.createTextNode(JSON.stringify(newPlayer)); 
    const redButton = document.createElement("button"); //create red button 
    const blueButton = document.createElement("button"); //creates blue button 
    redButton.addEventListener('click', function(){addRedTeam(newPlayer)});
    blueButton.addEventListener('click', function(){addBlueTeam(newPlayer)});
    redButton.innerHTML =  "Red Team"; //assigns appropriate name 
    blueButton.innerHTML = "Blue Team"; //assigns appropriate name 
    dodgeBallPlayer.appendChild(newPlayerInfo); 
    dodgeBallPlayer.appendChild(redButton);
    dodgeBallPlayer.appendChild(blueButton); 
    listOfDodgeBallPlayers.append(dodgeBallPlayer); //attaches new line item to list of dodge ball players 

    newPlayer.addToDodgeBallPlayerList(this);  


    
    document.getElementById(person.name).remove(); //access the line item by using current person's name and removes it from previous list 
        
}


function addRedTeam(person){

    let updatedPersonRed = new RedTeam(person.name, person.age, person.skills, person.placeBorn); // sends property values from current person object to red team class. From there it adds the properties mascot and color to the current object and gives values of 'red' and 'cougar' 
    

    const listOfRedTeamMembers = document.getElementById("red");  //accesses red team member list 
    const redTeamMember = document.createElement("li"); //creates new line item 
    redTeamMember.id = updatedPersonRed.name; //assigns name to id of new line item 
    redTeamMember.appendChild(document.createTextNode('Name: ' +  updatedPersonRed.name + ' - Age: ' + person.age + ' - Skills: ' + person.skills + ' - Birthplace: ' + person.placeBorn + ' - canThrowBall: ' + person.canThrowBall + ' - canDodgeBall: ' + person.canDodgeBall + ' - hasPaid: ' + person.hasPaid + ' - isHealthy: ' + person.isHealthy + ' - yearsExperience: ' + person.yearsExperience + ' - TeamColor: ' + updatedPersonRed.color + ' - TeamMascot: ' + updatedPersonRed.mascot)); 
    listOfRedTeamMembers.append(redTeamMember); //does the same as in above function

    let redPlayerPicked = document.getElementById(person.name);
    redPlayerPicked.remove(); //removes picked player from players list 
}

function addBlueTeam(person){

    let updatedPersonBlue = new BlueTeam(person.name, person.age, person.skills, person.placeBorn);

    const listOfBlueTeamMembers = document.getElementById("blue"); 
    const blueTeamMember = document.createElement("li"); 
    blueTeamMember.id = updatedPersonBlue.name;
    blueTeamMember.appendChild(document.createTextNode('Name: ' +  person.name + ' - Age: ' + person.age + ' - Skills: ' + person.skills + ' - Birthplace: ' + person.placeBorn + ' - canThrowBall: ' + person.canThrowBall + ' - canDodgeBall: ' + person.canDodgeBall + ' - hasPaid: ' + person.hasPaid + ' - isHealthy: ' + person.isHealthy + ' - yearsExperience: ' + person.yearsExperience + ' - TeamColor: ' + updatedPersonBlue.color + ' - TeamMascot: ' + updatedPersonBlue.mascot));
    listOfBlueTeamMembers.append(blueTeamMember); 

    let bluePlayerPicked = document.getElementById(person.name);
    bluePlayerPicked.remove(); 
}

//Test plan:

//1. Prove that list people button works when clicked and each line item has a make player button, name, and special skill
//2. When 'make player' button is clicked, the player is removed from people list and added to dodge ball player list. Furthermore, each player gains new properties and values for each
//3. Demonstrate that when 'red team' button is clicked, that player is removed from player list and added to the read team.
//4. Create test to show that the 2 new properties (color and mascot) and their values are added to the new team member (red or blue) when they get added to a team

  