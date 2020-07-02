const speedometerElement = document.querySelector('.dashboard__speedometer');
const odometerElement = document.querySelector('.dashboard__odometer');
const warningElement = document.querySelector('.dashboard__warning');
const acceleratorElement = document.querySelector('.floorboard__accelerator');
const brakeElement = document.querySelector('.floorboard__brake');

let isOdometerActive = false;
let intervalId = null;

const car = new Car();

(function(){
    setupAcceleratorButton();
    setupBrakeButton();
    console.log("IIFE has setup the buttons")
})();

const updateSpeedometer = function(){
    speedometerElement.innerText = car.getSpeed();
}

const updateOdometer = function(){
    odometerElement.innerText = car.getDistanceTravelled();
}

const warnIfSpeeding = function(){
    if(car.isSpeeding()){
        warningElement.classList.remove('hidden');
    }
    else{
        warningElement.classList.add('hidden');
    }
}

const addMilesIfDriving = function(){
    if(car.isDriving() && !isOdometerActive){
        odometerActive();
    }
    else if(!car.isDriving() && isOdometerActive){
        console.log(`clearing t=${intervalId}`)
        clearInterval(intervalId);
        isOdometerActive = false;
    }
}
 
const odometerActive = function(){
    t = setInterval(function(){
        car.addMile();
        updateOdometer();
        isOdometerActive = true;
    }, 1000);
}

const setupAcceleratorButton = function(){
    acceleratorElement.addEventListener('click', ()=>{
        car.accelerate();
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}

const setupBrakeButton = function(){
    brakeElement.addEventListener('click', function(){
        car.brake();
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}

setupAcceleratorButton();
setupBrakeButton();

updateSpeedometer();
updateOdometer();
