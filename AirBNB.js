//creates class Game
class AirBNB {
    constructor(name, price, rating, location, rooms, availablity, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availablity;
        this.features = features;
    }



}

AirBNB.prototype.description = function() {

    document.querySelector('main').innerHTML = ' ';

    let main = document.querySelector('main');
    let newPara = document.createElement('p');
    newPara.id = 'Para';
    let sentence = 'Name: ' + this.name + ', Price: ' + this.price + ' /night ' + ', Rating: ' + this.rating + ' stars' +
        ', location: ' + this.location + ', rooms: ' + this.rooms + ', features: ' + this.features;
    newPara.innerHTML = sentence;
    main.appendChild(newPara);
    console.log(sentence);
}

AirBNB.prototype.available = function() {

    document.querySelector('main').innerHTML = ' ';

    let main2 = document.querySelector('main');
    let newPara2 = document.createElement('p');
    let sentence2 = 'Availability: ' + this.availability;
    newPara2.innerHTML = sentence2;
    main2.appendChild(newPara2);
    console.log(sentence2);
}


//creates new objects
let propertyOne = new AirBNB('Sunny Side Chicago',250,
    '4','Chicago', '3', 'Isn\'t Available','wifi, hot-tub, driveway')

let propertyOneButton = document.querySelectorAll('button')[0];

propertyOneButton.addEventListener('click', function(){
    propertyOne.description()});

let availableOneButton = document.querySelectorAll('button')[1];

availableOneButton.addEventListener('click', function(){
    propertyOne.available()});



let propertyTwo = new AirBNB('Igloo in Antarctica',1950,
    '5','Antarctica','1','Is Available','made of ice, penguins visit','ice-fishing hut')

let propertyTwoButton = document.querySelectorAll('button')[2];

propertyTwoButton.addEventListener('click', function(){
    propertyTwo.description()});

let availableTwoButton = document.querySelectorAll('button')[3];

availableTwoButton.addEventListener('click', function(){
    propertyTwo.available()});


class specialRate extends AirBNB {
    constructor(name, price, rating, location, rooms, availability, features, propertyType){
        super(name, price, rating, location, rooms, availability, features);
        this.propertyType = propertyType;
    }
}

specialRate.prototype.deducedRate = function(){

    document.querySelector('main').innerHTML = ' ';

    let main3 = document.querySelector('main');
    let newPara3 = document.createElement('p');
    propertyType = (this.price * .8);
    let sentence3 = 'Deduced Price: ' + propertyType + '    /night';
    newPara3.innerHTML = sentence3;
    main3.appendChild(newPara3);
    console.log(sentence3);
}

let specialProperty = new specialRate('CLEARANCE: Hood Apartment',50,', Rating: ' +
    '1','Compton','2','Is Available','Barred Windows, Padlocked Door')

let specialPropertyButton = document.querySelectorAll('button')[4];

specialPropertyButton.addEventListener('click', function(){
    specialProperty.description()});


let specialClearanceButton = document.querySelectorAll('button')[5];

specialClearanceButton.addEventListener('click',function(){
    specialProperty.deducedRate()
});

let specialAvailableButton = document.querySelectorAll('button')[6];

specialAvailableButton.addEventListener('click', function(){
    specialProperty.available()});

class superHost extends AirBNB {
    constructor(name, price, rating, location, rooms, availability, features, superRating){
        super(name, price, rating, location, rooms, availability, features);
        this.superRating = superRating;
    }
}


superHost.prototype.ratingHost = function(){

    document.querySelector('main').innerHTML = ' ';

    let main4 = document.querySelector('main');
    let newPara4 = document.createElement('p');
    let sentence4 = 'Super Host Rating: ' + this.superRating;
    newPara4.innerHTML = sentence4;
    main4.appendChild(newPara4);
    console.log(sentence4);
}

let specialRating= new superHost('Super Awesome Mansion in Beverly Hills' +
    '',5000,', Rating: ' + '5','Hollywood','24',
    'Is Available','Pool, 10 car garage,' +
    ' Crystal chandelier, butler, Maids, Chef','100/10')

let ratingPropertyButton = document.querySelectorAll('button')[7];

ratingPropertyButton.addEventListener('click', function(){
    specialRating.description()});


let hostRatingButton = document.querySelectorAll('button')[8];

hostRatingButton.addEventListener('click',function(){
    specialRating.ratingHost()
});

let ratingAvailableButton = document.querySelectorAll('button')[9];

ratingAvailableButton.addEventListener('click', function(){
    specialRating.available()});



