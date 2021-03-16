const arrOfDodgeballPlayers = [];

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
] 

class Person{

  id; 
  name;
  age;
  skillSet;
  placeBorn; 

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
    this.id = inputId; 
    this.name = inputName;
    this.age = inputAge;
    this.skillSet = inputSkills;
    this.placeBorn = inputPlaceBorn; 
  }
}

class DodgeballPlayer extends Person{
 
  canThrowBall; 
  canDodgeBall; 
  hasPaid; 
  isHealthy;
  yearsExperience; 

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn, inputCanThrowBall, inputCanDodgeBall, inputHasPaid, inputIsHealthy, inputYearsExperience){ 
    super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn); 
    this.canThrowBall = true;
    this.canDodgeBall = true;
    this.hasPaid = true;
    this.isHealthy = true;
    this.yearsExperience = 10; 
  }

  addToDodgeBallPlayerList(){
    arrOfDodgeballPlayers.push(this); 
  }
}

//create redteam class that extends dodgeball player and takes property values from parent constructor 
class RedTeam extends Person{

    //include 2 new properties called color and mascot with the values 'red' and 'red cougar' appropriately 
    
    color;
    mascot;

    constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
      super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn);
      this.color = 'red';
      this.mascot = 'red cougar'; 
    }
}

//create blueteam class that extends dodgeball player and takes property values from parent constructor 
class BlueTeam extends Person{

    color;
    mascot; 

    constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
        super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn); 
        this.color = 'blue'; 
        this.mascot = 'blue whale';
    }

}

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
        lineItem.appendChild(document.createTextNode('Name: ' + currentPersonsName + ' - id: ' + currentPerson.id + ' - special skill: ' + currentPerson.skillSet));
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
    let newPlayer = new DodgeballPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience); 
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

    newPlayer.addToDodgeBallPlayerList();  


    
    document.getElementById(person.name).remove(); //access the line item by using current person's name and removes it from previous list 
        
}


function addRedTeam(person){

    let updatedPersonRed = new RedTeam(person.id, person.name, person.age, person.skillSet, person.placeBorn); // sends property values from current person object to red team class. From there it adds the properties mascot and color to the current object and gives values of 'red' and 'cougar' 
    //console.log(updatedPersonRed); 

    const listOfRedTeamMembers = document.getElementById("red");  //accesses red team member list 
    const redTeamMember = document.createElement("li"); //creates new line item 
    redTeamMember.id = updatedPersonRed.name; //assigns name to id of new line item 
    redTeamMember.appendChild(document.createTextNode(JSON.stringify(updatedPersonRed))); 
    listOfRedTeamMembers.append(redTeamMember); //does the same as in above function

    let redPlayerPicked = document.getElementById(person.name);
    redPlayerPicked.remove(); //removes picked player from players list 
}

function addBlueTeam(person){

    let updatedPersonBlue = new BlueTeam(person.id, person.name, person.age, person.skillSet, person.placeBorn);

    const listOfBlueTeamMembers = document.getElementById("blue"); 
    const blueTeamMember = document.createElement("li"); 
    blueTeamMember.id = updatedPersonBlue.name;
    blueTeamMember.appendChild(document.createTextNode(JSON.stringify(updatedPersonBlue))); 
    listOfBlueTeamMembers.append(blueTeamMember); 

    let bluePlayerPicked = document.getElementById(person.name);
    bluePlayerPicked.remove(); 
}

//Test plan:

//1. Prove that list people button works when clicked and each line item has a make player button, name, and special skill
//2. When 'make player' button is clicked, the player is removed from people list and added to dodge ball player list. Furthermore, each player gains new properties and values for each
//3. Demonstrate that when 'red team' button is clicked, that player is removed from player list and added to the read team.
//4. Create test to show that the 2 new properties (color and mascot) and their values are added to the new team member (red or blue) when they get added to a team

  