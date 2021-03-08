
const arrOfPeople = [];

//create a class called DodgeBall Player with properties id, name, age, skills, birthplace, throw ball, dodge ball, paid, healthy, and experience 
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
    arrOfPeople.map(person => {
        const li = document.createElement("li"); //creates line item
        li.id = person.name; //gives id to line item and assigns it to the current persons name
        const button = document.createElement("button"); //creates button element 
        button.innerHTML = "Make Player"; //access innerHTML of button to put string "MAKE PLAYER"
        button.addEventListener('click', function() {makePlayer(person)}); //add event listener to button that will send current person object to make player function
        li.appendChild(button); //attaches button to line item 
        li.appendChild(document.createTextNode(' --> ')); //attaches arrow to line item 
        li.appendChild(document.createTextNode(person.name + ' - ' + person.skills)); //attaches certain property values of current person to new line item
        listofPeople.append(li); //attaches new line item to list of people (UL)
    })
}
    

function makePlayer(person){

    const listOfDodgeBallPlayers = document.getElementById("players"); //access UL
    const dodgeBallPlayer = document.createElement("li"); //creates new line item 
    dodgeBallPlayer.id = person.name //assigns current person's name to new line item ID
    dodgeBallPlayer.appendChild(document.createTextNode('Name: ' +  person.name + ' - Age: ' + person.age + ' - Skills: ' + person.skills + ' - Birthplace: ' + person.placeBorn + ' - canThrowBall: ' + person.canThrowBall + ' - canDodgeBall: ' + person.canDodgeBall + ' - hasPaid: ' + person.hasPaid + ' - isHealthy: ' + person.isHealthy + ' - yearsExperience: ' + person.yearsExperience + ' ')); //adds properties to line item 
    listOfDodgeBallPlayers.append(dodgeBallPlayer); //attaches new line item to list of dodge ball players 
    
    const redButton = document.createElement("button"); //create red button 
    const blueButton = document.createElement("button"); //creates blue button 
    redButton.innerHTML =  "Red Team"; //assigns appropriate name 
    blueButton.innerHTML = "Blue Team"; //assigns appropriate name 
    dodgeBallPlayer.appendChild(redButton); //adds button to line item 
    dodgeBallPlayer.appendChild(document.createTextNode(' ')); 
    dodgeBallPlayer.appendChild(blueButton); //adds button to line item 
    redButton.addEventListener('click', function() {addRedTeam(person)}); //creates event listeners for each new button. When clicked, either the addRedTeam or addBlueTeam function will be executed and the current person object will be the argument for the input parameter
    blueButton.addEventListener('click', function() {addBlueTeam(person)}); 
    
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

  